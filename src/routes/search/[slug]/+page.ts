import { error } from '@sveltejs/kit';
import type { PageLoad, EntryGenerator  } from './$types';
import artworkDB from '$lib/db/artwork.json';
import tagsDB from '$lib/db/tags.json';

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

    if (artwork.length === 0) {
        throw error(404, 'No artworks found for the matching tag');
    }

    return {
        artwork
    };
};
