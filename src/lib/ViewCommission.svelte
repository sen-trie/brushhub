<script lang="ts">
    import { pullDB } from './db';
    import Tabs from './Tabs.svelte';
    import ViewProgress from '$lib/components/ViewProgress.svelte';
    import ViewSummary from '$lib/components/ViewSummary.svelte';
    import BackButtonArrow from '$lib/components/BackButtonArrow.svelte';

    import type { ComponentProps } from 'svelte';
    import { navigateTo } from '$lib/util';
    import { page } from '$app/stores';

    let { closeRequest, request, artistView = false, editEntry = () => {} }: ComponentProps<any> = $props();

    const currentArtist = pullDB('user', {}, { id: request.artistId });
    const currentCommissioner = pullDB('user', {}, { id: request.customerId });
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
        <div
            class="mb-4 flex w-full justify-between border-b-2 p-4 px-2
            pt-0 sm:px-4 md:px-6 lg:px-8"
        >
            <BackButtonArrow closeEdit={closeRequest} buttonText="View Commission Request" />
        </div>
        <div class="px-2 sm:px-6 md:px-10 lg:px-16">
            <div class="card-container">
                <div class="flex mb-4 justify-between items-center">
                    <div class="flex flex-col items-start">
                        <h1 class="page-title">{request.service.title}</h1>
                        <button
                            class="text-l text-gray-500 underline"
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
                    <div>
                        <p class="text-lg text-gray-500 
                                {request.state.value === 'active' ? 'text-green-500' : ''} 
                                {request.state.value === 'rejected' ? 'text-red-500' : ''}
                                {request.state.value === 'pending' ? 'text-yellow-500' : ''}
                        mr-4">
                            State:
                            {request.state.value === 'pending'
                                ? 'Pending'
                                : request.state.value === 'active'
                                ? 'In Progress'
                                : request.state.value === 'rejected'
                                ? 'Rejected'
                                : request.state.value === 'completed'
                                ? 'Completed'
                                : 'Cancelled'}
                        </p>
                    </div>
                </div>
                <div class="px-4">
                    {#if !newRequestView}
                        <Tabs {items} />
                    {:else}
                        <ViewSummary
                            props={{
                                request: request
                            }}
                        />
                        <div class="flex w-full justify-end space-x-2">
                            <button class="discard-button"
                                onclick={() => {editEntry(false, request); closeRequest()}}
                            >Reject</button>
                            <button class="save-button"
                                onclick={() => {editEntry(true, request); closeRequest()}}
                            >Accept</button>
                        </div>
                    {/if}
                </div>
            </div>
        </div>
    </div>
</div>
