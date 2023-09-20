import { IAppContext } from "@/contexts/app.context";

export const pwd = (
    { currentDirectory, setQueryList }: IAppContext,
    fullCommand: string
) => {
    setQueryList((prev) => [
        ...prev,
        {
            directory: currentDirectory,
            command: fullCommand,
            result: currentDirectory
        }
    ]);
};
