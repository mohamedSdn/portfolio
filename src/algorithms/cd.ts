// change directory algorithm
import { IAppContext } from "@/contexts/app.context";
import { absGoTo } from "@/utils/files.util";

export const cd = ({ currentDirectory, setCurrentDirectory, setQueryList }: IAppContext, fullCommand: string, extraParams: string[]) => {
    if (extraParams.length > 1) {
        setQueryList(prev => [...prev, { directory: currentDirectory, command: fullCommand, result: "'cd' only takes one argument" }]);
        return;
    }
    if (extraParams.length === 0) {
        setCurrentDirectory("/home");
        setQueryList(prev => [...prev, { directory: currentDirectory, command: fullCommand, result: null }]);
        return;
    }
    let fullPath = extraParams[0].startsWith('/') ? extraParams[0] : `${currentDirectory}/${extraParams[0]}`;
    try {
        absGoTo(fullPath);
        setCurrentDirectory(fullPath);
        setQueryList(prev => [...prev, { directory: currentDirectory, command: fullCommand, result: null }]);
    } catch (error: any) {
        setQueryList(prev => [...prev, { directory: currentDirectory, command: fullCommand, result: error.toString() }]);
    }
}
