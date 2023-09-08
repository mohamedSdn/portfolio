import { KNOWN_COMMANDS } from "./constants.util";

export const processCommand = (command: string) => {
    if (!command) {
        return null;
    }
    if (!KNOWN_COMMANDS.includes(command)) {
        return "Command not found, type 'help' for a list of all available commands";
    }
    return "test";
}
