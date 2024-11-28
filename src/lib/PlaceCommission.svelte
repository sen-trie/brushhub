<script lang="ts">
    import type { ComponentProps } from 'svelte';
    import CommissionOverview from '$lib/components/CommissionOverview.svelte';
    import CommissionBrief from '$lib/components/CommissionBrief.svelte';
    import CommissionCheckout from '$lib/components/CommissionCheckout.svelte';
    import CommissionButtons from '$lib/components/CommissionButtons.svelte';
    let { selectedService, closePlaceCommission }: ComponentProps<any> = $props();

    let progress = $state(0);
    const steps = [
        ['Service Details', 'Agree and Continue'],
        ['Milestones and Terms of Service', 'Proceed to Check Out'],
        ['Commission Request', 'Pay Now']
    ];

    function proceedToNextStep() {
        if (progress < steps.length - 1) {
            progress += 1;
        }
    }

    function goToPreviousStep() {
        if (progress > 0) {
            progress -= 1;
        } else {
            closePlaceCommission();
        }
    }
</script>

<div class="fixed inset-0 z-50 overflow-y-auto bg-white">
    <div class="relative p-6">
        <button
            class="mb-4 flex items-center space-x-2 text-sm font-bold text-orange-500"
            onclick={closePlaceCommission}
            aria-label="Back"
        >
            <i class="fas fa-arrow-left"></i>
            <span>Back</span>
        </button>

        <div class="space-y-2">
            <h1 class="text-3xl font-bold">{selectedService.title}</h1>
            <p class="text-sm text-gray-500">Anne the Hungry</p>
        </div>

        {#if progress === 0}
            <CommissionOverview {selectedService} />
            <CommissionButtons
                {goToPreviousStep}
                {proceedToNextStep}
                backwards={steps[progress][0]}
                forwards={steps[progress][1]}
            />
        {:else if progress === 1}
            <CommissionBrief />
            <CommissionButtons
                {goToPreviousStep}
                {proceedToNextStep}
                backwards={steps[progress][0]}
                forwards={steps[progress][1]}
            />
        {:else if progress === 2}
            <CommissionCheckout {selectedService} />
            <CommissionButtons
                {goToPreviousStep}
                {proceedToNextStep}
                backwards={steps[progress][0]}
                forwards={steps[progress][1]}
            />
        {/if}
    </div>
</div>
