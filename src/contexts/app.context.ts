import { IQuery } from "@/interfaces/query.interface";
import { Dispatch, SetStateAction, createContext } from "react";

export interface IAppContext {
    commandHistory: string[];
    setCommandHistory: Dispatch<SetStateAction<string[]>>;
    queryList: IQuery[];
    setQueryList: Dispatch<SetStateAction<IQuery[]>>;
    currentDirectory: string;
    setCurrentDirectory: Dispatch<SetStateAction<string>>;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);
