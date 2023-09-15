import { AppContext } from "@/contexts/app.context";
import { executeCommand, tryPredictArgs } from "@/utils/commands.util";
import { FC, KeyboardEvent, useContext, useRef, useState } from "react";
import CommandInput, { ICommandInputRef } from "./command-input/CommandInput";

interface Props {
    directory: string,
    command: string,
    disabled?: boolean,
}

const TerminalQuery: FC<Props> = ({ directory, command: _command, disabled = true }) => {

    const [command, setCommand] = useState(_command ?? "");
    const appContext = useContext(AppContext);
    const commandHistoryIndex = useRef(0);
    const commandInputRef = useRef<ICommandInputRef>();

    const handleKeyPressed = (e: KeyboardEvent) => {
        if (e.code === "Enter" || e.code === "NumpadEnter") {
            // clear field
            setCommand("");
            commandHistoryIndex.current = 0;
            commandInputRef.current?.updateCaretExplicit(0);
            executeCommand(command, appContext);
        } else if (e.code === "ArrowUp") {
            setCommandFromHistory("up");
        } else if (e.code === "ArrowDown") {
            setCommandFromHistory("down");
        } else if (e.code === "Tab") {
            e.preventDefault();
            const newCommand = tryPredictArgs(command, appContext.currentDirectory);
            setCommand(newCommand);
            commandInputRef.current?.updateCaretExplicit(newCommand.length);
        }
    }

    const setCommandFromHistory = (dir: "up" | "down") => {
        commandHistoryIndex.current = appContext.commandHistory.length === 0 ? 0 :
            (commandHistoryIndex.current + (dir === "down" ? 1 : -1) + appContext.commandHistory.length) % appContext.commandHistory.length;
        const command = appContext.commandHistory[commandHistoryIndex.current];
        if (command) {
            setCommand(command);
            commandInputRef.current?.updateCaretExplicit(command.length);
        }
    }

    return (
        <div className="flex">
            <span className="text-[#72dd34]">guest@portfolio</span>
            <span className="mx-[2px]">:</span>
            <span className="text-[#628ac5]">{directory}</span>
            <span>$</span>
            <div className="relative grow ml-1">
                <CommandInput
                    content={command}
                    setContent={setCommand}
                    onKeyPressed={handleKeyPressed}
                    disabled={disabled}
                    ref={commandInputRef}
                />
            </div>
        </div>
    )
}

export default TerminalQuery;
