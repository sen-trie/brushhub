<script lang="ts">
    import Tabs from './Tabs.svelte';
    import ViewProgress from '$lib/components/ViewProgress.svelte';
    import ViewSummary from '$lib/components/ViewSummary.svelte';
    import userDB from '$lib/db/user.json';

    import type { ComponentProps } from 'svelte';
    import { navigateTo } from '$lib/util';
    import { page } from '$app/stores';

    let { closeRequest, request, artistView = false }: ComponentProps<any> = $props();

    const currentArtist = userDB.find((artist: any) => artist.id === request.artistId);
    const currentCommissioner = userDB.find((comm: any) => comm.id === request.customerId);
    const newRequestView = artistView && request.state.value === 'pending';

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
        <button
            class="mb-4 flex items-center text-sm font-bold text-orange-500"
            onclick={closeRequest}
            aria-label="Back"
        >
            <i class="fas fa-arrow-left"></i>
            <span>Back</span>
        </button>

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
