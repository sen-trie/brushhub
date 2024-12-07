<script lang="ts">
    import Tabs from '$lib/Tabs.svelte';
    import Dashboard from '$lib/Dashboard.svelte';
    import ViewCommission from '$lib/ViewCommission.svelte';
    import type { PageData } from '../$types';
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
            label: `New Requests (${requestDB.filter((req) => req.state.value === 'pending').length})`,
            value: 1,
            component: Dashboard,
            props: {
                requestDB: requestDB.filter((req) => req.state.value === 'pending'),
                openRequest: openRequest
            }
        },
        {
            label: `Active (${requestDB.filter((req) => req.state.value === 'active').length})`,
            value: 2,
            component: Dashboard,
            props: {
                requestDB: requestDB.filter((req) => req.state.value === 'active'),
                openRequest: openRequest
            }
        },
        {
            label: 'Cancelled / Rejected',
            value: 3,
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
            value: 4,
            component: Dashboard,
            props: {
                requestDB: requestDB.filter((req) => req.state.value === 'finished'),
                openRequest: openRequest
            }
        }
    ];
</script>

{#if showRequest}
    <ViewCommission
        closeRequest={() => (showRequest = false)}
        request={currentCommission}
        artistView={true}
    />
{:else}
    <div>
        <div class="overview-container p-4">
            <h2 class="mb-4 text-lg font-semibold">Your Commissions</h2>
            <div>
                <Tabs {items} />
            </div>
        </div>
    </div>
{/if}
