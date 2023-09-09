// change directory algorithm
import { IAppContext } from "@/contexts/app.context";
import { FILES_HIERARCHY } from "@/utils/files.util";
import { splitPath } from "@/utils/helpers.util";

export const cd = (appContext: IAppContext, callback: Function, extraParams?: Record<string, any>) => {
    const directories = splitPath(appContext.currentDirectory);
    console.log(directories);
    return "";
}
