import { error } from '@sveltejs/kit';
import type { PageLoad, EntryGenerator } from './$types';
import { pullDB } from '$lib/db';

export const ssr = false;

export const entries: EntryGenerator = async () => {
    return [{ slug: 'hungry_anne' }];
};

export const load: PageLoad = ({ params }) => {
    try {
        const user = pullDB('user', {}, { 'username': params.slug });
        const artist = pullDB('artist', {}, { 'id': user.id });

        return {
            ...user,
            ...artist
        };
    } catch (_error) {
        throw error(404, 'Artist profile not found');
    }
};
