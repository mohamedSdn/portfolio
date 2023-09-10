interface IFileBase {
    name: string;
}

export interface IDirectory extends IFileBase {
    isDirectory: true;
    children: IFile[];
}

export interface ILeafFile extends IFileBase {
    isDirectory: false;
}

export type IFile = IDirectory | ILeafFile;
