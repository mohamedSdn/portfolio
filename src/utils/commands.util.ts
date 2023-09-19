import { cat, cd, clear, help, ls, pwd, whoami } from "@/algorithms";
import { IAppContext } from "@/contexts/app.context";
import { Dispatch, SetStateAction } from "react";
import { KnownCommands } from "./constants.util";
import { absGoTo } from "./files.util";
import { getSimilarWords, splitPath } from "./helpers.util";

export const COMMAND_ALGO_MAPPING: Record<KnownCommands, (appContext: IAppContext, fullCommand: string, extraParams: string[]) => void> = {
    [KnownCommands.HELP]: help,
    [KnownCommands.CLEAR]: clear,
    [KnownCommands.LS]: ls,
    [KnownCommands.CD]: cd,
    [KnownCommands.PWD]: pwd,
    [KnownCommands.WHOAMI]: whoami,
    [KnownCommands.CAT]: cat,
}

export const executeCommand = (command: string, appContext: IAppContext) => {
    command = command.trim();
    if (!command) {
        appContext.setQueryList(prev => [...prev, { directory: appContext.currentDirectory, command, result: null }]);
        return;
    }
    // add to history
    pushToCommandHistory(appContext.setCommandHistory, command);
    const [main, ...args] = parseCommand(command);
    const algo = COMMAND_ALGO_MAPPING[main as KnownCommands];
    if (!algo) {
        appContext.setQueryList(prev => [...prev, { directory: appContext.currentDirectory, command, result: "Command not found, type 'help' for a list of all available commands" }]);
        return;
    }
    algo(appContext, command, args);
}

const pushToCommandHistory = (setCommandHistory: Dispatch<SetStateAction<string[]>>, command: string) => {
    setCommandHistory(prev => {
        if (prev[prev.length - 1] === command) {
            return prev;
        }
        return [...prev, command];
    });
}

export const parseCommand = (command: string) => command.split(" ").filter(Boolean);

export const tryPredictArgs = (command: string, currentDirectory: string) => {
    const [main, ...args] = parseCommand(command);
    if (!([KnownCommands.CAT, KnownCommands.CD, KnownCommands.LS] as string[]).includes(main)) {
        return command;
    }
    const lastElemet = args.at(-1) ?? "";
    const files = absGoTo(splitPath(currentDirectory));
    const similar = getSimilarWords(lastElemet, files.map(child => child.name))[0];
    if (!similar) {
        return command;
    }
    return [main, ...args.slice(0, -1), similar].join(" ");
}
