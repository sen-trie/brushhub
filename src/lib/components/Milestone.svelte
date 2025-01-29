<script lang="ts">
    import type { ComponentProps } from 'svelte';
    let { selectedService, currentService = {} }: ComponentProps<any> = $props();

    const emptyService = (trueCondition: any, falseCondition: any, index = -1) => {
        if (Object.keys(currentService).length === 0 || currentService.value === 'finished') {
            return trueCondition;
        } else if (index !== -1) {
            if (index === -2 || currentService.progress[index].date !== null) {
                return trueCondition;
            }
        }
        return falseCondition;
    };
</script>

{#snippet circleNode(index = -2)}
    <div
        class="flex h-6 w-6 items-center justify-center rounded-full {emptyService(
            '!bg-orange-500',
            '!bg-gray-500',
            index
        )}"
    >
        {#if Object.keys(currentService).length === 0}
            <!-- ONLY PREVIEWING MILESTONE -->
            <div class="h-3 w-3 rounded-full !bg-white"></div>
        {:else if currentService.value === 'finished'}
            <div></div>
        {:else if index === -1 || (index >= 0 && currentService.progress[index].date === null)}
            <div class="h-3 w-3 rounded-full !bg-white"></div>
        {/if}
    </div>
{/snippet}

{#snippet payNode(index = -1, nodeText = '', durationText = '', payText = '')}
    {#if index !== -2}
        <p
            class="mt-2 text-sm font-medium {emptyService(
                'text-orange-500',
                '',
                index
            )}"
        >
            {nodeText}
        </p>
    {:else}
        <p class="mt-2 text-sm font-medium text-orange-500">{nodeText}</p>
    {/if}

    {#if durationText}
        <p class="text-xs">{durationText}</p>
    {:else}
        <span class="invisible">-</span>
    {/if}

    {#if payText}
        <p class="text-xs font-bold green-text">{payText}</p>
    {:else}
        <span class="invisible">-</span>
    {/if}
{/snippet}

<div class="flex items-center text-center">
    <div class="relative flex items-center">
        <div class="flex flex-col items-center">
            {@render circleNode()}
            {#if selectedService.downpayment.payment.enabled === false}
                {@render payNode(-2, 'Start', 'Start of Project', '')}
            {:else}
                {@render payNode(
                    -2,
                    'Start',
                    'Start of Project',
                    `Pay ${selectedService.downpayment.payment.value}%`
                )}
            {/if}
        </div>

        <div class="mx-2 w-64 h-1 flex-1 !bg-orange-500"></div>

        {#each selectedService.milestones as milestone, index}
            <div class="flex flex-col items-center">
                {@render circleNode(index)}
                {@render payNode(
                    index,
                    milestone.name,
                    milestone.duration
                        ? `${milestone.duration.value} ${milestone.duration.unit}`
                        : '',
                    milestone.payment ? `Pay ${milestone.payment.value}%` : ''
                )}
            </div>
            <div
                class="mx-2 h-1 flex-1 {emptyService('!bg-orange-500', '!bg-gray-500', index)}"
            ></div>
        {/each}

        <div class="flex flex-col items-center">
            {@render circleNode(-1)}
            {#if selectedService.milestones.filter((milestone: any) => milestone.payment.value >= 100).length > 0}
                {@render payNode(-1, 'End', 'End of Project', '')}
            {:else}
                {@render payNode(-1, 'End', 'End of Project', 'Pay 100%')}
            {/if}
        </div>
    </div>
</div>
