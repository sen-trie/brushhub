<script lang="ts">
    import { navigateTo } from '$lib/util';
    import type { ComponentProps } from 'svelte';
    import { page } from '$app/stores';

    let { toggleSidebar }: ComponentProps<any> = $props();
    const user = $page.data.user;
</script>

<header>
    <nav>
        <ul>
            <li><button onclick={() => toggleSidebar()}>Sidebar</button></li>
            <li><button onclick={() => navigateTo('/')}>BrushHub</button></li>
            <li>
                <button onclick={() => navigateTo('/account')}>
                    {#if !!user}
                        <p>{user.displayName}</p>
                    {:else}
                        <p>Sign In</p>
                    {/if}
                </button>
            </li>
        </ul>
    </nav>
</header>

<style>
    header {
        background-color: #333;
        color: #fff;
        padding: 1rem;
        text-align: center;
    }
    nav ul {
        display: flex;
        gap: 1rem;
        list-style: none;
    }
</style>
