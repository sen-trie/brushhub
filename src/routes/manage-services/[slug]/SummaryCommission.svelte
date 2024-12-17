<script lang="ts">
    import type { ComponentProps } from 'svelte';
    import ServicePage from '$lib/ServicePage.svelte';

    const { props }: ComponentProps<any> = $props();
    const selectedService = props.selectedService;
    const currentArtist = props.currentArtist;
    console.log(props.currentArtist);

</script>

<div>
    <ServicePage {selectedService} {currentArtist} artDB={selectedService.samples} viewOnly={true}/>
</div> 