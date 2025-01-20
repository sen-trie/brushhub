<script lang="ts">
    import Searchbar from './Searchbar.svelte';
    import type { ComponentProps } from 'svelte';
    import { onMount } from 'svelte';
    import { navigateTo, handleClickOutside } from '$lib/util';
    import { getSingle } from '$lib/db';
    import { page } from '$app/stores';
    import { invalidate } from '$app/navigation';

    const { toggleSidebar }: ComponentProps<any> = $props();

    let showDropdown = $state(false);
    let user = $state({
        displayName: '',
        username: '',
        avatar: ''
    });

    $effect(() => {
        user = $page.data.user;
    });

    const menuItemsLogged = [
        {
            name: 'View Profile',
            path: '#',
            iconClass: 'fas fa-user',
            action: () => navigateHeader(`/profile/${user.username}`)
        },
        {
            name: 'Manage Profile',
            iconClass: 'fas fa-edit',
            action: () => navigateHeader('/account/edit')
        },
        {
            name: 'Sign Out',
            iconClass: 'fas fa-sign-out-alt',
            action: () => signOut()
        },
        {
            name: 'Settings',
            iconClass: 'fas fa-cog',
            action: () => navigateHeader('/settings')
        },
        {
            name: 'About',
            iconClass: 'fas fa-question-circle',
            action: () => navigateHeader('/about')
        }
    ];

    function toggleDropdown() {
        if (user.displayName) {
            showDropdown = !showDropdown;
        } else {
            navigateTo('/account/login', $page.url.pathname);
        }
    }

    function navigateHeader(path: string) {
        showDropdown = false;
        navigateTo(path, $page.url.pathname);
    }

    function signOut() {
        showDropdown = false;
        window.localStorage.setItem('user_id', '0');
        invalidate('user:profile').then(() => {
            navigateTo('/', $page.url.pathname);
        });
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

<header class="screen-padding-x flex py-2 justify-center text-black border-b-2 
                border-stone-200 dark:border-stone-600">
    <nav class="container flex flex-col">
        <div class="flex w-full justify-between space-x-0 sm:space-x-10">
            <div class="flex w-16 items-center gap-4 sm:w-auto">
                <button
                    class="justify-start  hover:text-orange-500"
                    onclick={() => toggleSidebar()}
                >
                    <p>☰</p>
                </button>
                <div class="hidden sm:flex">
                    {@render logo()}
                </div>
            </div>

            <div class="relative hidden w-full sm:flex">
                <Searchbar />
            </div>
            <div class="flex sm:hidden">
                {@render logo()}
            </div>

            <div class="relative flex w-24 justify-center">
                <button
                    class="dropdown-button hover:text-orange-500"
                    onclick={toggleDropdown}
                >
                    {#if user.displayName}
                        <img
                            src={getSingle('dp', user.avatar)}
                            alt="Avatar"
                            class="h-10 w-10 rounded-full"
                        />
                    {:else}
                        <p>Sign In</p>
                    {/if}
                </button>
                {#if showDropdown && user.displayName}
                    {@render userDropdown(user)}
                {/if}
            </div>
        </div>
        <div class="relative mt-4 flex sm:hidden">
            <Searchbar />
        </div>
    </nav>
</header>

{#snippet logo()}
    <button
        class="text-xl font-semibold hover:text-orange-500"
        onclick={() => navigateTo('/', $page.url.pathname)}
    >
        BrushHub
    </button>
{/snippet}

{#snippet userDropdown(user: any)}
    <div
        class="dropdown-menu absolute right-0 top-full z-20 mt-1 w-56 rounded text-sm shadow-lg
               border-2 border-gray-400
        "
    >
        <div class="border-b border-gray-600 p-4">
            <div class="flex items-center">
                <img
                    src={getSingle('dp', user.avatar)}
                    alt="Avatar"
                    class="mr-3 h-10 w-10 rounded-full"
                />
                <div>
                    <p class="font-semibold">{user.displayName}</p>
                    <p class="text-gray-400">@{user.username}</p>
                </div>
            </div>
        </div>
        <ul class="py-2">
            {#each menuItemsLogged as { name, iconClass, action }}
                <li>
                    <button
                        class="flex w-full items-center px-4 py-2 hover-gray"
                        onclick={action}
                    >
                        <i class="{iconClass} mr-2"></i>
                        {name}
                    </button>
                </li>
            {/each}
        </ul>
    </div>
{/snippet}
