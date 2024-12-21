<script lang="ts">
    import type { ComponentProps } from 'svelte';
    import type { Artwork } from '$lib/types';
    import { pullDB, imageModules, getImage } from '$lib/db';
    import { navigateTo } from './util';
    import { page } from '$app/stores';

    let { artDB, showArtist = true }: ComponentProps<any> = $props();
    let selectedArt: Artwork | null = $state(null);

    const artworkArray = imageModules('artwork');
    const findArtist = (id: string) => {
        return pullDB('artist', {}, { id: id });
    };

    const navigateToArtist = () => {
        const artist = pullDB('user', {}, { id: selectedArt?.artist });
        navigateTo(`./profile/${artist.username}`, $page.url.pathname);
    };

    function openPopup(art: Artwork) {
        selectedArt = art;
    }

    function closePopup() {
        selectedArt = null;
    }
</script>

<div class="grid grid-cols-4 gap-4">
    {#each artDB as art}
        <button
            type="button"
            class="relative w-full cursor-pointer overflow-hidden rounded-lg border bg-white shadow"
            onclick={() => openPopup(art)}
            aria-label="View artwork details"
        >
            <img
                src={getImage('artwork', art.imgSrc, artworkArray)}
                alt="Artwork"
                class="h-48 w-full object-cover"
            />
            <div
                class="absolute right-2 top-2 cursor-default rounded-full bg-red-500 p-1 text-white"
            >
                <i class="fas fa-times text-xs"></i>
            </div>
            {#if !findArtist(art.artist)?.openCommission}
                <span
                    class="absolute left-2 top-2 rounded bg-gray-700 px-2 py-1 text-xs text-white"
                >
                    Closed
                </span>
            {/if}
        </button>
    {/each}
</div>
{#if selectedArt}
    <!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_noninteractive_element_interactions -->
    <div
        class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        role="dialog"
        aria-modal="true"
        onclick={closePopup}
    >
        <div
            class="relative w-2/3 rounded-lg bg-white p-6 shadow-lg"
            role="dialog"
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
            onclick={(e) => e.stopImmediatePropagation()}
        >
            <button
                class="absolute right-2 top-2 rounded-full bg-red-500 p-2 text-white"
                onclick={closePopup}
                aria-label="Close popup"
            >
                <i class="fas fa-times"></i>
            </button>
            <div class="flex">
                <img
                    src={getImage('artwork', selectedArt.imgSrc, artworkArray)}
                    alt="Artwork"
                    class="h-64 w-64 rounded-md object-cover"
                />
                <div class="ml-6">
                    <h2 class="text-2xl font-bold">
                        {selectedArt.title || 'Untitled Artwork'}
                    </h2>
                    <p class="text-gray-600">
                        {selectedArt.description || 'No description available.'}
                    </p>
                    <p class="mt-2 text-sm text-gray-500">
                        {selectedArt.datePosted
                            ? 'Posted on: ' + new Date(selectedArt.datePosted).toLocaleDateString()
                            : ''}
                    </p>
                    <div class="mt-4 flex flex-wrap gap-2">
                        {#each selectedArt.tags as tag}
                            <span
                                class="rounded bg-orange-100 px-2 py-1 text-xs font-medium text-orange-600"
                            >
                                #{tag}
                            </span>
                        {/each}
                    </div>
                    {#if showArtist}
                        <button
                            onclick={navigateToArtist}
                            class="mt-4 block rounded-lg bg-orange-500 px-4 py-2 text-center font-medium text-white"
                        >
                            To Artist Profile
                        </button>
                    {/if}
                </div>
            </div>
        </div>
    </div>
{/if}

<style>
    .grid div .fa-times {
        pointer-events: none;
    }
</style>
