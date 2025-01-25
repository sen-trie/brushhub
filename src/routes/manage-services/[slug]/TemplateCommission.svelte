<script lang="ts">
    import type { ComponentProps } from 'svelte';
    import BackButtonArrow from '$lib/components/BackButtonArrow.svelte';
    import EditCommission from './EditCommission.svelte';
    import CreateCommission from './CreateCommission.svelte';
    import { pullDB } from '$lib/db';
    
    const { closeEdit, editOrCreate, props, addEntry, removeEntry, editEntry }: ComponentProps<any> = $props();
    const entryCopy = JSON.parse(JSON.stringify(props)); // deep copy
    let newService = $state({});
    
    const discardChanges = () => {
        if (confirm('Are you sure you want to delete this service?')) {
            if (editOrCreate) {
                removeEntry(props.id);
            }
            closeEdit();
        }
    };

    const returnDraft = () => {
        if (editOrCreate) {
            if (confirm('Are you sure you want to discard your changes?')) {
                editEntry(entryCopy);
                closeEdit();
            }
        } else {
            addEntry(newService);
            closeEdit();
        }
    };

    const publishDraft = () => {
        newService.isOpen = true;
        newService.state = "published";
        addEntry(newService);
        closeEdit();
    }

    if (!editOrCreate) {
        const currentArtist = props.currentArtist;
        const service = pullDB('tos', { artistId: Number(currentArtist.id) }, {})[0].categories;
        const tos = Object.assign({}, ...service.map((entry: any) => ({[entry.title]: true})));
        
        newService = {
            id: props.id,
            artistId: currentArtist.id,
            state: 'draft',
            isOpen: false,
            title: 'Working Title',
            description: 'Working Description',
            thumbnail: '',
            samples: [],
            tags: [],
            types: [
                { name: 'Sample Name', price: 20, type: 'currency', description: 'Sample Description' }
            ],
            extras: [],
            fastDelivery: {
                enabled: false,
                price: 50,
                type: 'percentage',
                duration: 3,
                unit: 'days'
            },
            commercialUse: {
                enabled: false,
                price: 100,
                type: 'percentage'
            },
            downpayment: {
                payment: {
                    value: 20,
                    enabled: false
                }
            },
            milestones: [],
            termsOfService: tos,
            uniqueTos: []
        };
    }

</script>

<div class="fixed inset-0 z-50 overflow-y-auto min-h-full">
    <div class="h-full relative !bg-gray-100 dark:!bg-stone-900">
        <div
            class="mb-4 flex flex-col sm:flex-row w-full justify-between border-b-2 
            pt-4 pb-2 colour-border px-6 sm:px-6 md:px-8 lg:px-10"
        >
            <BackButtonArrow
                closeEdit={returnDraft}
                includeBorder={false}
                buttonText={editOrCreate ? 'Edit Service' : 'Create Service'}
            />
            <div class="flex flex-row space-x-2 mt-2 sm:mt-0">
                <button onclick={discardChanges} class="discard-button"
                    >{editOrCreate ? 'Delete Service' : 'Discard Draft'}</button
                >
                <button class="save-button mx-0 sm:mx-4" onclick={publishDraft}>Publish</button>
            </div>
        </div>
        <div class="px-2 sm:px-6 md:px-10 lg:px-16 !bg-gray-100 dark:!bg-stone-900 pb-6">
            {#if editOrCreate}
                <EditCommission {closeEdit} selectedService={props} />
            {:else}
                <CreateCommission {closeEdit} selectedService={newService} currentArtist={props}/>
            {/if}
        </div>
    </div>
</div>
