import { IAppContext } from "@/contexts/app.context";
import { absGoTo } from "@/utils/files.util";
import { formatLsOutput, splitPath } from "@/utils/helpers.util";

export const ls = (
    { currentDirectory, setQueryList }: IAppContext,
    fullCommand: string,
    extraParams: string[]
) => {
    if (extraParams.length > 1) {
        setQueryList((prev) => [
            ...prev,
            {
                directory: currentDirectory,
                command: fullCommand,
                result: "'ls' takes one or zero arguments only"
            }
        ]);
        return;
    }
    let fullPath = extraParams[0]
        ? extraParams[0].startsWith("/")
            ? extraParams[0]
            : `${currentDirectory === "/" ? "" : currentDirectory}/${
                  extraParams[0]
              }`
        : currentDirectory;
    try {
        const directories = splitPath(fullPath);
        const result = absGoTo(directories);
        const filesToDisplay = formatLsOutput(result);
        setQueryList((prev) => [
            ...prev,
            {
                directory: currentDirectory,
                command: fullCommand,
                result: filesToDisplay
            }
        ]);
    } catch (error: any) {
        setQueryList((prev) => [
            ...prev,
            {
                directory: currentDirectory,
                command: fullCommand,
                result: error.toString()
            }
        ]);
    }
};
