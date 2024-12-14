<script lang="ts">
    import { fly, fade } from 'svelte/transition';
    import { navigateTo, stopPropagation } from '$lib/util';
    import type { ComponentProps } from 'svelte';
    import { page } from '$app/stores';

    const user = $page.data.user;
    const { toggleSidebar }: ComponentProps<any> = $props();

    const menuItemsLogged = [
        { name: 'Home', path: '/', iconClass: 'fas fa-home' },
        { name: 'Profile', path: `./profile/${user.username}`, iconClass: 'fas fa-th-large' },
        { name: 'Services', path: `./manage-services/${user.username}`, iconClass: 'fas fa-tools' },
        {
            name: 'Commission',
            path: `./manage-commissions/${user.username}`,
            iconClass: 'fas fa-tachometer-alt'
        },
        { name: 'Orders', path: `./manage-orders/${user.username}`, iconClass: 'fas fa-boxes' },
        { name: 'Log Out', path: './logout', iconClass: 'fas fa-sign-out-alt' },
        { name: 'Settings', path: './settings', iconClass: 'fas fa-cog' }
    ];

    const menuItemsNotLogged = [
        { name: 'Home', path: './', iconClass: 'fas fa-home' },
        { name: 'Sign In', path: './account/login/', iconClass: 'fas fa-th-large' },
        { name: 'Settings', path: './settings', iconClass: 'fas fa-cog' }
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
    transition:fade="{{ duration: 150 }}"
>
    <!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_noninteractive_element_interactions -->
    <aside
        class="flex w-48 flex-col items-center border-r border-gray-300 bg-white p-4"
        onclick={(e) => stopPropagation(e)}
        transition:fly="{{ x: -300, duration: 300 }}"
    >
        <button onclick={() => toggleSidebar}>☰</button>
        <ul class="w-full space-y-2">
            {#each user.displayName ? menuItemsLogged : menuItemsNotLogged as item}
                <li>
                    <button
                        type="button"
                        onclick={() => navigateTo(item.path, $page.url.pathname)}
                        onkeypress={(e) => handleKeyPress(e, item.path)}
                        class="flex w-full items-center justify-center gap-3 p-3 text-gray-600 transition hover:bg-gray-100 hover:text-orange-500 focus:bg-gray-100 focus:text-orange-500 focus:outline-none"
                    >
                        <i class={item.iconClass + ' text-xl'} aria-hidden="true"></i>
                        <span class="text-sm font-medium">{item.name}</span>
                    </button>
                </li>
            {/each}
        </ul>
    </aside>
</div>

<style lang="css">
    aside {
        position: absolute;
        padding: 1rem;
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
</style>
