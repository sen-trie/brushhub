<script lang="ts">
    import {
        Icon, Cog, Home, BuildingStorefront, User, ArrowLeftStartOnRectangle,
        ArrowLeftEndOnRectangle, InboxStack, PaintBrush
    } from 'svelte-hero-icons';
    import { fly, fade } from 'svelte/transition';
    import { navigateTo, stopPropagation } from '$lib/util';
    import type { ComponentProps } from 'svelte';
    import { invalidate } from '$app/navigation';
    import { page } from '$app/stores';

    const user = $page.data.user;
    const { toggleSidebar }: ComponentProps<any> = $props();

    const menuItemsLogged = [
        {
            name: 'Home',
            path: '/',
            src: Home
        },
        {
            name: 'Profile',
            path: `./profile/${user.username}`,
            src: User
        },
        {
            name: 'Services',
            path: `./manage-services/${user.username}`,
            src: BuildingStorefront
        },
        {
            name: 'Commissions',
            path: `./manage-commissions/${user.username}`,
            src: PaintBrush
        },
        {
            name: 'Orders',
            path: `./manage-orders/${user.username}`,
            src: InboxStack
        },
        {
            name: 'Log Out',
            path: './logout',
            src: ArrowLeftStartOnRectangle
        },
        {
            name: 'Settings',
            path: './settings',
            src: Cog
        }
    ];

    const menuItemsNotLogged = [
        { name: 'Home', path: './', src: Home },
        { name: 'Sign In', path: './account/login/', src: ArrowLeftEndOnRectangle },
        { name: 'Settings', path: './settings', src: Cog }
    ];

    function handleKeyPress(event: KeyboardEvent, path: string) {
        if (event.key === 'Enter' || event.key === ' ') {
            navigateTo(path, $page.url.pathname);
        }
    }

    function handleScrimKeyPress(event: KeyboardEvent) {
        if (event.key === 'Enter' || event.key === ' ') {
            toggleSidebar();
        }
    }
</script>

<div
    class="scrim"
    role="button"
    tabindex="0"
    onkeypress={handleScrimKeyPress}
    onclick={toggleSidebar}
    transition:fade={{ duration: 150 }}
>
    <!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_noninteractive_element_interactions -->
    <aside
        class="flex w-64 flex-col items-center border-r px-4 py-6 border-stone-100 dark:border-stone-700"
        onclick={(e) => stopPropagation(e)}
        transition:fly={{ x: -300, duration: 300 }}
    >
        <button onclick={() => toggleSidebar} class="flex w-full items-center justify-center hover:text-orange-500"
            >☰
        </button>
        <ul class="mt-6 w-full space-y-4">
            {#each user.displayName ? menuItemsLogged : menuItemsNotLogged as item}
                <li class="text-gray-600">
                    <button
                        type="button"
                        onclick={() => {
                            if (item.name === 'Log Out') {
                                window.localStorage.setItem('user_id', '0');
                                invalidate('user:profile').then(() => {
                                    navigateTo('/', $page.url.pathname);
                                });
                            } else {
                                navigateTo(item.path, $page.url.pathname);
                            }
                        }}
                        onkeypress={(e) => handleKeyPress(e, item.path)}
                        class="group flex w-full items-center justify-between space-x-6 rounded-lg p-2
                               transition hover-gray  hover:text-orange-500"
                    >
                        <Icon src={item.src} size="32" class="transition group-hover:text-orange-500" />
                        <span class="mb-1 flex-grow text-left text-lg font-medium">{item.name}</span
                        >
                    </button>
                </li>
            {/each}
        </ul>
    </aside>
</div>

<style lang="css">
    aside {
        position: absolute;
        top: 0;
        bottom: 0;
    }

    .scrim {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.5);
        cursor: auto;
        z-index: 500;
    }

    .icon-transition {
        transition: fill 0.3s ease;
    }

    button:hover .icon-transition {
        fill: orange;
    }
</style>
