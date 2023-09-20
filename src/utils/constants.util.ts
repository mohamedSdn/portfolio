export enum KnownCommands {
    HELP = "help",
    CLEAR = "clear",
    LS = "ls",
    CD = "cd",
    PWD = "pwd",
    WHOAMI = "whoami",
    CAT = "cat"
}

export const KNOWN_COMMANDS = [...Object.values(KnownCommands)] as string[];

export const ACCEPTABLE_CHAR_REGEX = /^[a-zA-Z0-9/\-\\\.\s]$/;
