<script lang="ts">
    import type { PageData } from './$types';
    import userDB from '$lib/db/user.json';
    import artworkDB from '$lib/db/artwork.json';
    import BackButton from '$lib/components/BackButton.svelte';
    import PlaceCommission from '$lib/PlaceCommission.svelte';
    import ServicePage from '$lib/ServicePage.svelte';
    import Service from '../../search/[slug]/Service.svelte';

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
        <ServicePage {selectedService} {artDB} {currentArtist} {openPlaceCommission} />
    </div> 
</div>
