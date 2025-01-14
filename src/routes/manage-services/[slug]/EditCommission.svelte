<script lang="ts">
    import BackButtonArrow from '$lib/components/BackButtonArrow.svelte';
    import type { Service } from '$lib/types';
    import Tabs from '$lib/Tabs.svelte';
    import EditOverview from '$lib/components/EditOverview.svelte';
    import EditDetails from '$lib/components/EditDetails.svelte';
    import EditMilestones from '$lib/components/EditMilestones.svelte';
    import EditTos from '$lib/components/EditTos.svelte';

    const { closeEdit, selectedService }: { closeEdit: () => void; selectedService: Service | null } = $props();

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

<div class="card-container">
    <Tabs {items} />
</div>
