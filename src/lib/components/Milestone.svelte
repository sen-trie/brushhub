<script lang="ts">
    import type { ComponentProps } from 'svelte';
    let { selectedService }: ComponentProps<any> = $props();
</script>

<div class="flex w-full items-center">
    <div class="relative flex w-full items-center">
        <div class="flex flex-col items-center">
            <div class="flex h-6 w-6 items-center justify-center rounded-full bg-orange-500">
                <div class="h-3 w-3 rounded-full bg-white"></div>
            </div>

            <p class="mt-2 text-sm font-medium text-orange-500">Start</p>
            <p class="text-xs text-gray-500">Start of Project</p>

            <p class="text-xs font-bold text-green-600">
                <span class="invisible">-</span>
            </p>
        </div>

        <div class="mx-2 h-1 flex-1 bg-orange-500"></div>

        {#each selectedService.milestones as milestone, index}
            <div class="flex flex-col items-center">
                <div class="flex h-6 w-6 items-center justify-center rounded-full bg-orange-500">
                    <div class="h-3 w-3 rounded-full bg-white"></div>
                </div>

                <p class="mt-2 text-sm font-medium text-orange-500">
                    {milestone.name}
                </p>
                <p class="text-xs text-gray-500">
                    {#if milestone.duration}
                        {milestone.duration.value} {milestone.duration.unit}
                    {:else}
                        <span class="invisible">Days</span>
                    {/if}
                </p>

                <p class="text-xs font-bold text-green-600">
                    {#if milestone.payment}
                        Pay {milestone.payment.value}%
                    {:else}
                        <span class="invisible">Pay</span>
                    {/if}
                </p>
            </div>

            <div class="mx-2 h-1 flex-1 bg-orange-500"></div>
        {/each}

        <div class="flex flex-col items-center">
            <div class="flex h-6 w-6 items-center justify-center rounded-full bg-orange-500">
                <div class="h-3 w-3 rounded-full bg-white"></div>
            </div>

            <p class="mt-2 text-sm font-medium text-orange-500">End</p>
            <p class="text-xs text-gray-500">End of Project</p>

            {#if selectedService.milestones.filter((milestone: any) => milestone.payment.value >= 100).length > 0}
                <p class="text-xs font-bold text-green-600">
                    <span class="invisible">-</span>
                </p>
            {:else}
                <p class="text-xs font-bold text-green-600">Pay 100%</p>
            {/if}
        </div>
    </div>
</div>
