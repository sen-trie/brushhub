<script lang="ts">
    import type { PageData } from './$types';
    import { calculateCurrency } from '$lib/util';
    import userDB from '$lib/db/user.json';
    import artworkDB from '$lib/db/artwork.json';
    import BackButton from '$lib/components/BackButton.svelte';
    import Browse from '$lib/Browse.svelte';
    import PlaceCommission from '$lib/PlaceCommission.svelte';

    let { data }: { data: PageData } = $props();
    const selectedService = data.service;

    const artDB = artworkDB.filter((artwork) => selectedService.samples.includes(artwork.id));
    const currentArtist = userDB.find((user) => user.id === selectedService.artistId);

    let showPlaceCommission = $state(false);
    let tierIndex = $state(0);

    function openPlaceCommission(index: number) {
        tierIndex = index;
        showPlaceCommission = true;
    }

    function closePlaceCommission() {
        showPlaceCommission = false;
    }
</script>

<div>
    {#if showPlaceCommission}
        <PlaceCommission {selectedService} {closePlaceCommission} {tierIndex} {currentArtist} />
    {/if}

    <div class="p-6">
        <BackButton />
        <div class="flex items-center space-x-4">
            <h1 class="text-2xl font-bold">{selectedService.title}</h1>
            <span
                class="rounded px-2 py-1 text-xs font-bold text-white
                    {selectedService.isOpen ? 'bg-green-600' : 'bg-red-600'} 
                "
            >
                {selectedService.isOpen ? 'OPEN' : 'CLOSED'}
            </span>
        </div>

        <p class="text-sm text-gray-500">Anne the Hungry</p>

        <h2 class="mt-8 text-lg font-bold">Samples</h2>
        <div class="">
            <Browse {artDB} showArtist={false} />
        </div>

        <h2 class="mt-8 text-lg font-bold">Tiers</h2>
        <div class="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            {#each selectedService.types as type, index}
                <div class="rounded-lg border p-4 shadow-sm">
                    <h2 class="text-lg font-semibold text-orange-500">{type.name}</h2>
                    <p class="font-bold text-green-600">{calculateCurrency(type.price)}</p>
                    <p class="mt-2 text-sm text-gray-600">{type.description}</p>
                    <button
                        class="mt-4 w-full rounded-lg bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600"
                        onclick={() => {
                            openPlaceCommission(index);
                        }}
                    >
                        Place a commission
                    </button>
                </div>
            {/each}
        </div>

        <h2 class="mt-8 text-lg font-bold">Extras</h2>
        <div class="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
            {#each selectedService.extras as extra}
                <div class="rounded-lg border bg-orange-50 p-4 shadow-sm">
                    <h3 class="font-semibold text-orange-500">{extra.name}</h3>
                    <p class="font-bold text-green-600">
                        {extra.type === 'percentage'
                            ? `+ ${extra.price}%`
                            : `+ ${calculateCurrency(extra.price)}`}
                    </p>
                    <p class="mt-2 text-sm text-gray-600">
                        <!-- {extra.description || `Extra ${extra.name.toLowerCase()}`} -->
                    </p>
                </div>
            {/each}
        </div>
    </div>
</div>
