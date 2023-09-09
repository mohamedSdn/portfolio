interface IFileBase {
    name: string;
}

interface IDirectory extends IFileBase {
    isDirectory: true;
    children: IFile[];
}

interface ILeafFile extends IFileBase {
    isDirectory: false;
}

export type IFile = IDirectory | ILeafFile;
