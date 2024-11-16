import { error } from '@sveltejs/kit';
import type { PageLoad, EntryGenerator } from './$types';
import users from '$lib/db/user.json';
import artists from '$lib/db/artist.json';

export const entries: EntryGenerator = async () => {
	return [
		{ slug: 'hungry_anne' },
	];
};

export const load: PageLoad = ({ params }) => {
    const user = users.find((u) => u.username === params.slug);
    if (!user) {
        throw error(404, 'User not found');
    }

    const artist = artists.find((a) => a.id === user.id);
    if (!artist) {
        throw error(404, 'Artist profile not found');
    }

    return {
        ...user,
        ...artist
    };
};
