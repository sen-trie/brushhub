<script lang="ts">
    import Services from '$lib/Services.svelte';
    import type { Service } from '$lib/types';
    import type { PageData } from './$types';
    import { wrapDefault } from '$lib/db';
    import TemplateCommission from './TemplateCommission.svelte';
    let { data }: { data: PageData } = $props();

    let serviceDB: Service[] = $state(data?.service);
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

    const addEntry = (newService: Service) => {
        serviceDB = [...serviceDB, newService];
    };

    const removeEntry = (id: number) => {
        serviceDB = serviceDB.filter((service) => service.id !== id);
    };

    const editEntry = (newService: Service) => {
        serviceDB = serviceDB.map((service) => (service.id === newService.id ? newService : service));
    };
</script>

{#snippet Service(filter: String)}
    <section class="card-container mb-8">
        <h2 class="mb-4 text-lg font-semibold">{filter[0].toUpperCase() + filter.slice(1)}</h2>
        <div class="service-grid mt-4 grid grid-cols-4 gap-4">
            <Services serviceDB={serviceDB.filter((service: any) => service.state === filter)} 
                      viewOnly={false} currentArtist={true} {callback} {editEntry} {removeEntry}
            />
        </div>
        {#if serviceDB.filter((service: any) => service.state === filter).length === 0}
            <img
                src={wrapDefault('artwork', '')}
                alt="Service Missing"
                class="h-48 w-full rounded-md object-contain"
            />
        {/if}
    </section>
{/snippet}

{#if showEditCommission}
    <TemplateCommission closeEdit={resetView} editOrCreate={true} 
                        props={selectedService} {addEntry} {removeEntry} {editEntry}/>
{:else if showCreateCommission}
    <TemplateCommission closeEdit={resetView} editOrCreate={false} 
                        props={{currentArtist: currentArtist, id: serviceDB.length > 0 ? serviceDB[serviceDB.length-1].id + 1 : 1}} 
                        {addEntry} {removeEntry} {editEntry}/>
{:else}
    <div class="card-island">
        <div class="mb-4 flex items-center justify-between">
            <h1 class="page-title">Manage Services</h1>
            <button
                class="my-services-button rounded bg-orange-500 px-4 py-2 text-white hover:bg-orange-600"
                onclick={() => (showCreateCommission = true)}
            >
                Create New Service
            </button>
        </div>

        {#each ['published', 'draft', 'archived'] as serviceState}
            {@render Service(serviceState)}
        {/each}
    </div>
{/if}
