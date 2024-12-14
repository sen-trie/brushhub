import { error } from '@sveltejs/kit';
import { getUser } from '$lib/util';
import type { PageLoad } from './$types';
import artistDB from '$lib/db/artist.json';

export const ssr = false;

export const load: PageLoad = () => {
    const currentUser = getUser();

    const artist = artistDB.find((user) => user.id === currentUser.id);
    if (!artist) {
        // TODO CHANGE TO SOMETHING ELSE
        throw error(404, 'You are not the current user');
    }

    return { artist };
};
