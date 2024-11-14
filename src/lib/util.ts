import { goto } from '$app/navigation';

export function navigateTo(path: string) {
	goto(path);
}

export function stopPropagation(event: MouseEvent) {
	if (event.currentTarget === event.target) {
		event.stopPropagation();
	}
}