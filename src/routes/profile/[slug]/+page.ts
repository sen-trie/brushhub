import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import artists from '$lib/db/artist.json';

export const load: PageLoad = ({ params }) => {
    let artist = artists.find((a) => a.username === params.slug);
    if (artist) {
        return artist;
    }

    error(404, 'User not found');
};
