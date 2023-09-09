import { AppContext } from "@/contexts/app.context";
import { FC, FocusEvent, KeyboardEvent, useContext, useState } from "react";
import styles from './terminal-query.module.css';
import { KnownCommands, processCommand } from "@/utils/commands.util";

interface Props {
    command: string,
    disabled?: boolean,
}

const TerminalQuery: FC<Props> = ({ command: _command, disabled = true }) => {

    const [command, setCommand] = useState(_command ?? "");
    const appContext = useContext(AppContext);

    const preventBlur = (e: FocusEvent<HTMLInputElement>) => {
        e.target.focus();
    }

    const handleEnterPressed = (e: KeyboardEvent) => {
        if (e.code !== "Enter") {
            return;
        }
        // clear field
        setCommand("");
        const result = processCommand(command, appContext, () => { });
        appContext.setQueryList(prev => [...prev, { command, result }]);
    }

    return (
        <div className="flex">
            <span className="text-[#72dd34]">you@portfolio</span>
            <span className="mx-[2px]">:</span>
            <span className="text-[#628ac5]">{appContext.currentDirectory}</span>
            <span>$</span>
            <div className="relative grow ml-1">
                {
                    !disabled &&
                    <input
                        type="text" disabled={disabled} autoFocus onBlur={preventBlur}
                        value={command} onChange={(e) => setCommand(e.target.value)}
                        onKeyUp={handleEnterPressed}
                        className="bg-transparent outline-none absolute left-0 w-full caret-transparent z-[-1]"
                    />
                }
                <span className={`${disabled ? "" : styles["command-span"]} left-0 h-full`}>{command}</span>
            </div>
        </div>
    )
}

export default TerminalQuery;
