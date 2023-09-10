// change directory algorithm
import { IAppContext } from "@/contexts/app.context";
import { splitPath } from "@/utils/helpers.util";

export const cd = (appContext: IAppContext, extraParams: string[]) => {
    const directories = splitPath(appContext.currentDirectory);
    console.log(directories);
    return "";
}
