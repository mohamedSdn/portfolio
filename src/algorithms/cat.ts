import { IAppContext } from "@/contexts/app.context";
import fileContents from "@/file contents";
import { absGoTo } from "@/utils/files.util";
import { splitPath } from "@/utils/helpers.util";

export const cat = (
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
                result: "'cat' takes exactly one argument"
            }
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
        const result = absGoTo(directories.slice(0, -1));
        const file = result.find(
            (file) => !file.isDirectory && file.name === directories.at(-1)
        );
        if (!file) {
            setQueryList((prev) => [
                ...prev,
                {
                    directory: currentDirectory,
                    command: fullCommand,
                    result: "No such file"
                }
            ]);
            return;
        }
        const content = fileContents.find(
            (fileContent) => fileContent.filename === file.name
        )?.content;
        setQueryList((prev) => [
            ...prev,
            {
                directory: currentDirectory,
                command: fullCommand,
                result: content ?? "File is empty"
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
