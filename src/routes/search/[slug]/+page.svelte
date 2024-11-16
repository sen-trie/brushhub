<script lang="ts">
    import Tabs from '$lib/Tabs.svelte';
    import Browse from '$lib/Browse.svelte';
    import { page } from '$app/stores';
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();

    console.log(data.artwork)

    let artDB = $state(data.artwork);

    $effect(() => {
        artDB = data.artwork;
    })
</script>

<div class="mx-auto w-full p-4">
    <Browse {artDB} />
</div>

<style>
</style>
