<script lang="ts">
    import type { ComponentProps } from 'svelte';
    import { calculateCurrency, dueDeadline } from '$lib/util';
    let { props }: ComponentProps<any> = $props();

    const request = props.request;

    const selectedService = request.service;
    const commissionChoice = request;
</script>

<div>
    <div class="grid grid-cols-2 gap-6">
        <!-- Left Section -->
        <div>
            <div class="mb-4 flex justify-between">
                <span class="font-medium text-gray-700">Type:</span>
                <span class="font-medium text-gray-900">{request.type}</span>
            </div>
            <div class="mb-4 flex justify-between">
                <span class="font-medium text-gray-700">Extras:</span>
                <div class="text-right">
                    {#each request.extras as extra}
                        <span class="font-medium text-gray-900">{extra}</span>
                    {:else}
                        <p class="text-gray-500">No extras selected.</p>
                    {/each}
                </div>
            </div>
            <div class="mb-4">
                <span class="block font-medium text-gray-700">Brief:</span>
                <textarea
                    readonly
                    rows="5"
                    class="mt-1 w-full rounded-md border-gray-300 bg-gray-100 p-2 shadow-sm focus:border-gray-300 focus:ring-0 sm:text-sm"
                    >{commissionChoice.brief}
                </textarea>
            </div>
            <div class="mb-4 flex justify-between">
                <span class="font-medium text-gray-700">Deadline:</span>
                <span class="font-medium text-gray-900">
                    {commissionChoice.deadline}
                    [{dueDeadline(commissionChoice.deadline)}]
                </span>
            </div>
            <div class="mb-4 flex justify-between">
                <!-- TODO ADD IN SERVICES -->
                <span class="font-medium text-gray-700">Add-in Services:</span>
                <!-- <span class="font-medium text-gray-900">
                    {selectedService.addInServices.length > 0
                        ? selectedService.addInServices.join(', ')
                        : 'None'}
                </span> -->
            </div>
        </div>

        <!-- Right Section -->
        <div>
            <span class="mb-2 block font-medium text-gray-700">References:</span>
            <div class="grid grid-cols-3 gap-2">
                {#each commissionChoice.images as ref}
                    <img
                        src={ref}
                        alt="Reference"
                        class="h-32 w-full rounded-md border object-cover"
                    />
                {/each}
            </div>
        </div>
    </div>
    <div class="mb-4 flex justify-end">
        <span class="page-title pr-4">Net Total: {calculateCurrency(commissionChoice.price)}</span>
    </div>
</div>
