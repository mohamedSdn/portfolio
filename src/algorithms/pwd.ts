import { IAppContext } from "@/contexts/app.context";
import { KnownCommands } from "@/utils/constants.util";

export const pwd = ({ currentDirectory, setQueryList }: IAppContext) => {
    setQueryList(prev => [...prev, { command: KnownCommands.PWD, result: currentDirectory }]);
}
