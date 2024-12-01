import { error } from '@sveltejs/kit';
import { getUser } from '$lib/util';
import type { PageLoad, EntryGenerator } from './$types';
import type { Service } from '$lib/types';
import userDB from '$lib/db/user.json';
import serviceDB from '$lib/db/services.json';

export const entries: EntryGenerator = async () => {
    return [{ slug: 'hungry_anne' }];
};

export const load: PageLoad = ({ params }) => {
    const searchQuery = params.slug.toLowerCase();
    const currentUser = getUser();

    const artist = userDB.find((user) => user.username === searchQuery);
    if (!artist || currentUser.username !== artist.username) {
        // TODO CHANGE TO SOMETHING ELSE
        throw error(404, 'You are not the current artist');
    }

    const service: (Service[] | undefined) = serviceDB.filter((service) => service.artistId === Number(artist.id));
    if (!service) {
        throw error(404, 'No matching artist found for your search');
    }

    return { service };
};
