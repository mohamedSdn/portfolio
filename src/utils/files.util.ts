import { IDirectory, IFile } from "@/interfaces/file.interface";

const FILES_HIERARCHY: IFile[] = [
    {
        name: "home",
        isDirectory: true,
        children: [
            {
                name: "projects",
                isDirectory: true,
                children: [
                    {
                        name: "BMLab.txt",
                        isDirectory: false
                    },
                    {
                        name: "Elc.txt",
                        isDirectory: false
                    },
                    {
                        name: "Plsp.txt",
                        isDirectory: false
                    },
                    {
                        name: "Dentily.txt",
                        isDirectory: false
                    },
                    {
                        name: "eMotion.txt",
                        isDirectory: false
                    },
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
    },
];

export const absGoTo = (path: string[]) => {
    let root = FILES_HIERARCHY;
    for (const directory of path) {
        const index = root.findIndex(file => file.name === directory);
        if (index === -1) {
            throw "Path does not exist";
        }
        const _directory = root[index];
        isDirectory(_directory);
        root = _directory.children;
    }
    return root;
}

function isDirectory(file: IFile): asserts file is IDirectory {
    if (!file.isDirectory) {
        throw "Not a directory";
    }
}
