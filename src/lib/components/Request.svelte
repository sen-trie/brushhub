<script lang="ts">
    import type { ComponentProps } from 'svelte';
    import { pullDB } from '$lib/db';
    let { request, openRequest }: ComponentProps<any> = $props();

    const currentArtist = pullDB('user', {}, { id: request.artistId });

    let currentStage = $state('');
    let milestone = $state({
        name: '',
        date: ''
    });

    switch (request.state.value) {
        case 'active':
            currentStage = 'Active';
            milestone = request.state.progress.find((prog: any) => prog.date !== null);
            break;
        case 'cancelled':
            currentStage = 'Cancelled';
            break;
        case 'finished':
            currentStage = 'Finished';
            break;
        case 'pending':
            currentStage = 'Pending Acceptance';
            break;
        case 'rejected':
            currentStage = 'Rejected';
            break;
        default:
            currentStage = 'Pending Acceptance';
            break;
    }
</script>

<tr class="border-b text-sm">
    <td class="px-4 py-2">
        <div class="flex flex-col">
            <span class="font-semibold">{request.service.title}</span>
            <span class="text-xs text-gray-500">{currentArtist?.displayName}</span>
        </div>
    </td>
    <td class="px-4 py-2">{request.type}</td>
    <td class="px-4 py-2">
        {new Date(request.deadline).toLocaleDateString('en-US', {
            weekday: 'short',
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        })}
    </td>
    <td class="px-4 py-2">
        <span class="font-semibold">
            {#if currentStage === 'Active'}
                {milestone.name}
            {:else}
                {currentStage}
            {/if}
        </span>
    </td>
    <td class="px-4 py-2">
        <button
            class="apply-button rounded-full bg-orange-500 p-3 px-6 text-white"
            onclick={() => {
                openRequest(request);
            }}>View Details</button
        >
    </td>
</tr>
