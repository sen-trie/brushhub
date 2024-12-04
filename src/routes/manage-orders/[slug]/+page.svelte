<script lang="ts">
    import Tabs from '$lib/Tabs.svelte';
    import Dashboard from '$lib/Dashboard.svelte';
    import type { PageData } from './$types';
    let { data }: { data: PageData } = $props();

    const requestDB: any[] = data?.request;

    let items = [
        {
            label: 'Active',
            value: 1,
            component: Dashboard,
            props: {
                requestDB: requestDB.filter(
                    (req) => req.state.value === 'active' || req.state.value === 'pending'
                )
            }
        },
        {
            label: 'Cancelled / Rejected',
            value: 2,
            component: Dashboard,
            props: {
                requestDB: requestDB.filter(
                    (req) => req.state.value === 'cancelled' || req.state.value === 'rejected'
                )
            }
        },
        {
            label: 'Finished',
            value: 3,
            component: Dashboard,
            props: { requestDB: requestDB.filter((req) => req.state.value === 'finished') }
        }
    ];
</script>

<div>
    <div class="overview-container p-4">
        <h2 class="mb-4 text-lg font-semibold">Your Orders</h2>
        <div>
            <Tabs {items} />
        </div>
    </div>
</div>
