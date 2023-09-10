import { AppContext } from "@/contexts/app.context";
import { executeCommand } from "@/utils/commands.util";
import { FC, FocusEvent, KeyboardEvent, useContext, useRef, useState } from "react";
import styles from './terminal-query.module.css';

interface Props {
    directory: string,
    command: string,
    disabled?: boolean,
}

const TerminalQuery: FC<Props> = ({ directory, command: _command, disabled = true }) => {

    const [command, setCommand] = useState(_command ?? "");
    const appContext = useContext(AppContext);
    const commandHistoryIndex = useRef(0);

    const preventBlur = (e: FocusEvent<HTMLInputElement>) => {
        e.target.focus();
    }

    const handleKeyPressed = (e: KeyboardEvent) => {
        if (e.code === "Enter") {
            // clear field
            setCommand("");
            executeCommand(command, appContext);
        } else if (e.code === "ArrowUp") {
            setCommandFromHistory("up");
        } else if (e.code === "ArrowDown") {
            setCommandFromHistory("down");
        }
    }

    const setCommandFromHistory = (dir: "up" | "down") => {
        commandHistoryIndex.current = appContext.commandHistory.length === 0 ? 0 :
            (commandHistoryIndex.current + (dir === "down" ? 1 : -1) + appContext.commandHistory.length) % appContext.commandHistory.length;
        const command = appContext.commandHistory[commandHistoryIndex.current];
        if (command) {
            setCommand(command);
        }
    }

    return (
        <div className="flex">
            <span className="text-[#72dd34]">you@portfolio</span>
            <span className="mx-[2px]">:</span>
            <span className="text-[#628ac5]">{directory}</span>
            <span>$</span>
            <div className="relative grow ml-1">
                {
                    !disabled &&
                    <input
                        type="text" disabled={disabled} autoFocus onBlur={preventBlur}
                        value={command} onChange={(e) => setCommand(e.target.value)}
                        onKeyUp={handleKeyPressed}
                        className="bg-transparent outline-none absolute left-0 w-full caret-transparent opacity-0 z-[-1]"
                    />
                }
                <span className={`${disabled ? "" : styles["command-span"]} left-0 h-full`}>
                    <pre>{command}</pre>
                </span>
            </div>
        </div>
    )
}

export default TerminalQuery;
