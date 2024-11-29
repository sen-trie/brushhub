<script lang="ts">
    import { navigateTo, handleClickOutside } from '$lib/util';
    import type { ComponentProps } from 'svelte';
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import Searchbar from './Searchbar.svelte';

    let { toggleSidebar }: ComponentProps<any> = $props();
    const user = $page.data.user;

    let showDropdown = $state(false);

    const menuItemsLogged = [
        { name: 'View Profile', path: `/profile/${user.username}`, iconClass: 'fas fa-user' },
        {
            name: 'Manage Profile',
            path: `/account/${user.username}/edit`,
            iconClass: 'fas fa-edit'
        },
        { name: 'Sign Out', path: '#', iconClass: 'fas fa-sign-out-alt', action: () => signOut() },
        {
            name: 'Toggle Dark Mode',
            path: '#',
            iconClass: 'fas fa-moon',
            action: () => toggleDarkMode()
        },
        { name: 'Settings', path: '/settings', iconClass: 'fas fa-cog' },
        { name: 'Help', path: '/help', iconClass: 'fas fa-question-circle' }
    ];

    function toggleDropdown() {
        showDropdown = !showDropdown;
    }

    function signOut() {
        // TODO
        console.log('Signing out...');
    }

    function toggleDarkMode() {
        // TODO
        console.log('Toggling dark mode...');
    }

    // DID NOT INCLUDE UNMOUNT
    // SINCE HEADER IS MOUNTED EVERYWHERE
    // HOPEFULLY THIS DOESN'T BREAK
    onMount(() => {
        handleClickOutside('.dropdown-button', '.dropdown-menu', () => {
            showDropdown = false;
        });
    });
</script>

<header class="bg-gray-800 py-3 text-white">
    <nav class="container mx-auto flex items-center justify-between px-4">
        <div class="flex items-center gap-4">
            <button class="text-white hover:text-orange-500" onclick={() => toggleSidebar()}>
                ☰
            </button>
            <button
                class="text-xl font-semibold text-white hover:text-orange-500"
                onclick={() => navigateTo('/', $page.url.pathname)}
            >
                BrushHub
            </button>
        </div>
        <Searchbar />
        <div class="relative">
            <button
                class="dropdown-button flex items-center text-white hover:text-orange-500"
                onclick={toggleDropdown}
            >
                <p>{user.displayName || 'Sign In'}</p>
            </button>
            {#if showDropdown}
                <div
                    class="dropdown-menu absolute right-0 z-20 mt-2 w-56 rounded bg-gray-700 text-sm shadow-lg"
                >
                    <div class="border-b border-gray-600 p-4">
                        <div class="flex items-center">
                            <!-- <img TODO
                                src={user.avatar || '/default-avatar.png'}
                                alt="Avatar"
                                class="mr-3 h-10 w-10 rounded-full"
                            /> -->
                            <div>
                                <p class="font-semibold">{user.displayName}</p>
                                <p class="text-gray-400">@{user.username}</p>
                            </div>
                        </div>
                    </div>
                    <ul>
                        {#each menuItemsLogged as { name, path, iconClass, action }}
                            <li>
                                {#if action}
                                    <button
                                        class="flex w-full items-center px-4 py-2 text-white hover:bg-gray-600"
                                        onclick={action}
                                    >
                                        <i class="{iconClass} mr-2"></i>
                                        {name}
                                    </button>
                                {:else}
                                    <button
                                        class="flex w-full items-center px-4 py-2 text-white hover:bg-gray-600"
                                        onclick={() => navigateTo(path, $page.url.pathname)}
                                    >
                                        <i class="{iconClass} mr-2"></i>
                                        {name}
                                    </button>
                                {/if}
                            </li>
                        {/each}
                    </ul>
                </div>
            {/if}
        </div>
    </nav>
</header>
