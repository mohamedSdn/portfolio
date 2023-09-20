import { IAppContext } from "@/contexts/app.context";

export const whoami = (
    { setQueryList, currentDirectory }: IAppContext,
    fullCommand: string
) => {
    setQueryList((prev) => [
        ...prev,
        { directory: currentDirectory, command: fullCommand, result: "guest" }
    ]);
};
