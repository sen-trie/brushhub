<script lang="ts">
    import type { ComponentProps } from 'svelte';
    import Browse from '$lib/Browse.svelte';

    let { props }: ComponentProps<any> = $props();
    let artDB = $state(props[0].artwork);
    $effect(() => {
        artDB = props[0].artwork;
    });
</script>

<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
    <Browse {artDB} />
</div>
