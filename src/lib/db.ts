// THIS IS AN "API" TO PULL DATA FROM
// IN REALITY, ALL OF THIS WOULD BE ASYNC QUERIES

export const imageModules: any = (queryLocal: string = 'artwork') => {
    switch (queryLocal) {
        case 'artwork':
            return import.meta.glob(
                '$lib/assets/artwork/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp,svg}',
                {
                    eager: true,
                    query: '?url',
                    import: 'default'
                }
            );
        case 'banner':
            return import.meta.glob(
                '$lib/assets/banner/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp,svg}',
                {
                    eager: true,
                    query: '?url',
                    import: 'default'
                }
            );
        case 'dp':
            return import.meta.glob('$lib/assets/dp/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp,svg}', {
                eager: true,
                query: '?url',
                import: 'default'
            });
        case 'thumbnail':
            return import.meta.glob(
                '$lib/assets/thumbnail/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp,svg}',
                {
                    eager: true,
                    query: '?url',
                    import: 'default'
                }
            );
        default:
            return import.meta.glob('$lib/assets/*/**', {
                eager: true,
                query: '?url',
                import: 'default'
            });
    }
};

export const getImage = (
    queryLocal: string,
    specificImg: string,
    imageDict: Record<string, string>
) => {
    return imageDict[`/src/lib/assets/${queryLocal}/${specificImg}`];
};

export const getSingle = (queryLocal: string, specificImg: string = '') => {
    return getImage(queryLocal, specificImg, imageModules(queryLocal));
};
