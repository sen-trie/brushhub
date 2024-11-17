<script lang="ts">
    import type { ComponentProps } from 'svelte';
    import type { Artwork } from '$lib/types.ts';
    import userDB from '$lib/db/user.json';
    import artistDB from '$lib/db/artist.json';
    import { stopPropagation } from './util';
    let { artDB }: ComponentProps<any> = $props();

    const images: any = import.meta.glob(['$lib/assets/artwork/**'], {
        eager: true,
        query: '?url',
        import: 'default'
    });

    let selectedArt: Artwork | null = $state(null);
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
    class="relative overflow-hidden rounded-lg border bg-white shadow cursor-pointer w-full"
    onclick={() => openPopup(art)}
    aria-label="View artwork details"
>
    <img
        src={images['/src/lib/assets/artwork/' + art.imgSrc]}
        alt="Artwork"
        class="h-48 w-full object-cover"
    />
    <div
        class="absolute right-2 top-2 cursor-default rounded-full bg-red-500 p-1 text-white"
    >
        <i class="fas fa-times text-xs"></i>
    </div>
    {#if artistDB.find((artist) => artist.id === art.artist)?.openCommission === false}
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
            class="w-2/3 bg-white rounded-lg shadow-lg p-6 relative"
            role="dialog"
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
            onclick={(e) => stopPropagation(e)}
        >
            <button
                class="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2"
                onclick={closePopup}
                aria-label="Close popup"
            >
                <i class="fas fa-times"></i>
            </button>
            <div class="flex">
                <img
                    src={images['/src/lib/assets/artwork/' + selectedArt.imgSrc]}
                    alt="Artwork"
                    class="h-64 w-64 object-cover rounded-md"
                />
                <div class="ml-6">
                    <h2 class="text-2xl font-bold">
                        {selectedArt.title || "Untitled Artwork"}
                    </h2>
                    <p class="text-gray-600">{selectedArt.description || "No description available."}</p>
                    <p class="text-sm text-gray-500 mt-2">
                        {selectedArt.datePosted 
                            ? "Posted on: " + new Date(selectedArt.datePosted).toLocaleDateString() 
                            : ""}
                    </p>
                    <div class="flex flex-wrap mt-4 gap-2">
                        {#each selectedArt.tags as tag}
                            <span
                                class="bg-orange-100 text-orange-600 text-xs font-medium px-2 py-1 rounded"
                            >
                                #{tag}
                            </span>
                        {/each}
                    </div>
                    <a
                        href="./profile/{userDB.find((artist) => artist.id === selectedArt?.artist)?.username}"
                        class="block mt-4 px-4 py-2 text-center bg-orange-500 text-white rounded-lg font-medium"
                    >
                        TO ARTIST PROFILE
                    </a>
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
