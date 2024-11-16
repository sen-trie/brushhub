<script lang="ts">
    import { navigateTo, stopPropagation } from '$lib/util';
    import type { ComponentProps } from 'svelte';
    import { page } from '$app/stores';

    const { toggleSidebar }: ComponentProps<any> = $props();
    const user = $page.data.user;

    const menuItemsLogged = [
        { name: 'Home', path: '/', iconClass: 'fas fa-home' },
        { name: 'Profile', path: '/profile', iconClass: 'fas fa-th-large' },
        { name: 'Services', path: '/services', iconClass: 'fas fa-tools' },
        { name: 'Commission', path: '/commission', iconClass: 'fas fa-tachometer-alt' },
        { name: 'Orders', path: '/orders', iconClass: 'fas fa-boxes' },
        { name: 'Settings', path: '/settings', iconClass: 'fas fa-cog' },
        { name: 'Log out', path: '/logout', iconClass: 'fas fa-sign-out-alt' }
    ];

    const menuItemsNotLogged = [
        { name: 'Home', path: '/', iconClass: 'fas fa-home' },
        { name: 'Sign In', path: '/account', iconClass: 'fas fa-th-large' }
    ];

    function handleKeyPress(event: KeyboardEvent, path: string) {
        if (event.key === 'Enter' || event.key === ' ') {
            navigateTo(path);
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
>
    <!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_noninteractive_element_interactions -->
    <aside
        class="flex w-48 flex-col items-center border-r border-gray-300 bg-white p-4"
        onclick={(e) => stopPropagation(e)}
    >
        <button onclick={() => toggleSidebar}>Sidebar</button>
        <ul class="w-full space-y-2">
            {#each !!user ? menuItemsLogged : menuItemsNotLogged as item}
                <li>
                    <button
                        type="button"
                        onclick={() => navigateTo(item.path)}
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
