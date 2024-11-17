<script lang="ts">
    import type { ComponentProps } from 'svelte';
    import Browse from '$lib/Browse.svelte';

    let { props }: ComponentProps<any> = $props();
    const service = props[0].service;
    
    let serviceDB = $state(service);
    $effect(() => {
        serviceDB = service;
    });

    $inspect(serviceDB)
</script>
