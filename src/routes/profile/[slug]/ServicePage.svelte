<script lang="ts">
    import type { ComponentProps } from "svelte";
    import Browse from "$lib/Browse.svelte";

    let { selectedService, toggleToOverview }: ComponentProps<any> = $props();
</script>

<div class="p-6">
    <button
        class="mb-4 inline-flex items-center px-4 py-2 text-sm font-medium text-orange-500 border border-orange-500 rounded hover:bg-orange-50"
        onclick={toggleToOverview}
    >
        <i class="fas fa-arrow-left mr-2"></i> Back
    </button>

    <h1 class="text-2xl font-bold">{selectedService.title}</h1>
    <p class="text-sm text-gray-500">Anne the Hungry</p>

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
                    {extra.description || `Extra ${extra.name.toLowerCase()}`}
                </p>
            </div>
        {/each}
    </div>

    <h2 class="mt-8 text-lg font-bold">Samples</h2>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        <Browse />
    </div>
</div>
