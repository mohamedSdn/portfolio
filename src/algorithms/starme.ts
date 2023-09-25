import { IAppContext } from "@/contexts/app.context";

export const starme = (
    { setQueryList, currentDirectory }: IAppContext,
    fullCommand: string
) => {
    window.open("https://github.com/mohamedsdn/portfolio", "_blank");
    setQueryList((prev) => [
        ...prev,
        { directory: currentDirectory, command: fullCommand, result: null }
    ]);
};
