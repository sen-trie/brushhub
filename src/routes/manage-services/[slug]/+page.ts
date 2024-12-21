import { error } from '@sveltejs/kit';
import { getUser } from '$lib/util';
import type { PageLoad, EntryGenerator } from './$types';
import { pullDB } from '$lib/db';

export const ssr = false;

export const entries: EntryGenerator = async () => {
    return [{ slug: 'hungry_anne' }];
};

export const load: PageLoad = ({ params }) => {
    const searchQuery = params.slug.toLowerCase();
    const currentUser = getUser();

    const artist = pullDB('user', {}, { username: searchQuery });
    if (!artist || currentUser.username !== artist.username) {
        // TODO CHANGE TO SOMETHING ELSE
        throw error(404, 'You are not the current artist');
    }

    const service = pullDB('services', { artistId: Number(artist.id) }, {});
    return { service };
};
