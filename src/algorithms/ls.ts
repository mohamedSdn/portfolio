import { IAppContext } from "@/contexts/app.context";
import { absGoTo } from "@/utils/files.util";

export const ls = ({ currentDirectory, setQueryList }: IAppContext, fullCommand: string, extraParams: string[]) => {
    if (extraParams.length > 1) {
        setQueryList(prev => [...prev, { directory: currentDirectory, command: fullCommand, result: "'ls' only takes zero or one argument only" }]);
        return;
    }
    let fullPath = extraParams[0] ?
        extraParams[0].startsWith('/') ? extraParams[0] : `${currentDirectory === "/" ? "" : currentDirectory}/${extraParams[0]}` :
        currentDirectory;
    try {
        const result = absGoTo(fullPath);
        const filesToDisplay = result.map(file => file.name).join(" ");
        setQueryList(prev => [...prev, { directory: currentDirectory, command: fullCommand, result: filesToDisplay }]);
    } catch (error: any) {
        setQueryList(prev => [...prev, { directory: currentDirectory, command: fullCommand, result: error.toString() }]);
    }
}
