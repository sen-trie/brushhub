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

export function includesArray<T>(arr: T[], values: T[]): boolean {
    const set = new Set(arr); // O(arr + values) time complexity
    return values.every((v: T) => set.has(v));
}