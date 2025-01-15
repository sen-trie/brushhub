<script lang="ts">
    import Services from '$lib/Services.svelte';
    import type { Service } from '$lib/types';
    import type { PageData } from './$types';
    import TemplateCommission from './TemplateCommission.svelte';
    let { data }: { data: PageData } = $props();

    const serviceDB: Service[] = data?.service;
    const currentArtist = data?.user;

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

{#snippet Service(filter: String)}
    <section class="card-container mb-8">
        <h2 class="mb-4 text-lg font-semibold">{filter[0].toUpperCase() + filter.slice(1)}</h2>
        <div class="service-grid mt-4 grid grid-cols-4 gap-4">
            <Services {serviceDB} {filter} viewOnly={false} {callback} />
        </div>
    </section>
{/snippet}

{#if showEditCommission}
    <TemplateCommission closeEdit={resetView} editOrCreate={true} props={selectedService} />
{:else if showCreateCommission}
    <TemplateCommission closeEdit={resetView} editOrCreate={false} props={currentArtist} />
{:else}
    <div class="-mt-2 mb-4 flex items-center justify-between px-4">
        <h1 class="page-title">Manage Services</h1>
        <button
            class="my-services-button rounded bg-orange-500 px-4 py-2 text-white hover:bg-orange-600"
            onclick={() => (showCreateCommission = true)}
        >
            Create New Service
        </button>
    </div>

    {#each ['published', 'archived', 'draft'] as serviceState}
        {@render Service(serviceState)}
    {/each}
{/if}
