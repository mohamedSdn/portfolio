// change directory algorithm
import { IAppContext } from "@/contexts/app.context";
import { absGoTo } from "@/utils/files.util";
import { splitPath } from "@/utils/helpers.util";

export const cd = (
    { currentDirectory, setCurrentDirectory, setQueryList }: IAppContext,
    fullCommand: string,
    extraParams: string[]
) => {
    if (extraParams.length > 1) {
        setQueryList((prev) => [
            ...prev,
            {
                directory: currentDirectory,
                command: fullCommand,
                result: "'cd' takes one or zero arguments only"
            }
        ]);
        return;
    }
    if (extraParams.length === 0) {
        setCurrentDirectory("/home");
        setQueryList((prev) => [
            ...prev,
            { directory: currentDirectory, command: fullCommand, result: null }
        ]);
        return;
    }
    let fullPath = extraParams[0].startsWith("/")
        ? extraParams[0]
        : `${currentDirectory === "/" ? "" : currentDirectory}/${
              extraParams[0]
          }`;
    try {
        const directories = splitPath(fullPath);
        absGoTo(directories);
        setCurrentDirectory(fullPath);
        setQueryList((prev) => [
            ...prev,
            { directory: currentDirectory, command: fullCommand, result: null }
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
