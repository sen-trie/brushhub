<script lang="ts">
    import type { ComponentProps } from 'svelte';
    import Services from '$lib/Services.svelte';

    let { props }: ComponentProps<any> = $props();
    let serviceDB = $state(props[0].service);
    $effect(() => {
        serviceDB = props[0].service;
    });
</script>

<div class="service-grid mt-4 grid grid-cols-4 gap-4">
    <Services {serviceDB} />
</div>

