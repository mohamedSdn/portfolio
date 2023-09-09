"use client";
import { AppContext } from "@/contexts/app.context";
import Terminal from "./components/Terminal";
import { useState } from "react";
import { IQuery } from "@/interfaces/query.interface";

export default function Home() {

    const [queryList, setQueryList] = useState<IQuery[]>([]);
    const [currentDirectory, setCurrentDirectory] = useState<string>("/");

    return (
        <AppContext.Provider value={{
            queryList,
            setQueryList,
            currentDirectory,
            setCurrentDirectory
        }}>
            <main className="h-full">
                <Terminal />
            </main>
        </AppContext.Provider>
    )
}
