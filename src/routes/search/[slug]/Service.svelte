<script lang="ts">
    import type { ComponentProps } from 'svelte';
    import Services from '$lib/Services.svelte';
    import { wrapDefault } from '$lib/db';

    let { props }: ComponentProps<any> = $props();
    let serviceDB = $state(props[0].service);
    $effect(() => {
        serviceDB = props[0].service;
    });
</script>

<div class="service-grid grid grid-cols-1 sm:grid-cols-4 gap-4">
    <Services {serviceDB} />
</div>

{#if serviceDB.length === 0}
    <img
        src={wrapDefault('artwork', '')}
        alt="Service Missing"
        class="h-48 w-full rounded-md object-contain"
    />
{/if}
