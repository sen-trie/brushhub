<script lang="ts">
    import type { ComponentProps } from 'svelte';
    import CommissionButtons from '$lib/components/CommissionButtons.svelte';
    import BackButtonArrow from '$lib/components/BackButtonArrow.svelte';
    import Timeline from '$lib/components/Timeline.svelte';
    import Tabs from '$lib/Tabs.svelte';
    import EditDetails from '$lib/components/EditDetails.svelte';
    import EditMilestones from '$lib/components/EditMilestones.svelte';
    import EditOverview from '$lib/components/EditOverview.svelte';
    import EditTos from '$lib/components/EditTos.svelte';
    import SummaryCommission from './SummaryCommission.svelte';

    const { closeEdit, currentArtist }: ComponentProps<any> = $props();

    const MAX_TABS = 4;

    let tabIndex = $state(0);
    let nodeTimeline = ['Overview', 'Types', 'Milestones', 'Terms of Service', 'Summary'];
    let selectedService = $state({
        state: 'draft',
        isOpen: false,
        title: '',
        description: '',
        thumbnail: '1.jpg',
        samples: [],
        tags: [],
        types: [],
        extras: [],
        fastDelivery: {
            enabled: false,
            price: 50,
            type: 'percentage',
            duration: 3,
            unit: 'days'
        },
        commercialUse: {
            enabled: false,
            price: 100,
            type: 'percentage'
        },
        downpayment: {
            payment: {
                value: 20,
                enabled: false
            }
        },
        milestones: [],
        termsOfService: {},
        uniqueTos: []
    });

    let items = $state([
        {
            label: 'Overview',
            value: 1,
            component: EditOverview,
            props: { selectedService },
            bindable: true
        },
        {
            label: 'Service Details',
            value: 2,
            component: EditDetails,
            props: { selectedService },
            bindable: true
        },
        {
            label: 'Milestones',
            value: 3,
            component: EditMilestones,
            props: { selectedService },
            bindable: true
        },
        {
            label: 'Terms of Service',
            value: 4,
            component: EditTos,
            props: { selectedService },
            bindable: true
        },
        {
            label: 'Summary',
            value: 5,
            component: SummaryCommission,
            props: { selectedService, currentArtist }
        }
    ]);

    const goToPreviousStep = () => {
        tabIndex--;
        return Math.min(tabIndex, 0);
    };

    const proceedToNextStep = () => {
        tabIndex++;
        return Math.max(tabIndex, MAX_TABS);
    };

    const changeIndex = (index: number) => {
        tabIndex = index;
    };
</script>

<div class="fixed inset-0 z-50 overflow-y-auto bg-white">
    <div class="relative p-6">
        <div class="mb-4 flex w-full justify-between border-b-2">
            <BackButtonArrow {closeEdit} buttonText="Create Service" includeBorder={false} />
            <div class="flex pb-4">
                <button class="discard-button">Discard Service</button>
                <button class="confirm-button mx-4">Save as Draft</button>
            </div>
        </div>
        <div class="p-4">
            <Timeline {nodeTimeline} currentIndex={tabIndex} callback={changeIndex} />
        </div>
        <Tabs
            {items}
            hideTabs={true}
            currentTab={tabIndex + 1}
            bind:bindableItems={items}
            binded={true}
        />
        <CommissionButtons
            {goToPreviousStep}
            {proceedToNextStep}
            backwards={'Previous Step'}
            forwards={'Next Step'}
            indexes={[tabIndex, MAX_TABS]}
            finalStep={() => {
                closeEdit();
            }}
            finalWord={'Publish Service'}
        />
    </div>
</div>
