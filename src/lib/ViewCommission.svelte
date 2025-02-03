<script lang="ts">
    import { pullDB } from './db';
    import Tabs from './Tabs.svelte';
    import ViewProgress from '$lib/components/ViewProgress.svelte';
    import ViewSummary from '$lib/components/ViewSummary.svelte';
    import BackButtonArrow from '$lib/components/BackButtonArrow.svelte';

    import type { ComponentProps } from 'svelte';

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

<div class="fixed inset-0 z-50 overflow-y-auto min-h-full">
    <div class="h-full relative !bg-gray-100 dark:!bg-stone-900">
        <div
            class="mb-4 flex w-full justify-between border-b-2 
            pt-4 pb-2 colour-border px-6 sm:px-6 md:px-8 lg:px-10"
        >
            <BackButtonArrow closeEdit={closeRequest} buttonText="View Commission Request" />
        </div>
        <div class="px-2 sm:px-6 md:px-10 lg:px-16 !bg-gray-100 dark:!bg-stone-900 pb-6">
            <div class="card-container">
                <div class="flex mb-4 justify-between items-center">
                    <div class="flex flex-col items-start">
                        <h1 class="page-title">{request.service.title}</h1>
                        <p
                            class="text-l underline"
                        >
                            {artistView
                                ? `Requested by: ${currentCommissioner?.displayName}`
                                : `Service by: ${currentArtist?.displayName}`}
                        </p>
                    </div>
                    <div>
                        <p class="text-lg text-center
                                {request.state.value === 'active' ? '!green-text' : ''} 
                                {request.state.value === 'rejected' ? '!text-red-500' : ''}
                                {request.state.value === 'pending' ? '!text-yellow-500' : ''}
                        mr-4">
                            State:
                            {request.state.value === 'pending'
                                ? 'Pending'
                                : request.state.value === 'active'
                                ? 'In Progress'
                                : request.state.value === 'rejected'
                                ? 'Rejected'
                                : request.state.value === 'finished'
                                ? 'Completed'
                                : 'Cancelled'}
                        </p>
                    </div>
                </div>
                <div class="sm:px-4">
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
