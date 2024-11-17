<script lang="ts">
    import type { ComponentProps } from 'svelte';
    import Browse from '$lib/Browse.svelte';

    let { props }: ComponentProps<any> = $props();
    const artwork = props[0].artwork;
    
    let artDB = $state(artwork);
    $effect(() => {
        artDB = artwork;
    });

</script>

<Browse {artDB}/>