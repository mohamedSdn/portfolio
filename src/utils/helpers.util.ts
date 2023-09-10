import { IFile } from "@/interfaces/file.interface";

export const splitPath = (path: string) => {
    const directories = path.split("/").filter(Boolean);
    return directories;
}

export const formatLsOutput = (input: IFile[]) => {
    const filesToDisplay = input.map(file => {
        return `<span style="margin-right: 1rem; ${file.isDirectory ? "color: #6da5ea;" : ""}">${file.name}</span>`;
    }).join(" ");
    return filesToDisplay;
}
