<script lang="ts">
    import type { ComponentProps } from 'svelte';
    import Milestone from './Milestone.svelte';
    let { props }: ComponentProps<any> = $props();

    const request = props.request;
</script>

<h2 class="text-lg font-semibold">Milestones</h2>
<p class="mb-6 text-sm text-gray-500">
    * Your money will be held and paid to the artist as per the completion of milestones.
</p>

<div class="overflow-x-auto">
    <Milestone selectedService={request.service} currentService={request.state} />
</div>
