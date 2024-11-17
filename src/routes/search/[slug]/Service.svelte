<script lang="ts">
    import type { ComponentProps } from 'svelte';
    import Services from '$lib/Services.svelte';

    let { props }: ComponentProps<any> = $props();
    let serviceDB = $state(props[0].service);
    $effect(() => {
        serviceDB = props[0].service;
    });
</script>

<Services {serviceDB} />
