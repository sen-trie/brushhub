<script lang="ts">
    import type { ComponentProps } from 'svelte';
    import Browse from '$lib/Browse.svelte';

    let { props }: ComponentProps<any> = $props();
    let serviceDB = $state(props[0].service);
    $effect(() => {
        serviceDB = props[0].service;
    });

    $inspect(serviceDB)
</script>
