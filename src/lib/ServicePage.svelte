<script lang="ts">
    import type { ComponentProps } from 'svelte';
    import { calculateCurrency } from '$lib/util';
    import Browse from './Browse.svelte';

    const {
        selectedService,
        artDB,
        currentArtist,
        viewOnly = false,
        openPlaceCommission = () => {}
    }: ComponentProps<any> = $props();

    const calculateExtra = (price: number, type: string) => {
        if (isNaN(price)) {
            return 'Undefined Price';
        }
        return type === 'percentage' ? `+ ${price}%` : `+ ${calculateCurrency(price)}`;
    };
</script>

<div class="flex justify-between">
    <div class="flex flex-col justify-center">
        <div class="flex items-center space-x-4">
            <h1 class="text-2xl font-bold">{selectedService.title || 'Missing Title'}</h1>
            {#if !viewOnly}
                <span
                    class="rounded px-2 py-1 text-xs font-bold text-white
                        {selectedService.isOpen ? 'bg-green-600' : 'bg-red-600'} 
                    "
                >
                    {selectedService.isOpen ? 'OPEN' : 'CLOSED'}
                </span>
            {/if}
        </div>
        <p class="text-sm text-gray-500">{currentArtist.displayName}</p>
    </div>
    <div class="flex max-w-lg flex-wrap items-center gap-2">
        {#if selectedService.tags.length === 0 && viewOnly}
            <span class="rounded bg-orange-100 px-2 py-1 text-xs font-medium text-orange-600">
                No Tags
            </span>
        {/if}
        {#each selectedService.tags as tag}
            <span class="rounded bg-orange-100 px-2 py-1 text-xs font-medium text-orange-600">
                #{tag}
            </span>
        {/each}
    </div>
</div>

<div class="mt-4 flex flex-wrap items-center gap-2">
    {#if selectedService.fastDelivery.enabled}
        <span class="rounded bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-600">
            Fast Delivery
        </span>
    {/if}
    {#if selectedService.commercialUse.enabled}
        <span class="rounded bg-orange-100 px-2 py-1 text-xs font-medium text-orange-600">
            Commercial
        </span>
    {/if}
</div>

<h2 class="mt-4 text-lg font-bold">Samples</h2>
<div class="mt-2">
    <Browse {artDB} showArtist={false} />
</div>

<h2 class="mt-8 text-lg font-bold">Tiers</h2>
<div class="mt-2 grid grid-cols-1 gap-4 md:grid-cols-3">
    {#each selectedService.types as type, index}
        <div class="card-container">
            <h2 class="text-lg font-semibold text-orange-500">
                {type.name || (viewOnly && `Missing Name`)}
            </h2>
            <p class="font-bold text-green-600">
                {isNaN(type.price) ? 'Undefined Price' : calculateCurrency(type.price)}
            </p>
            <p class="mt-2 text-sm text-gray-600">
                {type.description || (viewOnly && `Missing Description`)}
            </p>
            {#if !viewOnly}
                <button
                    class="mt-4 w-full rounded-lg bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600"
                    onclick={() => {
                        openPlaceCommission(index);
                    }}
                >
                    Place a commission
                </button>
            {/if}
        </div>
    {/each}
</div>

<h2 class="mt-8 text-lg font-bold">Extras</h2>
<div class="mt-2 grid grid-cols-1 gap-4 md:grid-cols-3">
    {#each selectedService.extras as extra}
        <div class="card-container">
            <h3 class="font-semibold text-orange-500">
                {extra.name || (viewOnly && `Missing Name`)}
            </h3>
            <p class="font-bold text-green-600">
                {calculateExtra(extra.price, extra.type)}
            </p>
            <p class="mt-2 text-sm text-gray-600">
                {extra.description || (viewOnly && `Missing Description`)}
            </p>
        </div>
    {/each}
</div>
