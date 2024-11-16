<script lang="ts">
    import type { ComponentProps } from 'svelte';
    import { filterArray } from '$lib/util';
    import Browse from '$lib/Browse.svelte';
    import artworkDB from '$lib/db/artwork.json';

    let { props }: ComponentProps<any> = $props();
    const artist = props[0];

    let updateDB = $derived.by(filterArray(artworkDB, (art) => art.artist === artist.id));
</script>

<div>
    <Browse {updateDB} />
</div>
