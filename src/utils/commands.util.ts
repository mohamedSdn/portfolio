import { cd, clear, help, ls, pwd, whoami } from "@/algorithms";
import { IAppContext } from "@/contexts/app.context";

export enum KnownCommands {
    HELP = "help",
    CLEAR = "clear",
    LS = "ls",
    CD = "cd",
    PWD = "pwd",
    WHOAMI = "whoami",
}

export const KNOWN_COMMANDS = [...Object.values(KnownCommands)] as string[];

export const COMMAND_ALGO_MAPPING: Record<KnownCommands, (appContext: IAppContext, callback: Function, extraParams?: Record<string, any>) => string> = {
    [KnownCommands.HELP]: help,
    [KnownCommands.CLEAR]: clear,
    [KnownCommands.LS]: ls,
    [KnownCommands.CD]: cd,
    [KnownCommands.PWD]: pwd,
    [KnownCommands.WHOAMI]: whoami,
}

export const processCommand = (command: string, appContext: IAppContext, callback: Function, extraParams?: Record<string, any>) => {
    if (!command) {
        return null;
    }
    const algo = COMMAND_ALGO_MAPPING[command as KnownCommands];
    if (!algo) {
        return "Command not found, type 'help' for a list of all available commands";
    }
    return algo(appContext, callback, extraParams);
}
