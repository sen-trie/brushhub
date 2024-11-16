import type { LayoutLoad } from './$types';
import { getUser } from '$lib/util';

export const prerender = true;

export const load: LayoutLoad = async () => {
    return {
        user: getUser()
    };
};
