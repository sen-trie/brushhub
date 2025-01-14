import type { LayoutLoad } from './$types';
import { getUser } from '$lib/util';

export const prerender = true;
export const trailingSlash = 'always';

export const load: LayoutLoad = async ({ depends }) => {
    depends('user:profile');

    let userData = getUser();
    return {
        user: userData
    };
};
