<script lang="ts">
    import type { PageData } from './$types';
    import Tabs from '$lib/Tabs.svelte';
    import Artwork from './Artwork.svelte';
    import Artists from './Artists.svelte';
    import Service from './Service.svelte';

    let { data }: { data: PageData } = $props();
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
</script>

<Tabs {items} />

<style>
</style>
