<script lang="ts">
    import type { ComponentProps } from 'svelte';
    import CommissionButtons from '$lib/components/CommissionButtons.svelte';
    import Timeline from '$lib/components/Timeline.svelte';
    import Tabs from '$lib/Tabs.svelte';
    import EditDetails from '$lib/components/EditDetails.svelte';
    import EditMilestones from '$lib/components/EditMilestones.svelte';
    import EditOverview from '$lib/components/EditOverview.svelte';
    import EditTos from '$lib/components/EditTos.svelte';
    import SummaryCommission from './SummaryCommission.svelte';

    const { closeEdit, selectedService, currentArtist }: ComponentProps<any> = $props();

    const MAX_TABS = 4;

    let tabIndex = $state(0);
    let nodeTimeline = ['Overview', 'Types', 'Milestones', 'Terms of Service', 'Summary'];
    

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

<div class="mb-4 card-container px-2 sm:px-6 overflow-x-auto">
    <Timeline {nodeTimeline} currentIndex={tabIndex} callback={changeIndex} />
</div>
<div class="card-container px-6">
    <Tabs
        {items}
        hideTabs={true}
        currentTab={tabIndex + 1}
        bind:bindableItems={items}
        binded={true}
    />
    <CommissionButtons {goToPreviousStep} {proceedToNextStep} backwards={'Previous Step'}
    forwards={'Next Step'} indexes={[tabIndex, MAX_TABS]}/>
</div>


<style>
</style>
