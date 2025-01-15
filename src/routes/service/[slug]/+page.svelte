<script lang="ts">
    import type { PageData } from './$types';
    import { pullDB } from '$lib/db';
    import BackButton from '$lib/components/BackButton.svelte';
    import PlaceCommission from '$lib/PlaceCommission.svelte';
    import ServicePage from '$lib/ServicePage.svelte';

    let { data }: { data: PageData } = $props();
    const selectedService = data.service;

    const artDB = pullDB('artwork', {}, {}).filter((artwork: any) =>
        selectedService.samples.includes(artwork.imgSrc)
    );
    const currentArtist = pullDB('user', {}, { id: selectedService.artistId });

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

    <BackButton />
    <ServicePage {selectedService} {artDB} {currentArtist} {openPlaceCommission} />
</div>
