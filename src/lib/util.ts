import { goto } from '$app/navigation';
import { browser } from '$app/environment';
import users from '$lib/db/user.json';

export function navigateTo(path: string) {
    goto(path);
}

export function stopPropagation(event: MouseEvent) {
    if (event.currentTarget === event.target) {
        event.stopPropagation();
    }
}

const defaultUser = {
    id: 0,
    username: '',
    following: []
};

export function getUser() {
    const defaultValue = 1;
    const storedId = browser
        ? (window.localStorage.getItem('username') ?? defaultValue)
        : defaultValue;
    const user = users.find((u) => u.id === storedId);
    return {
        ...defaultUser,
        ...user,
        isNotEmpty(): boolean {
            return this.id !== 0;
        }
    };
}

export function includesArray<T>(arr: T[], values: T[]): boolean {
    const set = new Set(arr); // O(arr + values) time complexity
    return values.every((v: T) => set.has(v));
}

export function filterArray<T>(arr: T[], filterFn: (item: T) => boolean): () => T[] {
    return () => {
        return arr.filter(filterFn);
    };
}

export function calculateTimePassed(joinedDate: Date): string {
    const now = new Date();
    const timeDiff = now.getTime() - joinedDate.getTime();

    const years = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor(
        (timeDiff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
    );
    const weeks = Math.floor((timeDiff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24 * 7));
    const days = Math.floor((timeDiff % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));

    if (years > 0) {
        return `${years} year${years > 1 ? 's' : ''}`;
    } else if (months > 0) {
        return `${months} month${months > 1 ? 's' : ''}`;
    } else if (weeks > 0) {
        return `${weeks} week${weeks > 1 ? 's' : ''}`;
    } else {
        return `${days} day${days > 1 ? 's' : ''}`;
    }
}

export function formatResponseTime(responseTime: string): string {
    const [hours] = responseTime.split(':').map(Number);
    const days = Math.floor(hours / 24);

    return days > 0 ? `${days} days` : `${hours} hours`;
}
