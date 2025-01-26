<script lang="ts">
    import type { Component } from 'svelte';
    import type { Service, CommissionChoice } from '$lib/types';
    import { navigateTo } from './util';
    import { page } from '$app/state';
    import CommissionOverview from '$lib/components/CommissionOverview.svelte';
    import CommissionBrief from '$lib/components/CommissionBrief.svelte';
    import CommissionCheckout from '$lib/components/CommissionCheckout.svelte';
    import CommissionButtons from '$lib/components/CommissionButtons.svelte';
    import BackButtonArrow from '$lib/components/BackButtonArrow.svelte';

    let {
        selectedService,
        closePlaceCommission,
        tierIndex,
        currentArtist
    }: {
        selectedService: Service;
        closePlaceCommission: () => void;
        tierIndex: number;
        currentArtist: any;
    } = $props();

    let warningMessage = $state('');
    let commissionChoice: CommissionChoice = $state({
        selectedTier: tierIndex,
        extras: selectedService.extras.map((extra: any) => false),
        brief: '',
        images: [],
        deadline: ''
    });

    let progress = $state(0);
    let steps: { component: Component; backwards: string; forwards: string }[] = [
        {
            component: CommissionOverview,
            backwards: 'Back to Overview',
            forwards: 'Proceed to Brief'
        },
        {
            component: CommissionBrief,
            backwards: 'Back to Type Selection',
            forwards: 'Proceed to Checkout'
        },
        {
            component: CommissionCheckout,
            backwards: 'Back to Brief',
            forwards: 'Submit Request'
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
        } else if (progress === steps.length - 1) {
            alert("Request Submitted!");
            navigateTo('/profile/' + currentArtist.username, page.url.pathname);
            
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

<div class="fixed inset-0 z-50 overflow-y-auto min-h-full">
    <div class="h-full relative !bg-gray-100 dark:!bg-stone-900">
        <div
            class="mb-4 flex w-full justify-between border-b-2 
            pt-4 pb-2 colour-border px-6 sm:px-6 md:px-8 lg:px-10"
        >
            <BackButtonArrow closeEdit={closePlaceCommission} buttonText="Place Commission Request" />
        </div>
        <div class="px-2 sm:px-6 md:px-10 lg:px-16 !bg-gray-100 dark:!bg-stone-900 pb-6">
            <div class="card-container px-6">
                <div class="space-y-2">
                    <h1 class="text-2xl font-bold">{selectedService.title}</h1>
                    <p class="text-normal">@{currentArtist.displayName}</p>
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
    </div>
</div>
