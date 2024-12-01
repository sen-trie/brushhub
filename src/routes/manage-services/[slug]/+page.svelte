<script lang="ts">
    import Services from '$lib/Services.svelte';
    import EditCommission from '$lib/EditCommission.svelte';
    import type { Service } from '$lib/types';
    import type { PageData } from './$types';
    let { data }: { data: PageData } = $props();

    const serviceDB: Service[] = data?.service;

    let selectedService = $state<Service | null>(null);
    let showEditCommission = $state(false);

    const callback = (newService: Service) => {
        selectedService = newService;
        showEditCommission = true;
    };
</script>

<div>
    {#if showEditCommission}
        <EditCommission closeEdit={() => (showEditCommission = false)} {selectedService} />
    {/if}

    <div class="overview-container p-4">
        <section class="mb-8">
            <h2 class="mb-4 text-lg font-semibold">Published</h2>
            <Services {serviceDB} filter={'published'} viewOnly={false} {callback} />
        </section>
        <section class="mb-8">
            <h2 class="mb-4 text-lg font-semibold">Archived</h2>
            <Services {serviceDB} filter={'archived'} viewOnly={false} {callback} />
        </section>
        <section class="mb-8">
            <h2 class="mb-4 text-lg font-semibold">Draft</h2>
            <Services {serviceDB} filter={'draft'} viewOnly={false} {callback} />
        </section>
    </div>
</div>
