import { IAppContext } from "@/contexts/app.context";

export const clear = ({ setQueryList }: IAppContext) => {
    setQueryList([]);
};
