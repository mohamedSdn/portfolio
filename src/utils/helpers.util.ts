export const splitPath = (path: string) => {
    const directories = path.split("/").filter(Boolean);
    return directories;
}
