<script lang="ts">
    import type { ComponentProps } from "svelte";
    import Dashboard from '$lib/Dashboard.svelte';
    import Tabs from "$lib/Tabs.svelte";
    const { commissionOrOrder, requestDB, openRequest }: ComponentProps<any> = $props();

    let items: any[] = $state([]);
    if (commissionOrOrder) {
        items = [
        {
            label: `New Requests (${requestDB.filter((req: any) => req.state.value === 'pending').length})`,
            value: 1,
            component: Dashboard,
            props: {
                requestDB: requestDB.filter((req: any) => req.state.value === 'pending'),
                openRequest: openRequest,
            }
        },
        {
            label: `Active (${requestDB.filter((req: any) => req.state.value === 'active').length})`,
            value: 2,
            component: Dashboard,
            props: {
                requestDB: requestDB.filter((req: any) => req.state.value === 'active'),
                openRequest: openRequest
            }
        },
        {
            label: 'Cancelled / Rejected',
            value: 3,
            component: Dashboard,
            props: {
                requestDB: requestDB.filter(
                    (req: any) => req.state.value === 'cancelled' || req.state.value === 'rejected'
                ),
                openRequest: openRequest
            }
        },
        {
            label: 'Finished',
            value: 4,
            component: Dashboard,
            props: {
                requestDB: requestDB.filter((req: any) => req.state.value === 'finished'),
                openRequest: openRequest
            }
        }
    ];
    } else {
        items = [
        {
            label: 'Active',
            value: 1,
            component: Dashboard,
            props: {
                requestDB: requestDB.filter(
                    (req: any) => req.state.value === 'active' || req.state.value === 'pending'
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
                    (req: any) => req.state.value === 'cancelled' || req.state.value === 'rejected'
                ),
                openRequest: openRequest
            }
        },
        {
            label: 'Finished',
            value: 3,
            component: Dashboard,
            props: {
                requestDB: requestDB.filter((req: any) => req.state.value === 'finished'),
                openRequest: openRequest
            }
        }
    ];
    }
</script>

<div class="min-h-96">
    <Tabs {items} />
</div>