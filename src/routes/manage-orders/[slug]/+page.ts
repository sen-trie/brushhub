import { error } from '@sveltejs/kit';
import { getUser } from '$lib/util';
import type { PageLoad, EntryGenerator } from './$types';
import { pullDB } from '$lib/db';

export const ssr = false;

export const entries: EntryGenerator = async () => {
    return [{ slug: 'hungry_anne' }];
};

export const load: PageLoad = async ({ params }) => {
    const searchQuery = params.slug.toLowerCase();
    const currentUser = getUser();

    const user = pullDB('user', {}, { 'username': searchQuery });
    if (!user || currentUser.username !== user.username) {
        // TODO CHANGE TO SOMETHING ELSE
        throw error(404, 'You are not the current user');
    }

    let request = pullDB('request', { 'customerId': user.id }, {});
    request = request.map((req: any) => {
        // O(N^2) COMPLEXITY - BEWARE
        return {
            ...req,
            service: pullDB('services', {}, { 'id': req.serviceId })
        };
    });

    return { request };
};
