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

{#if showRequest}
    <ViewCommission closeRequest={() => (showRequest = false)} request={currentCommission} />
{:else}
    <h1 class="page-title mb-2">Your Orders</h1>
    <CommissionOrderTab commissionOrOrder={false} {requestDB} {openRequest}/>
{/if}
