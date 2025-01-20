import { error } from '@sveltejs/kit';
import { getUser } from '$lib/util';
import type { PageLoad } from './$types';
import { pullDB } from '$lib/db';

export const ssr = false;

export const load: PageLoad = () => {
    const currentUser = getUser();

    const artist = pullDB('artist', {}, { id: currentUser.id });
    if (!artist) {
        throw error(404, 'You are not the current user');
    }

    return { artist };
};
