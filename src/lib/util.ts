import { browser } from '$app/environment';
import { goto } from '$app/navigation';
import { base } from '$app/paths';
import users from '$lib/db/user.json';
import type { Service, CommissionChoice } from '$lib/types';

export function handleClickOutside(
    buttonClass: string,
    menuClass: string,
    callback: () => void
): () => void {
    const handleDocumentClick = (event: MouseEvent) => {
        const buttonElement = document.querySelector(buttonClass);
        const menuElement = document.querySelector(menuClass);

        if (buttonElement && buttonElement.contains(event.target as Node)) {
            return;
        }

        if (menuElement && !menuElement.contains(event.target as Node)) {
            callback();
        }
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
        document.removeEventListener('click', handleDocumentClick);
    };
}

export function calculateCommission(selectedService: Service, commissionChoice: CommissionChoice): number {
    const basePrice = selectedService.types[commissionChoice.selectedTier].price;
    const extrasPrice = selectedService.extras.reduce(
        (acc: number, extra: any, index: number) => {
            if (!commissionChoice.extras[index]) return acc;
            if (extra.type === 'percentage') {
                return acc + (basePrice * extra.price) / 100;
            } else {
                return acc + extra.price;
            }
        },
        0
    );
    return basePrice + extrasPrice;
}

/**
 * @param {string} path - The target path, always start with '/'.
 * @param {string} pageUrl - Pass `$page.url.pathname`.
 */
export function navigateTo(path: string, pageUrl: string): void {
    const segments = pageUrl?.split('/').filter(Boolean) ?? 0;
    const prefix = '/..'.repeat(segments.length);

    if (segments.length > 0) {
        path = path.replace('./', '/');
    }

    goto(`${base}${path}`);
}

export function stopPropagation(event: MouseEvent): void {
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
    const defaultValue = 0;
    const storedId = browser
        ? (window.localStorage.getItem('user_id') ?? defaultValue)
        : defaultValue;

    const user = users.find((u) => String(u.id) === storedId);

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
