<script lang="ts">
    import ViewCommission from '$lib/ViewCommission.svelte';
    import CommissionOrderTab from '$lib/components/CommissionOrderTab.svelte';
    import type { PageData } from './$types';
    let { data }: { data: PageData } = $props();

    let requestDB: any[] = $state(data?.request);
    let currentCommission = $state({});

    let showRequest = $state(false);
    const openRequest = (request: any) => {
        showRequest = true;
        currentCommission = request;
    };

    const editEntry = (accept: boolean, entry: any) => {
        const milestones = entry.service.milestones.map((milestone: any) => {
            return {
                approval: null,
                name: milestone.name,
                date: null,
                feedback: '',
                sample: [],
            };
        });

        if (accept) {
            entry.state = { value: 'active', progress: milestones };    
        } else {
            entry.state = { value: 'rejected', progress: milestones };
        }
        requestDB = requestDB.map((req: any) => req.id === entry.id ? entry : req);
        console.log(requestDB);
    }
</script>

{#if showRequest}
    <ViewCommission
        closeRequest={() => (showRequest = false)}
        request={currentCommission}
        artistView={true}
        {editEntry}
    />
{:else}
    <h1 class="page-title mb-2">Your Commissions</h1>
    <CommissionOrderTab commissionOrOrder={true} {requestDB} {openRequest}/>
{/if}
