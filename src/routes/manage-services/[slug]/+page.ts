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

    const artistUser = pullDB('user', {}, { username: searchQuery });
    if (!artistUser || currentUser.username !== artistUser.username) {
        throw error(404, 'You are not the current artist');
    }

    const service = pullDB('services', { artistId: Number(artistUser.id) }, {});
    const artist = pullDB('artist', { id: Number(artistUser.id) }, {})[0];
    return { service, artist };
};
