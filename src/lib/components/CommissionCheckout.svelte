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

<div class="pt-6">
    <div class="overflow-x-auto pb-4 sm:pb-0">
        <Milestone {selectedService} />
    </div>

    <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 sm:gap-6">
        <!-- Left Section -->
        <div>
            <div class="mb-4 flex justify-between">
                <p class="font-medium">Type:</p>
                <p class="font-medium"
                    >{selectedService.types[commissionChoice.selectedTier].name}</p
                >
            </div>
            <div class="mb-4 flex justify-between">
                <p class="font-medium">Base Price:</p>
                <p class="font-medium">{calculateCurrency(basePrice)}</p>
            </div>
            <div class="mb-4 flex justify-between">
                <p class="font-medium">Extras:</p>
                <div class="text-right">
                    {#each selectedService.extras as extra, index}
                        {#if commissionChoice.extras[index]}
                            <div>
                                <p>{extra.name}: </p>
                                <p class="font-medium">
                                    +{extra.type === 'percentage'
                                        ? extra.price +
                                          '% (' +
                                          calculateCurrency(
                                              Math.round((basePrice * extra.price) / 100)
                                          ) +
                                          ')'
                                        : calculateCurrency(extra.price)}
                                </p>
                            </div>
                        {/if}
                    {/each}

                    {#if !noExtra}
                        <p class="">No extras selected.</p>
                    {/if}
                </div>
            </div>
            <div class="mb-4">
                <p class="block font-medium">Brief:</p>
                <textarea
                    readonly
                    rows="5"
                    class="mt-1 w-full rounded-md colour-border entry
                    p-2 shadow-sm focus:colour-border focus:ring-0 sm:text-sm"
                    >{commissionChoice.brief}
                </textarea>
            </div>
            <div class="mb-4 flex justify-between">
                <p class="font-medium">Deadline:</p>
                <p class="font-medium">
                    {commissionChoice.deadline}
                    [{dueDeadline(commissionChoice.deadline)}]
                </p>
            </div>
        </div>

        <!-- Right Section -->
        <div>
            <p class="mb-2 block font-medium">References:</p>
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
                <label for="payment-method" class="mb-2 block font-medium"
                    >Payment Method</label
                >
                <select
                    id="payment-method"
                    class="mt-1 block w-full rounded-md entry 
                            shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                >
                    <option>BrushHub Wallet</option>
                    <option>Stripe</option>
                    <option>PayPal</option>
                    <option>Credit Card</option>
                </select>
            </div>
        </div>
    </div>

    <div class="flex flex-col sm:flex-row items-center justify-between">
        <p class="text-sm mt-2 sm:mt-0">
            * Your payment will be held until the completion of commission milestones and refunded
            in case of cancellation.
        </p>
        <div class="text-right">
            <p class="text-lg font-bold text-green-600 hidden sm:visible">Net Total: {calculateCurrency(finalPrice)}</p>
        </div>
    </div>
    <p class="mt-2 text-right text-lg font-bold text-green-600 visible sm:hidden">Net Total: {calculateCurrency(finalPrice)}</p>
</div>
