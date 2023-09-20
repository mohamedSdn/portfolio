import { IAppContext } from "@/contexts/app.context";
import { KNOWN_COMMANDS } from "@/utils/constants.util";

const HELP_MSG = `List of available commands: ${KNOWN_COMMANDS.join(", ")}`;

export const help = (
    { setQueryList, currentDirectory }: IAppContext,
    fullCommand: string
) => {
    setQueryList((prev) => [
        ...prev,
        { directory: currentDirectory, command: fullCommand, result: HELP_MSG }
    ]);
};
