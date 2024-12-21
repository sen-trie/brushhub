<script lang="ts">
    import { pullDB } from './db';
    import Tabs from './Tabs.svelte';
    import ViewProgress from '$lib/components/ViewProgress.svelte';
    import ViewSummary from '$lib/components/ViewSummary.svelte';
    import BackButtonArrow from '$lib/components/BackButtonArrow.svelte';

    import type { ComponentProps } from 'svelte';
    import { navigateTo } from '$lib/util';
    import { page } from '$app/stores';

    let { closeRequest, request, artistView = false }: ComponentProps<any> = $props();

    const currentArtist = pullDB('user', {}, { id: request.artistId });
    const currentCommissioner = pullDB('user', {}, { id: request.customerId });
    const newRequestView = artistView && request.state.value === 'pending';

    // TODO: ARTIST VIEW

    let items = [
        {
            label: 'Progress',
            value: 1,
            component: ViewProgress,
            props: {
                request: request
            }
        },
        {
            label: 'Request Summary',
            value: 2,
            component: ViewSummary,
            props: {
                request: request
            }
        }
    ];
</script>

<div class="fixed inset-0 z-50 overflow-y-auto bg-white">
    <div class="relative p-6">
        <BackButtonArrow closeEdit={closeRequest} buttonText="View Commission Request" />
        <div class="mb-2 ml-2">
            <h1 class="text-2xl font-bold">{request.service.title}</h1>
            <button
                class="text-l text-gray-500"
                onclick={() =>
                    navigateTo(
                        `./profile/${artistView ? currentCommissioner?.username : currentArtist?.username}`,
                        $page.url.pathname
                    )}
            >
                {artistView
                    ? `Requested by: ${currentCommissioner?.displayName}`
                    : `Service by: ${currentArtist?.displayName}`}
            </button>
        </div>

        {#if !newRequestView}
            <Tabs {items} />
        {:else}
            <ViewSummary
                props={{
                    request: request
                }}
            />
            <button>Reject</button>
            <button>Accept</button>
        {/if}
    </div>
</div>
