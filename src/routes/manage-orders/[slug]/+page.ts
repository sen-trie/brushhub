import { error } from '@sveltejs/kit';
import { getUser } from '$lib/util';
import type { PageLoad, EntryGenerator } from './$types';
import userDB from '$lib/db/user.json';
import requestDB from '$lib/db/request.json';

export const entries: EntryGenerator = async () => {
    return [{ slug: 'hungry_anne' }];
};

export const load: PageLoad = ({ params }) => {
    const searchQuery = params.slug.toLowerCase();
    const currentUser = getUser();

    const user = userDB.find((user) => user.username === searchQuery);
    if (!user || currentUser.username !== user.username) {
        // TODO CHANGE TO SOMETHING ELSE
        throw error(404, 'You are not the current user');
    }

    const request = requestDB.filter((req) => req.customerId === user.id);

    return { request };
};
