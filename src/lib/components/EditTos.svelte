<script lang="ts">
    import type { ComponentProps } from 'svelte';
    import { pullDB } from '$lib/db';
    import TosTab from '$lib/components/TosTab.svelte';

    let { props = $bindable() }: ComponentProps<any> = $props();
    const selectedService = props.selectedService;

    const currentTos = pullDB('tos', {}, { artistId: selectedService.artistId })?.categories ?? [];

    let tos = $state(
        currentTos.map((category) => ({
            ...category,
            enabled: selectedService.termsOfService[category.title]
        }))
    );

    let uniqueTos = $state(
        selectedService.uniqueTos.map((category: any) => ({
            ...category,
            global: false
        }))
    );

    const addToUniqueTos = () => {
        uniqueTos = [
            ...uniqueTos,
            {
                details: 'Details here',
                title: 'New Section',
                global: false
            }
        ];
    };

    function removeTab(index: number, tabs: any[]) {
        return tabs.filter((_: any, i: number) => i !== index);
    }
</script>

<div>
    <h2 class="text-lg font-semibold">Terms Of Service</h2>
    <h3>
        Choose sections from your global contract, or add a new term specific to this service. Any
        changes made here to the global terms will be applied for all other services.
    </h3>
    <div class="mt-4 flex flex-col gap-4">
        {#each tos as tab}
            <TosTab {tab} />
        {/each}
        {#each uniqueTos as tab, index}
            <TosTab
                {tab}
                unique={true}
                removeSelf={() => {
                    uniqueTos = removeTab(index, uniqueTos);
                }}
            />
        {/each}
    </div>
    <button class="mt-2 text-orange-500" onclick={addToUniqueTos}>+ Add new section...</button>
</div>
