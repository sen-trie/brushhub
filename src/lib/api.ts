// THIS IS AN "API" TO PULL DATA FROM
// IN REALITY, ALL OF THIS WOULD BE ASYNC QUERIES

const imageDict: Record<string, Map<string, string>> = {};

Object.entries(import.meta.glob([`$lib/assets/**/**`], {
    eager: true,
    query: '?url',
    import: 'default'
})).forEach(([path]) => {
    const folderMatch = path.match(/\/assets\/([^/]+)\//);
    const filenameMatch = path.match(/\/([^/]+)$/);

    if (folderMatch && filenameMatch) {
        const folder = folderMatch[1];
        const filename = filenameMatch[1];

        if (!imageDict[folder]) {
            imageDict[folder] = new Map();
        }

        imageDict[folder].set(filename, path);
    }
})


export function importImages(subfolder: string): Record<string, string> {
    return Object.fromEntries(imageDict[subfolder]) ?? null;
}

export function importSingle(subfolder: string, item: string): string {
    return imageDict[subfolder].get(item) ?? '';
}