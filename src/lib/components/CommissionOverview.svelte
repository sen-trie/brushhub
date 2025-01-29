<script lang="ts">
    import Milestone from './Milestone.svelte';
    import { pullDB } from '$lib/db';
    import type { ComponentProps } from 'svelte';

    const { selectedService }: ComponentProps<any> = $props();

    const tos = pullDB('tos', {}, { artistId: selectedService.artistId })?.categories.filter(
        (tos: any) => selectedService.termsOfService[tos.title] === true
    );
</script>

<h2 class="mt-2 sm:mt-6 text-lg font-semibold">Milestones</h2>
<p class="mb-6 text-sm">
    * Your money will be held and paid to the artist as per the completion of milestones.
</p>

<div class="overflow-x-auto pb-4 sm:pb-0">
    <Milestone {selectedService} />
</div>

<h2 class="mt-6 text-lg font-semibold">Terms of Service</h2>
<div class="mt-4 space-y-2">
    {#each tos as term}
        <details class="rounded-md border p-4 cursor-pointer">
            <summary class="text-sm font-semibold">{term.title}</summary>
            <p class="mt-2 text-sm">{term.details}</p>
        </details>
    {/each}
</div>

<p class="mt-6 text-sm">
    * By proceeding to the commission, you agree with the proposed milestones and terms of service.
</p>
