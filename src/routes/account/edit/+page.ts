import { getUser } from "$lib/util";
import type { PageLoad } from "./$types";
import artistDB from "$lib/db/artist.json";

export const load: PageLoad = () => {
    const currentUser = getUser();

    const artist = artistDB.find((user) => user.id === currentUser.id);
    return { artist };
};