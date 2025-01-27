<script lang="ts">
    import type { ComponentProps } from 'svelte';
    import type { Artwork } from '$lib/types';
    import CloseButton from '$lib/components/CloseButton.svelte';
    import { pullDB, imageModules, getImage, wrapDefault } from '$lib/db';
    import { navigateTo } from './util';
    import { page } from '$app/state';

    const { artDB, showArtist = true, size = 48, artViewOnly = false }: ComponentProps<any> = $props();
    let selectedArt: Artwork | null = $state(null);
    let selectedArtist = $derived(pullDB('user', {}, { id: selectedArt?.artist }));

    const artworkArray = imageModules('artwork');
    const findArtist = (id: string) => {
        return pullDB('artist', {}, { id: id });
    };

    const navigateToArtist = () => {
        navigateTo(`./profile/${selectedArtist.username}`, page.url.pathname);
    };

    function openPopup(art: Artwork) {
        if (typeof art === 'string') {
            return;
        }
        selectedArt = art;
    }

    function closePopup() {
        selectedArt = null;
    }

    function returnArt(art: string | Record<string, any>) {
        if (typeof art === 'string' && art.startsWith('data:image')) {
            return art;
        } else if (typeof art === 'object' && art !== null && !Array.isArray(art)) {
            if (art.imgSrc && typeof art.imgSrc === 'string' && art.imgSrc.startsWith('data:image')) {
                return art.imgSrc;
            }
        }

        return getImage('artwork', art.imgSrc, artworkArray);
    }

</script>

{#each artDB as art}
    <button
        type="button"
        class="relative w-full overflow-hidden rounded-lg colour-border border-2 bg-white shadow
                {!artViewOnly ? "cursor-pointer" : "cursor-default"}"
        onclick={() => openPopup(art)}
        aria-label="View artwork details"
    >
        <img
            src={returnArt(art)}
            alt="Artwork"
            class="h-{size} w-full object-cover"
        />
        {#if !findArtist(art.artist)?.openCommission && !artViewOnly}
            <span
                class="absolute left-2 top-2 rounded bg-gray-700 px-2 py-1 text-xs text-white"
            >
                Closed
            </span>
        {/if}
    </button>
{/each}


{#if artDB.length === 0}
    <img
        src={wrapDefault('artwork', '')}
        alt="Artwork"
        class="h-{size} w-full object-contain"
    />
{/if}


{#if selectedArt}
    <!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_noninteractive_element_interactions -->
    <div
        class="modal-pop"
        role="dialog"
        aria-modal="true"
        onclick={closePopup}
    >
        <div
            class="relative rounded-lg shadow-lg dark:bg-stone-800 border-2 colour-border flex 
                     w-5/6 sm:w-auto sm:max-w-[90%] p-2 sm:p-6 sm:pr-16"
            role="dialog"
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
            onclick={(e) => e.stopImmediatePropagation()}
        >
            <button
                class="absolute right-2 top-2 w-8 h-8 flex items-center justify-center rounded-full 
                        bg-red-500 text-white hover:bg-red-600 text-lg"
                onclick={closePopup}
                aria-label="Close popup"
            >
                <CloseButton size="20"/>
            </button>
            <div class="flex flex-col sm:flex-row justify-center">
                <img
                    src={returnArt(selectedArt)}
                    alt="Artwork"
                    class="h-64 sm:h-[30rem] sm:max-w-[50vw] w-auto rounded-md object-contain
                           mt-2 sm:mt-0"
                />
                <div class="p-2 sm:p-0 ml-0 sm:ml-6 flex flex-col justify-between sm:max-w-[25vw] ">
                    <div>
                        <h2 class="text-xl font-bold">
                            {selectedArt.title || 'Untitled Artwork'}
                        </h2>
                        <h2 class="text-lg underline">
                            By: {selectedArtist.displayName}
                        </h2>
                        
                        <p>
                            {selectedArt.description}
                        </p>
                        <p class="mt-2 text-sm">
                            {selectedArt.datePosted
                                ? 'Posted: ' + new Date(selectedArt.datePosted).toLocaleDateString()
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
                    </div>
                    <div>
                        {#if showArtist}
                            <button
                                onclick={navigateToArtist}
                                class="mt-4 block rounded-lg bg-orange-500 px-4 py-2 
                                        text-center font-medium text-white"
                            >
                                To @{selectedArtist.username}'s Profile
                            </button>
                        {/if}
                    </div>
                </div>
            </div>
        </div>
    </div>
{/if}

<style></style>
