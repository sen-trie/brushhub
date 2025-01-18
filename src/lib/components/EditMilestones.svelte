<script lang="ts">
    import type { ComponentProps } from 'svelte';
    import MilestoneTab from '$lib/components/MilestoneTab.svelte';

    let { props = $bindable() }: ComponentProps<any> = $props();
    let selectedService = props.selectedService;

    let downpayment = $state(selectedService.downpayment);
    let showFinalPrice = $derived.by(() => {
        return (
            selectedService.milestones.filter(
                (tab: any) => tab.payment.enabled && tab.payment.value >= 100
            ).length > 0
        );
    });

    const addTab = () => {
        selectedService.milestones = [
            ...selectedService.milestones,
            {
                name: 'New Milestone',
                duration: {
                    value: 7,
                    unit: 'days',
                    enabled: false
                },
                payment: {
                    value: 50,
                    enabled: false
                }
            }
        ];
    };

    function removeTab(index: number) {
        selectedService.milestones = selectedService.milestones.filter(
            (_: any, i: number) => i !== index
        );
    }
</script>

<div>
    <h2 class="text-lg font-semibold">Milestones *</h2>
    <h3 class="mb-4">
        Payment should be sequential, not additive (i.e 10% -> 60% -> 100%). If there are no other
        milestones, payment will only be fully provided once the final work is submitted.
    </h3>
    <!-- Note that these should only serve as a guide for your customers and can be negotiated during the project. -->
    <div class="space-y-2">
        <MilestoneTab tab={downpayment} downpayment={true} />
        {#each selectedService.milestones as tab, index}
            <MilestoneTab {tab} removeSelf={() => removeTab(index)} />
        {/each}

        <div class="mb-4 flex items-center justify-between rounded-lg border p-4 shadow">
            <div class="relative grow">
                <div class="flex flex-col">
                    <h3 class="text-lg font-bold text-gray-800">Final Work</h3>
                    {#if !showFinalPrice}
                        <p class="text-sm font-medium text-gray-900">Pay 100%</p>
                    {:else}
                        <p class="text-sm font-medium text-gray-900">
                            No Additional Payment Required
                        </p>
                    {/if}
                </div>
            </div>
        </div>
    </div>
    <button class="mt-4 text-orange-500" onclick={addTab}> + Add new milestone </button>
</div>
