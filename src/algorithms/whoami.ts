import { IAppContext } from "@/contexts/app.context";
import { KnownCommands } from "@/utils/constants.util";

export const whoami = ({ setQueryList }: IAppContext) => {
    setQueryList(prev => [...prev, { command: KnownCommands.WHOAMI, result: "you" }]);
}
