// change directory algorithm
import { IAppContext } from "@/contexts/app.context";
import { splitPath } from "@/utils/helpers.util";

export const cd = (appContext: IAppContext, extraParams: Record<string, any>) => {
    const directories = splitPath(appContext.currentDirectory);
    console.log(directories);
    return "";
}
