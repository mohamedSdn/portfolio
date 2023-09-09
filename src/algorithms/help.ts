import { IAppContext } from "@/contexts/app.context";
import { KNOWN_COMMANDS, KnownCommands } from "@/utils/constants.util";

const HELP_MSG = `List of available commands: ${KNOWN_COMMANDS.join(', ')}`;

export const help = ({ setQueryList }: IAppContext) => {
    setQueryList(prev => [...prev, { command: KnownCommands.HELP, result: HELP_MSG }]);
}
