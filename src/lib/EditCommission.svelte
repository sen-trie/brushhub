<script lang="ts">
    import type { Service } from '$lib/types';
    import Tabs from '$lib/Tabs.svelte';
    import EditOverview from '$lib/components/EditOverview.svelte';
    import EditDetails from '$lib/components/EditDetails.svelte';
    import EditMilestones from '$lib/components/EditMilestones.svelte';
    import EditTos from '$lib/components/EditTos.svelte';

    let { closeEdit, selectedService }: { closeEdit: () => void; selectedService: Service | null } =
        $props();

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
        <button
            class="mb-4 flex items-center space-x-2 text-sm font-bold text-orange-500"
            onclick={closeEdit}
            aria-label="Back"
        >
            <i class="fas fa-arrow-left"></i>
            <span>Back</span>
        </button>

        <Tabs {items} />
    </div>
</div>
