import { error } from '@sveltejs/kit';
import type { PageLoad, EntryGenerator } from './$types';
import serviceDB from '$lib/db/services.json';

export const entries: EntryGenerator = async () => {
    return [{ slug: '1' }, { slug: '2' }];
};

export const load: PageLoad = ({ params }) => {
    const searchQuery = params.slug.toLowerCase();

    const service = serviceDB.find((tag) => tag.id === Number(searchQuery));
    if (!service) {
        throw error(404, 'No matching tag found for your search');
    }

    return { service };
};
