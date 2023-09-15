import { IFile } from "@/interfaces/file.interface";
import { ACCEPTABLE_CHAR_REGEX } from "./constants.util";

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

export const appendAtIndex = (str: string, index: number, newContent: string) => {
    index = index < 0 ? 0 : index;
    const start = str.slice(0, index);
    const end = str.slice(index);
    return start + newContent + end;
}

export const deleteChar = (str: string, index: number) => {
    if (index < 0) {
        return str;
    }
    const start = str.slice(0, index);
    const end = str.slice(index + 1);
    return start + end;
}

export const isCharAcceptable = (char: string) => ACCEPTABLE_CHAR_REGEX.test(char);
