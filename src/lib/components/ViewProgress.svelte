<script lang="ts">
    import type { ComponentProps } from 'svelte';
    import Milestone from './Milestone.svelte';
    let { props }: ComponentProps<any> = $props();

    const request = props.request;
</script>

<Milestone selectedService={request.service} currentService={request.state} />
