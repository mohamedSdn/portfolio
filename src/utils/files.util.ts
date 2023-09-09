import { IFile } from "@/interfaces/file.interface";

export const FILES_HIERARCHY: IFile = {
    name: "home",
    isDirectory: true,
    children: [
        {
            name: "projects",
            isDirectory: true,
            children: [

            ]
        },
        {
            name: "aboutme.txt",
            isDirectory: false
        },
        {
            name: "readme.txt",
            isDirectory: false
        }
    ]
}
