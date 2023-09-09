export enum KnownCommands {
    HELP = "help",
    CLEAR = "clear",
    LS = "ls",
    PWD = "pwd",
    WHOAMI = "whoami",
}

export const KNOWN_COMMANDS = [...Object.values(KnownCommands)] as string[];
