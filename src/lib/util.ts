import { browser } from '$app/environment';
import { goto } from '$app/navigation';
import { base } from '$app/paths';
import { countries } from 'countries-list';
import { pullDB } from './db';
import type { Service, CommissionChoice } from '$lib/types';

export async function handleImageUpload(
    event: Event,
    uploadedImages: string[],
    maxImages: number = 10
): Promise<[string[], string]> {
    const files = (event.target as HTMLInputElement).files;
    if (!files) return [uploadedImages, ''];

    if (uploadedImages.length + files.length > maxImages) {
        return [uploadedImages, `You can upload a maximum of ${maxImages} images.`];
    }

    const newUploadedImages = [...uploadedImages];
    const promises: Promise<string>[] = [];

    for (const file of files) {
        if (!file.type.startsWith('image/')) {
            return [uploadedImages, 'Only image files (e.g., jpg, png) are allowed.'];
        }

        const promise = new Promise<string>((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.onload = () => resolve(fileReader.result as string);
            fileReader.onerror = () => reject('Error reading file.');
            fileReader.readAsDataURL(file);
        });

        promises.push(promise);
    }

    try {
        const results = await Promise.all(promises);
        return [[...newUploadedImages, ...results], ''];
    } catch {
        return [uploadedImages, 'An error occurred while uploading images.'];
    }
}

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

export function calculateCommission(
    selectedService: Service,
    commissionChoice: CommissionChoice
): number {
    const basePrice = selectedService.types[commissionChoice.selectedTier].price;
    const extrasPrice = selectedService.extras.reduce((acc: number, extra: any, index: number) => {
        if (!commissionChoice.extras[index]) return acc;
        if (extra.type === 'percentage') {
            return acc + (basePrice * extra.price) / 100;
        } else {
            return acc + extra.price;
        }
    }, 0);
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

    const user = pullDB('user', {}, { id: Number(storedId) });
    return {
        ...defaultUser,
        ...user,
        isNotEmpty(): boolean {
            return this.id !== 0;
        }
    };
}

export function getPrefs() {
    const defaultValue = {
        darkMode: 'auto',
        preferredCurrency: 'USD'
    };

    const storedPref = browser
        ? JSON.parse(window.localStorage.getItem('user_pref') ?? JSON.stringify(defaultValue))
        : defaultValue;

    return {
        ...defaultValue,
        ...storedPref
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

export const exchangeRates: Record<string, number> = {
    USD: 1.0,
    EUR: 0.91,
    JPY: 148.5,
    GBP: 0.79,
    AUD: 1.48,
    CAD: 1.36,
    CHF: 0.89,
    CNY: 7.15,
    HKD: 7.83,
    NZD: 1.63,
    SEK: 10.39,
    KRW: 1330,
    SGD: 1.35,
    NOK: 10.68,
    MXN: 17.3,
    INR: 83.1,
    RUB: 92.5,
    ZAR: 18.9,
    BRL: 5.1,
    TRY: 32.5,
    IDR: 15300,
    PLN: 3.95,
    THB: 36.2,
    AED: 3.67,
    SAR: 3.75
};

export function getPreferredCurrency(): string {
    return getPrefs().preferredCurrency;
}

export function calculateCurrency(amount: number): string {
    const prefCurrency = getPreferredCurrency();
    const formattedAmount = Math.round(amount * exchangeRates[prefCurrency]).toLocaleString(
        'en-US'
    );
    return `${prefCurrency} ${formattedAmount}`;
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

export function dueDeadline(deadline: number): string {
    const now = new Date();
    const dueDate = new Date(deadline);
    const timeDiff = dueDate.getTime() - now.getTime();

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    if (days > 0) {
        return `Due in ${days} days`;
    } else if (days === 0) {
        return 'Due today';
    } else {
        return `Overdue by ${-days} days`;
    }
}

const countryNames: string[] = Object.entries(countries)
    .map(([_, name]) => name.name)
    .sort();

export function getCountryList(): string[] {
    return countryNames;
}
