<script lang="ts">
    import type { ComponentProps } from 'svelte';
    import MilestoneTab from '$lib/components/MilestoneTab.svelte';

    let { props }: ComponentProps<any> = $props();

    const selectedService = props.selectedService;

    let downpayment = $state(selectedService.downpayment);
    let milestones = $state([...selectedService.milestones]);
    let showFinalPrice = $derived.by(() => {
        return (
            milestones.filter((tab) => tab.payment.enabled && tab.payment.value >= 100).length > 0
        );
    });

    const addTab = (tabs: any[]) => {
        return [
            ...tabs,
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

    function removeTab(index: number, tabs: any[]) {
        return tabs.filter((_: any, i: number) => i !== index);
    }
</script>

<div class="p-6">
    <h2 class="text-lg font-semibold">Milestones *</h2>
    <h3 class="mb-4">
        At least 1 milestone is needed. If there is no other milestone, payment will only be fully
        paid once the final work is approved by the customer. Note that these should only serve as a
        guide for your customers and can be negotiated during the project.
    </h3>
    <div class="space-y-2">
        <MilestoneTab tab={downpayment} downpayment={true} />
        {#each milestones as tab, index}
            <MilestoneTab {tab} removeSelf={() => (milestones = removeTab(index, milestones))} />
        {/each}

        <div class="mb-4 flex items-center justify-between rounded-lg border p-4 shadow">
            <div class="relative grow">
                <div class="flex flex-col gap-2">
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
    <button
        class="mt-4 text-orange-500"
        onclick={() => {
            milestones = addTab(milestones);
        }}
    >
        + Add new milestone
    </button>
</div>
