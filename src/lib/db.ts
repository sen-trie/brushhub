import artworkDB from '$lib/db/artwork.json';
import tosData from '$lib/db/tos.json';
import services from '$lib/db/services.json';
import artistDB from '$lib/db/artist.json';
import tagsDB from '$lib/db/tags.json';
import userDB from '$lib/db/user.json';
import requestDB from '$lib/db/request.json';
import reviewDB from '$lib/db/review.json';

type DBKeys = 'artwork' | 'tos' | 'services' | 'artist' | 'tags' | 'user' | 'request' | 'review';
type callbackRecord = Record<
    string,
    string | number | boolean | Record<string, String> | ((obj: any) => boolean)
>;

const DB_JSON: Record<DBKeys, any[]> = {
    user: userDB,
    tags: tagsDB,
    artist: artistDB,
    artwork: artworkDB,
    tos: tosData,
    services: services,
    request: requestDB,
    review: reviewDB
};

function pullCallback(item: any, callbackRecord: callbackRecord): any {
    let result: boolean = true;
    for (const key in callbackRecord) {
        const callbackValue = callbackRecord[key];
        if (typeof callbackValue === 'function') {
            if (!callbackValue(item)) {
                return false;
            }
        } else if (item[key] !== callbackValue) {
            return false;
        }
    }
    return result;
}

function pullSpecific(
    dbData: Array<any>,
    filter: callbackRecord,
    condition: callbackRecord,
    currentOverride: Record<string, any> = {}
): any | any[] {
    let db = dbData;

    if (Object.keys(currentOverride).length > 0 && Object.keys(condition).length > 0) {
        const [[key, value]] = Object.entries(condition);
        if (currentOverride[String(value)]) {
            return currentOverride[String(value)];
        }
    }

    if (Object.keys(filter).length !== 0) {
        db = db.filter((item: any) => pullCallback(item, filter));
    }

    if (Object.keys(condition).length !== 0) {
        const res = db.find((item: any) => pullCallback(item, condition));
        return res ?? null;
    }
    return db;
}

export function pullDB(
    db: DBKeys,
    filter: callbackRecord = {},
    condition: callbackRecord = {}
): any | any[] {
    let currentOverride = {}
    if (overrides[db]) {
        currentOverride = overrides[db];
    }

    return pullSpecific(DB_JSON[db], filter, condition, currentOverride);
}

let overrides: Record<string, any> = {}
export function saveUser(newUser: Record<string, any>) {
    const userId = newUser["id"];
    overrides.artist = {
        ...overrides.users,
        [userId]: newUser
    }
}

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

export const getSingle = (queryLocal: string, specificImg: string = ''): string => {
    if (specificImg.startsWith('data:image')) return specificImg;
    return getImage(queryLocal, specificImg, imageModules(queryLocal));
};

export const wrapDefault = (queryLocal: string, checkedString: any): string => {
    if (getSingle(queryLocal, checkedString)) return getSingle(queryLocal, checkedString);
    return getImage(queryLocal, 'default.png', imageModules(queryLocal));
}
