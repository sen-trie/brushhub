<script lang="ts">
    import type { ComponentProps } from 'svelte';
    let { request }: ComponentProps<any> = $props();

    let currentStage = $state('');
    let milestone = $state('');

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
            <span class="font-semibold">{request.serviceId}</span>
            <span class="text-xs text-gray-500">Anne the Hungry</span>
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
        <span class={`rounded-full px-2 py-1 text-xs font-medium text-white`}>
            {currentStage}
        </span>
    </td>
</tr>
