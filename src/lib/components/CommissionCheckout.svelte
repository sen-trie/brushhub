<script lang="ts">
    import Milestone from './Milestone.svelte';
    import type { ComponentProps } from 'svelte';
    import { calculateCommission, calculateCurrency, dueDeadline } from '$lib/util';

    const { selectedService, commissionChoice }: ComponentProps<any> = $props();

    const basePrice = selectedService.types[commissionChoice.selectedTier].price;
    const finalPrice = calculateCommission(selectedService, commissionChoice);
    const noExtra =
        selectedService.extras.filter((_: any, index: any) => commissionChoice.extras[index])
            .length > 0;
</script>

<div class="p-6">
    <Milestone {selectedService} />

    <!-- Checkout Details -->
    <div class="mt-8 grid grid-cols-2 gap-6">
        <!-- Left Section -->
        <div>
            <div class="mb-4 flex justify-between">
                <span class="font-medium text-gray-700">Type:</span>
                <span class="font-medium text-gray-900"
                    >{selectedService.types[commissionChoice.selectedTier].name}</span
                >
            </div>
            <div class="mb-4 flex justify-between">
                <span class="font-medium text-gray-700">Base Price:</span>
                <span class="font-medium text-gray-900">{calculateCurrency(basePrice)}</span>
            </div>
            <div class="mb-4 flex justify-between">
                <span class="font-medium text-gray-700">Extras:</span>
                <div class="text-right">
                    {#each selectedService.extras as extra, index}
                        {#if commissionChoice.extras[index]}
                            <div>
                                <span>{extra.name}: </span>
                                <span class="font-medium text-gray-900">
                                    +{extra.type === 'percentage'
                                        ? extra.price +
                                          '% (' +
                                          calculateCurrency(
                                              Math.round((basePrice * extra.price) / 100)
                                          ) +
                                          ')'
                                        : calculateCurrency(extra.price)}
                                </span>
                            </div>
                        {/if}
                    {/each}

                    {#if !noExtra}
                        <p class="text-gray-500">No extras selected.</p>
                    {/if}
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

            <div class="mt-6">
                <label for="payment-method" class="mb-2 block font-medium text-gray-700"
                    >Method</label
                >
                <select
                    id="payment-method"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                >
                    <option>DBS PayLah</option>
                    <option>PayNow</option>
                    <option>Credit Card</option>
                </select>
            </div>
        </div>
    </div>

    <!-- Total Price and Actions -->
    <div class="mt-8 flex items-center justify-between">
        <p class="text-sm text-gray-500">
            * Your payment will be held until the completion of commission milestones and refunded
            in case of cancellation.
        </p>
        <div class="text-right">
            <p class="mb-2 text-lg font-bold text-green-600">{calculateCurrency(finalPrice)}</p>
        </div>
    </div>
</div>
