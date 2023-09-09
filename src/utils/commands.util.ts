import { cd, clear, help, ls, pwd, whoami } from "@/algorithms";
import { IAppContext } from "@/contexts/app.context";
import { KnownCommands } from "./constants.util";

export const COMMAND_ALGO_MAPPING: Record<KnownCommands, (appContext: IAppContext, extraParams: Record<string, any>) => void> = {
    [KnownCommands.HELP]: help,
    [KnownCommands.CLEAR]: clear,
    [KnownCommands.LS]: ls,
    [KnownCommands.CD]: cd,
    [KnownCommands.PWD]: pwd,
    [KnownCommands.WHOAMI]: whoami,
}

export const executeCommand = (command: string, appContext: IAppContext, extraParams: Record<string, any>) => {
    if (!command) {
        appContext.setQueryList(prev => [...prev, { command, result: null }]);
        return;
    }
    const algo = COMMAND_ALGO_MAPPING[command as KnownCommands];
    if (!algo) {
        appContext.setQueryList(prev => [...prev, { command, result: "Command not found, type 'help' for a list of all available commands" }]);
        return;
    }
    algo(appContext, extraParams);
}
