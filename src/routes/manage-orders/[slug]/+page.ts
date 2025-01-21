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

    const user = pullDB('user', {}, { username: searchQuery });
    if (!user || currentUser.username !== user.username) {
        throw error(404, 'Not Found');
    }

    let request = pullDB('request', { customerId: user.id }, {});
    request = request.map((req: any) => {

        return {
            ...req,
            service: pullDB('services', {}, { id: req.serviceId })
        };
    });

    return { request };
};
