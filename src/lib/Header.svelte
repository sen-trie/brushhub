<script lang="ts">
    import { navigateTo } from '$lib/util';
    import type { ComponentProps } from 'svelte';
    import { page } from '$app/stores';
    import Searchbar from './Searchbar.svelte';

    let { toggleSidebar }: ComponentProps<any> = $props();
    const user = $page.data.user;
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
        <div>
            <button
                class="text-white hover:text-orange-500"
                onclick={() => navigateTo('/account', $page.url.pathname)}
            >
                {#if user.isNotEmpty()}
                    <p>{user.displayName}</p>
                {:else}
                    <p>Sign In</p>
                {/if}
            </button>
        </div>
    </nav>
</header>
