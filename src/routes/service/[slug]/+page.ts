import { error } from '@sveltejs/kit';
import type { PageLoad, EntryGenerator } from './$types';
import { pullDB } from '$lib/db';

export const entries: EntryGenerator = async () => {
    return [{ slug: '1' }, { slug: '2' }];
};

export const load: PageLoad = ({ params }) => {
    const searchQuery = params.slug.toLowerCase();

    const service = pullDB('services', {}, { 'id': Number(searchQuery) });
    if (!service) {
        throw error(404, 'No matching tag found for your search');
    }

    return { service };
};
