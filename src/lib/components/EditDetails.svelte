<script lang="ts">
    import type { ComponentProps } from 'svelte';
    import ServiceTab from '$lib/components/ServiceTab.svelte';

    let { props }: ComponentProps<any> = $props();

    const selectedService = props.selectedService;

    let types = $state([...selectedService.types]);
    let extras = $state([...selectedService.extras]);
    let fastDelivery = $state({ ...selectedService.fastDelivery });
    let commercialUse = $state({ ...selectedService.commercialUse });

    const addTab = (tabs: any[]) => {
        return [...tabs, { name: '', value: 0, type: 'currency', description: '' }];
    };

    function removeTab(index: number, tabs: any[]) {
        return tabs.filter((_: any, i: number) => i !== index);
    }
</script>

<div class="p-6">
    <h2 class="text-lg font-semibold">Types *</h2>
    <div class="space-y-2">
        {#each types as tab, index}
            <ServiceTab {tab} removeSelf={() => (types = removeTab(index, types))} />
        {/each}
        <button
            class="mt-2 text-orange-500"
            onclick={() => {
                types = addTab(types);
            }}>+ Add new extra...</button
        >
    </div>

    <h2 class="mt-8 text-lg font-semibold">Extras</h2>
    <div class="space-y-2">
        {#each extras as tab, index}
            <ServiceTab extra={true} {tab} removeSelf={() => (extras = removeTab(index, extras))} />
        {/each}
        <button
            class="mt-2 text-orange-500"
            onclick={() => {
                extras = addTab(extras);
            }}>+ Add new extra...</button
        >
    </div>

    <h2 class="mt-8 text-lg font-semibold">Add-in Services</h2>
    <div class="space-y-4">
        <div class="flex items-center space-x-4">
            <input type="checkbox" bind:checked={fastDelivery.enabled} id="fast-delivery" />
            <label for="fast-delivery" class="flex-1">Fast Delivery</label>
            <input
                type="number"
                class="rounded-md border px-2 py-1"
                placeholder="Duration"
                bind:value={fastDelivery.duration}
            />
            <select class="rounded-md border px-2 py-1" bind:value={fastDelivery.unit}>
                <option value="days">Days</option>
                <option value="weeks">Weeks</option>
            </select>
            <input
                type="number"
                class="rounded-md border px-2 py-1"
                placeholder="Price"
                bind:value={fastDelivery.price}
            />
            <select class="rounded-md border px-2 py-1" bind:value={fastDelivery.type}>
                <option value="percentage">%</option>
                <option value="currency">USD</option>
            </select>
        </div>

        <div class="flex items-center space-x-4">
            <input type="checkbox" bind:checked={commercialUse.enabled} id="commercial-use" />
            <label for="commercial-use" class="flex-1">Commercial Use</label>
            <input
                type="number"
                class="rounded-md border px-2 py-1"
                placeholder="Price"
                bind:value={commercialUse.price}
            />
            <select class="rounded-md border px-2 py-1" bind:value={commercialUse.type}>
                <option value="percentage">%</option>
                <option value="currency">USD</option>
            </select>
        </div>
    </div>
</div>
