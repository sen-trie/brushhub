<script lang="ts">
    import type { ComponentProps } from 'svelte';
    import Browse from '$lib/Browse.svelte';

    let { props }: ComponentProps<any> = $props();
    let artistDB = $state(props[0].artist);
    $effect(() => {
        artistDB = props[0].artist;
    });

    $inspect(artistDB)
</script>
