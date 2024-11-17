<script lang="ts">
    import type { ComponentProps } from 'svelte';
    import Browse from '$lib/Browse.svelte';

    let { props }: ComponentProps<any> = $props();
    const artist = props[0].artist;
    
    let artistDB = $state(artist);
    $effect(() => {
        artistDB = artist;
    });

    $inspect(artistDB)
</script>
