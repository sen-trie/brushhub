import { error } from '@sveltejs/kit';
import type { PageLoad, EntryGenerator  } from './$types';
import tagsDB from '$lib/db/tags.json';
import artworkDB from '$lib/db/artwork.json';
import artistDB from '$lib/db/artist.json';
import userDB from '$lib/db/user.json';
import serviceDB from '$lib/db/services.json'

export const entries: EntryGenerator = async () => {
	return [
		{ slug: 'anime' },
		{ slug: '3d' }
	];
};

export const load: PageLoad = ({ params }) => {
    const searchQuery = params.slug.toLowerCase();

    const matchingTag = tagsDB.find((tag) => tag.name.toLowerCase() === searchQuery);
    if (!matchingTag) {
        throw error(404, 'No matching tag found for your search');
    }

    const artwork = artworkDB.filter((artwork) => artwork.tags.includes(matchingTag.name));
    const artist = artistDB
                    .filter((artist) => artist.tags.includes(matchingTag.name))
                    .map((artist) => {
                        const user = userDB.find((user) => user.id === artist.id);
                        return { ...artist, ...user };
                    });
    const service = serviceDB.filter((service) => service.tags.includes(matchingTag.name))
    return { artwork, artist, service };
};
