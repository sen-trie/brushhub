<script lang="ts">
    import ViewCommission from '$lib/ViewCommission.svelte';
    import CommissionOrderTab from '$lib/components/CommissionOrderTab.svelte';
    import type { PageData } from './$types';
    let { data }: { data: PageData } = $props();

    const requestDB: any[] = data?.request;
    let currentCommission = $state({});

    let showRequest = $state(false);
    const openRequest = (request: any) => {
        showRequest = true;
        currentCommission = request;
    };
</script>

<svelte:head>
    <title>BrushHub - Manage Orders</title> 
</svelte:head>

{#if showRequest}
    <ViewCommission closeRequest={() => (showRequest = false)} request={currentCommission} />
{:else}
    <div class="card-island">
        <h1 class="page-title mb-4">Your Orders</h1>
        <CommissionOrderTab commissionOrOrder={false} {requestDB} {openRequest} artistOrCommissioner={false}/>
    </div>
{/if}
