import { IAppContext } from "@/contexts/app.context";

export const clear = (appContext: IAppContext) => {
    appContext.setQueryList([]);
}
