<script lang="ts">
    import type { ComponentProps } from 'svelte';
    import { getPreferredCurrency } from '$lib/util';
    import ServiceTab from '$lib/components/ServiceTab.svelte';

    let { props = $bindable() }: ComponentProps<any> = $props();
    let selectedService = props.selectedService;

    const addType = () => {
        selectedService.types = [
            ...selectedService.types,
            { name: '', value: 0, type: 'currency', description: '' }
        ];
    };

    const addExtra = () => {
        selectedService.extras = [
            ...selectedService.extras,
            { name: '', value: 0, type: 'currency', description: '' }
        ];
    };

    // TODO CONVERT CURRENCY TO USD
    const removeType = (index: number) => {
        selectedService.types = selectedService.types.filter((_: any, i: number) => i !== index);
    };

    const removeExtra = (index: number) => {
        selectedService.extras = selectedService.extras.filter((_: any, i: number) => i !== index);
    };
</script>

{#snippet serviceBlock(services: any[], removeSelf: (arg0: number) => void, extra = false)}
    <div class="space-y-2 py-2">
        {#each services as tab, index}
            <ServiceTab {tab} removeSelf={() => removeSelf(index)} />
        {/each}
        <button class="mt-2 text-orange-500" onclick={extra ? addExtra : addType}
            >+ Add new {extra ? 'extra' : 'type'}...</button
        >
    </div>
{/snippet}

<div>
    <h2 class="text-lg font-semibold">Types *</h2>
    {@render serviceBlock(selectedService.types, removeType)}

    <h2 class="mt-8 text-lg font-semibold">Extras</h2>
    {@render serviceBlock(selectedService.extras, removeExtra, true)}

    <h2 class="mt-8 text-lg font-semibold">Add-in Services</h2>
    <div class="mt-4 space-y-4">
        <div class="flex items-center space-x-4">
            <input
                type="checkbox"
                bind:checked={selectedService.fastDelivery.enabled}
                id="fast-delivery"
            />
            <label for="fast-delivery" class="flex-1">Fast Delivery</label>
            <input
                type="number"
                class="input-box"
                placeholder="Duration"
                bind:value={selectedService.fastDelivery.duration}
            />
            <select class="input-box" bind:value={selectedService.fastDelivery.unit}>
                <option value="days">Days</option>
                <option value="weeks">Weeks</option>
            </select>
            <input
                type="number"
                class="input-box"
                placeholder="Price"
                bind:value={selectedService.fastDelivery.price}
            />
            <select class="input-box" bind:value={selectedService.fastDelivery.type}>
                <option value="percentage">%</option>
                <option value="currency">{getPreferredCurrency()}</option>
            </select>
        </div>

        <!-- TODO FIX THIS PAGE -->
        <div class="flex items-center space-x-4">
            <input
                type="checkbox"
                bind:checked={selectedService.commercialUse.enabled}
                id="commercial-use"
            />
            <label for="commercial-use" class="flex-1">Commercial Use</label>
            <input
                type="number"
                class="input-box"
                placeholder="Price"
                bind:value={selectedService.commercialUse.price}
            />
            <select class="input-box" bind:value={selectedService.commercialUse.type}>
                <option value="percentage">%</option>
                <option value="currency">{getPreferredCurrency()}</option>
            </select>
        </div>
    </div>
</div>
