import { error } from '@sveltejs/kit';
import type { PageLoad, EntryGenerator } from './$types';
import { pullDB } from '$lib/db';

export const entries: EntryGenerator = async () => {
    return [{ slug: 'anime' }, { slug: '3d' }];
};

export const load: PageLoad = ({ params }) => {
    const searchQuery = params.slug.toLowerCase();

    const matchingTag = pullDB('tags', {}, { 'name': (tag) => (tag.name.toLowerCase() === searchQuery )});
    if (!matchingTag) {
        throw error(404, 'No matching tag found for your search');
    }

    const artwork = pullDB('artwork', { 'tags': (artwork) => ( artwork.tags.includes(matchingTag.name) )}, {});
    const artist = pullDB('artist', { 'tags': (artist) => ( artist.tags.includes(matchingTag.name) )}, {})
        .map((artist: any) => {
            const user = pullDB('user', {}, { 'id': artist.id });
            return { ...artist, ...user };
        });
    const service = pullDB('services', { 'tags': (service) => ( service.tags.includes(matchingTag.name) )}, {})
    return { artwork, artist, service };
};
