<script lang="ts">
    import type { ComponentProps } from 'svelte';
    import { getSingle } from '$lib/db';
    import Milestone from './Milestone.svelte';
    let { props }: ComponentProps<any> = $props();

    const request = props.request;
</script>

<h2 class="text-lg font-semibold">Milestones</h2>
<p class="mb-6 text-sm sub-heading">
    * Money will be held and paid to the artist as per the completion of milestones.
</p>

<div class="overflow-x-auto mb-8">
    <Milestone selectedService={request.service} currentService={request.state} />
</div>

<h2 class="text-lg font-semibold mb-1">Progress</h2>
<div>
    {#each request.state.progress as milestone}
        {#if milestone.date !== null}
        <p>
            <span class="font-bold">{milestone.date}:</span>
            <span>Completed "{milestone.name}"</span>
        </p>
        <img
            src={getSingle('reference', milestone.sample)}
            alt="Reference"
            class="h-48 w-48 object-cover colour-border border-2 mb-4 mt-1"
        />
        {/if}
    {/each}
    <p>
        <span class="font-bold">{request.start}:</span>
        <span>Accepted Commission</span>
    </p>
</div>