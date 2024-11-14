import { goto } from '$app/navigation';
import { browser } from '$app/environment';

export function navigateTo(path: string) {
    goto(path);
}

export function stopPropagation(event: MouseEvent) {
    if (event.currentTarget === event.target) {
        event.stopPropagation();
    }
}

export function getUsername() {
    const defaultValue = 'TEST';
    return browser ? (window.localStorage.getItem('username') ?? defaultValue) : defaultValue;
}
