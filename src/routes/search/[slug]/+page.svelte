<script lang="ts">
    import type { PageData } from './$types';
    import Tabs from '$lib/Tabs.svelte';
    import Artwork from './Artwork.svelte';
    import Artists from './Artists.svelte';
    import Service from './Service.svelte';

    let { data }: { data: PageData } = $props();
    let searchQuery = $state(data.searchQuery);

    let items = [
        {
            label: 'Artworks',
            value: 1,
            component: Artwork,
            props: [data]
        },
        {
            label: 'Artists',
            value: 2,
            component: Artists,
            props: [data]
        },
        {
            label: 'Services',
            value: 3,
            component: Service,
            props: [data]
        }
    ];

    $effect(() => {
        if (data.searchQuery !== searchQuery) {
            window.location.reload();
        }
    });
</script>

<svelte:head>
    <title>BrushHub - {searchQuery}</title> 
</svelte:head>


<div class="card-island">
    <h1 class="mb-4 text-2xl font-bold">Search Results: "{searchQuery}"</h1>
    <Tabs {items} />
</div>

<style>
</style>
