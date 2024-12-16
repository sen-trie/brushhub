<script lang="ts">
    import Services from '$lib/Services.svelte';
    import EditCommission from './EditCommission.svelte';
    import CreateCommission from './CreateCommission.svelte';
    import type { Service } from '$lib/types';
    import type { PageData } from './$types';
    let { data }: { data: PageData } = $props();

    const serviceDB: Service[] = data?.service;

    let selectedService = $state<Service | null>(null);
    let showEditCommission = $state(false);
    let showCreateCommission = $state(false);

    const callback = (newService: Service) => {
        selectedService = newService;
        showEditCommission = true;
        showCreateCommission = false;
    };

    const resetView = () => {
        showEditCommission = false;
        showCreateCommission = false;
    };
</script>

<div>
    {#if showEditCommission}
        <EditCommission closeEdit={resetView} {selectedService} />
    {:else if showCreateCommission}
        <CreateCommission closeEdit={resetView} />
    {:else}
        <div class="overview-container p-4">
            <div class="mb-4 flex justify-end">
                <button
                    class="my-services-button rounded bg-orange-500 px-4 py-2 text-white hover:bg-orange-600"
                    onclick={() => (showCreateCommission = true)}
                >
                    Create New Service
                </button>
            </div>
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
    {/if}
</div>
