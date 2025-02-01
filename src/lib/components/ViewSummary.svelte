<script lang="ts">
    import type { ComponentProps } from 'svelte';
    import { calculateCurrency } from '$lib/util';
    import { getSingle } from '$lib/db';
    let { props }: ComponentProps<any> = $props();

    const request = props.request;

    const selectedService = request.service;
    const commissionChoice = request;
</script>

<div class="view-summary">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6">
        <!-- Left Section -->
        <div>
            <div class="mb-4 flex justify-between">
                <span class="font-medium ">Type:</span>
                <span class="font-medium ">{request.type}</span>
            </div>
            <div class="mb-4 flex justify-between">
                <span class="font-medium ">Extras:</span>
                <div class="text-right">
                    {#each request.extras as extra}
                        <span class="font-medium ">{extra}</span>
                    {:else}
                        <p class="">No extras selected.</p>
                    {/each}
                </div>
            </div>
            <div class="mb-4">
                <span class="block font-medium ">Brief:</span>
                <textarea
                    readonly
                    rows="5"
                    class="mt-1 w-full rounded-md entry min-h-32
                           p-2 shadow-sm  sm:text-sm cursor-text"
                    >{commissionChoice.brief}
                </textarea>
            </div>
            <div class="mb-4 flex justify-between">
                <span class="font-medium ">Deadline:</span>
                <span class="font-medium text-">
                    {commissionChoice.deadline}
                    <!-- [{dueDeadline(commissionChoice.deadline)}] -->
                </span>
            </div>
            {#if commissionChoice.commercialUse || commissionChoice.fastDelivery}
                <div class="flex justify-between">
                    <span class="font-medium ">Add-in Services:</span>
                    <div class="flex flex-col text-right">
                        {#if commissionChoice.commercialUse}
                            <span class="font-medium ">
                                +Commercial Use Allowed
                            </span>
                        {/if}
                        {#if commissionChoice.fastDelivery}
                            <span class="font-medium ">
                                +Fast Delivery ({selectedService.fastDelivery.duration} {selectedService.fastDelivery.unit}) 
                            </span>
                        {/if}
                    </div>
                    
                </div>
            {/if}
        </div>

        <!-- Right Section -->
        <div>
            <span class="mb-2 block font-medium ">References:</span>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-2">
                {#each commissionChoice.references as ref}
                    <img
                        src={getSingle('reference', ref)}
                        alt="Reference"
                        class="h-48 w-full object-cover"
                    />
                {/each}
            </div>
        </div>
    </div>
    <div class="mb-4 flex justify-end">
        <span class="page-title pr-4 green-text">Net Total: {calculateCurrency(commissionChoice.price)}</span>
    </div>
</div>
