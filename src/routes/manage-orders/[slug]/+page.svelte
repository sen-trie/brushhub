<script lang="ts">
    import Tabs from '$lib/Tabs.svelte';
    import Dashboard from '$lib/Dashboard.svelte';
    import ViewCommission from '$lib/ViewCommission.svelte';
    import type { PageData } from './$types';
    let { data }: { data: PageData } = $props();

    const requestDB: any[] = data?.request;
    let currentCommission = $state({});

    let showRequest = $state(false);
    const openRequest = (request: any) => {
        showRequest = true;
        currentCommission = request;
    };
    let items = [
        {
            label: 'Active',
            value: 1,
            component: Dashboard,
            props: {
                requestDB: requestDB.filter(
                    (req) => req.state.value === 'active' || req.state.value === 'pending'
                ),
                openRequest: openRequest
            }
        },
        {
            label: 'Cancelled / Rejected',
            value: 2,
            component: Dashboard,
            props: {
                requestDB: requestDB.filter(
                    (req) => req.state.value === 'cancelled' || req.state.value === 'rejected'
                ),
                openRequest: openRequest
            }
        },
        {
            label: 'Finished',
            value: 3,
            component: Dashboard,
            props: {
                requestDB: requestDB.filter((req) => req.state.value === 'finished'),
                openRequest: openRequest
            }
        }
    ];
</script>

{#if showRequest}
    <ViewCommission closeRequest={() => (showRequest = false)} request={currentCommission} />
{:else}
    <h1 class="page-title mb-2">Your Orders</h1>
    <Tabs {items} />
{/if}
