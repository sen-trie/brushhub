<script lang="ts">
    import type { Component, ComponentProps } from 'svelte';
    import CommissionOverview from '$lib/components/CommissionOverview.svelte';
    import CommissionBrief from '$lib/components/CommissionBrief.svelte';
    import CommissionCheckout from '$lib/components/CommissionCheckout.svelte';
    import CommissionButtons from '$lib/components/CommissionButtons.svelte';

    let { selectedService, closePlaceCommission, tierIndex }: ComponentProps<any> = $props();

    let warningMessage = $state('');
    let commissionChoice = $state({
        selectedTier: tierIndex,
        extras: selectedService.extras.map((extra: any) => false),
        brief: '',
        images: [],
        deadline: ''
    });

    // TODO: CLEAN UP
    // ADD FORM SUBMISSION

    $inspect(commissionChoice);

    let progress = $state(0);
    let steps: { component: Component; backwards: string; forwards: string }[] = [
        { component: CommissionOverview, backwards: 'Back to Overview', forwards: 'Next to Brief' },
        {
            component: CommissionBrief,
            backwards: 'Back to Type Selection',
            forwards: 'Next to Checkout'
        },
        {
            component: CommissionCheckout,
            backwards: 'Back to Brief',
            forwards: 'Finish'
        }
    ];

    const checkChoices = (): boolean => {
        if (commissionChoice.brief === '') {
            warningMessage = 'Please provide a brief for your commission.';
            return false;
        }

        if (commissionChoice.deadline === '') {
            warningMessage = 'Please provide a deadline for your commission.';
            return false;
        }

        const today = new Date().setHours(0, 0, 0, 0);
        const selectedDeadline = new Date(commissionChoice.deadline).setHours(0, 0, 0, 0);

        if (selectedDeadline <= today) {
            warningMessage = 'Deadline must be after today.';
            return false;
        }

        warningMessage = '';
        return true;
    };

    function proceedToNextStep() {
        if (progress === 1 && !checkChoices()) {
            return;
        }

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

        {#each steps as { component: Component, backwards, forwards }, index}
            {#if index === progress}
                {#if index === 1}
                    <Component {selectedService} {warningMessage} bind:commissionChoice />
                {:else if index === 2}
                    <Component {selectedService} {commissionChoice} />
                {:else}
                    <Component {selectedService} />
                {/if}
                <CommissionButtons {goToPreviousStep} {proceedToNextStep} {backwards} {forwards} />
            {/if}
        {/each}
    </div>
</div>
