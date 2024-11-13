import { goto } from '$app/navigation';

export function navigateTo(path: string) {
    goto(path);
}
