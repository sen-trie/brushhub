<script lang="ts">
    import BackButtonArrow from '$lib/components/BackButtonArrow.svelte';
    import type { Service } from '$lib/types';
    import Tabs from '$lib/Tabs.svelte';
    import EditOverview from '$lib/components/EditOverview.svelte';
    import EditDetails from '$lib/components/EditDetails.svelte';
    import EditMilestones from '$lib/components/EditMilestones.svelte';
    import EditTos from '$lib/components/EditTos.svelte';

    const {
        closeEdit,
        selectedService
    }: { closeEdit: () => void; selectedService: Service | null } = $props();

    let items = [
        {
            label: 'Overview',
            value: 1,
            component: EditOverview,
            props: { selectedService }
        },
        {
            label: 'Service Details',
            value: 2,
            component: EditDetails,
            props: { selectedService }
        },
        {
            label: 'Milestones',
            value: 3,
            component: EditMilestones,
            props: { selectedService }
        },
        {
            label: 'Terms of Service',
            value: 4,
            component: EditTos,
            props: { selectedService }
        }
    ];
</script>

<div class="fixed inset-0 z-50 overflow-y-auto bg-white">
    <div class="relative p-6">
        <div class="mb-4 flex w-full justify-between border-b-2">
            <BackButtonArrow {closeEdit} buttonText="Edit Service" includeBorder={false} />
            <div class="flex pb-4">
                <button class="discard-button">Discard Changes</button>
                <button class="save-button mx-4">Save and Leave</button>
            </div>
        </div>
        <Tabs {items} />
    </div>
</div>
