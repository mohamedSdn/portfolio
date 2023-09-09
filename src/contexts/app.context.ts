import { IQuery } from "@/interfaces/query.interface";
import { Dispatch, SetStateAction, createContext } from "react";

interface IAppContext {
    queryList: IQuery[];
    setQueryList: Dispatch<SetStateAction<IQuery[]>>;
    currentDirectory: string;
    setCurrentDirectory: Dispatch<SetStateAction<string>>;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);
