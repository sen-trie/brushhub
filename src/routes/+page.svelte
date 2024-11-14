<script lang="ts">
    import { getUsername } from '$lib/util';
    import artworkDB from '$lib/db/artwork.json';
    import Browse from './Browse.svelte';

    const username = getUsername();
</script>

<div class="container mx-auto px-4">
    <div class="mb-4 flex items-center">
        <h2 class="mr-4 text-2xl font-bold text-orange-500">Explore</h2>
        {#if username}
            <h3 class="text-2xl font-bold text-gray-400">Following</h3>
        {/if}
        <div class="ml-auto">
            <button class="flex items-center text-orange-500">
                <i class="fas fa-filter mr-2"></i>Filter...
            </button>
        </div>
    </div>
    <Browse {artworkDB} />
</div>

<style>
    .container {
        max-width: 1200px;
    }
</style>
