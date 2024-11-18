<script lang="ts">
    import type { PageData } from './$types';
    import BackButton from '$lib/components/BackButton.svelte';
    import Browse from "$lib/Browse.svelte";
    import artworkDB from '$lib/db/artwork.json';

    let { data }: { data: PageData } = $props();
    const selectedService = data.service;

    const artDB = artworkDB.filter(
        (artwork) => selectedService.samples.includes(artwork.id)
    );
</script>

<div class="p-6">
    <BackButton />
    <div class="flex items-center space-x-4">
        <h1 class="text-2xl font-bold">{selectedService.title}</h1>
        <span
            class="rounded px-2 py-1 text-xs font-bold text-white
                {selectedService.isOpen ? "bg-green-600" : "bg-red-600"} 
            "
        >
            {selectedService.isOpen ? "OPEN" : "CLOSED"} 
        </span>
    </div>
    
    
    <p class="text-sm text-gray-500">Anne the Hungry</p>

    <h2 class="mt-8 text-lg font-bold">Samples</h2>
    <div class="">
        <Browse {artDB} showArtist={false}/>
    </div>

    <h2 class="mt-8 text-lg font-bold">Tiers</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {#each selectedService.types as type}
            <div class="border rounded-lg p-4 shadow-sm">
                <h2 class="font-semibold text-lg text-orange-500">{type.name}</h2>
                <p class="text-green-600 font-bold">SGD {type.price}</p>
                <p class="text-sm text-gray-600 mt-2">{type.description}</p>
                <button
                    class="mt-4 w-full bg-orange-500 text-white rounded-lg px-4 py-2 text-sm font-medium hover:bg-orange-600"
                >
                    Place a commission
                </button>
            </div>
        {/each}
    </div>

    <h2 class="mt-8 text-lg font-bold">Extras</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {#each selectedService.extras as extra}
            <div class="border rounded-lg p-4 shadow-sm bg-orange-50">
                <h3 class="font-semibold text-orange-500">{extra.name}</h3>
                <p class="text-green-600 font-bold">
                    {extra.type === "percentage" ? `+ ${extra.value}%` : `+ SGD ${extra.value}`}
                </p>
                <p class="text-sm text-gray-600 mt-2">
                    <!-- {extra.description || `Extra ${extra.name.toLowerCase()}`} -->
                </p>
            </div>
        {/each}
    </div>
</div>

