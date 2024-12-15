<script lang="ts">
    import type { ComponentProps } from 'svelte';
    import { filterArray, handleImageUpload, getUser } from '$lib/util';
    import Browse from '$lib/Browse.svelte';
    import artworkDB from '$lib/db/artwork.json';
    import services from '$lib/db/services.json';
    import TagWorks from './TagWorks.svelte';

    let { props }: ComponentProps<any> = $props();
    const artist = props[0];
    const currentArtist = getUser() === artist.id

    const artDB = $derived.by(filterArray(artworkDB, (art) => art.artist === artist.id));
    const serviceDB = services.filter(
        (service) => service.artistId === artist.id && service.state === 'published'
    );

    let uploadStep = $state(0);
    let uploadedImages: string[] = $state([]);
    let imageWarningMessage: string = $state('');

    const removeImage = (index: number) => {
        uploadedImages = uploadedImages.filter((_, i) => i !== index);
    };

    async function handleFileChange(event: Event) {
        [uploadedImages, imageWarningMessage] = await handleImageUpload(event, uploadedImages, 8);
    }

    function resetUpload() {
        uploadedImages = [];
        imageWarningMessage = '';
        uploadStep = 0;
    }

    $effect(() => {
        if (uploadStep !== 0) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    });
</script>

<div>
    {#if currentArtist}
        <button
            class="my-services-button mb-4 rounded bg-orange-500 px-4 py-2 text-white hover:bg-orange-600"
            onclick={() => (uploadStep = 1)}
        >
            Upload New Artworks
        </button>
    {/if}
    <Browse {artDB} showArtist={false} />
</div>

{#if uploadStep === 1}
<div class="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
    <div class="w-full max-w-2xl h-auto rounded-lg bg-white p-6 shadow-lg">
        <h2 class="mb-6 text-2xl font-bold">Upload Images</h2>
        <div class="mb-6 border-b border-orange-500">
            <p class="mt-4 text-center font-semibold text-orange-500">Browse from Device</p>
        </div>

        <!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions -->
        <div
            class="mb-6 p-4 grid min-h-64 cursor-pointer grid-cols-4 gap-6 border-2 border-dashed border-gray-300 rounded-lg hover:border-orange-500"
            onclick={() => document.getElementById('upload-images')?.click()}
        >
            {#if uploadedImages.length === 0}
                <span class="col-span-4 text-center text-sm text-gray-500 mt-24">
                    No images uploaded
                </span>
            {/if}
            {#each uploadedImages as image, index}
                <div class="relative group">
                    <img
                        src={image}
                        alt="Uploaded reference"
                        class="h-32 w-32 rounded-md border object-cover"
                    />
                    <button
                        class="absolute right-0 top-0 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white hover:bg-red-600"
                        onclick={(event) => {
                            event.stopPropagation();
                            removeImage(index);
                        }}
                    >
                        ×
                    </button>
                </div>
            {/each}
        </div>

        {#if imageWarningMessage}
            <p class="mt-2 text-sm text-red-500">{imageWarningMessage}</p>
        {/if}

        <input
            id="upload-images"
            type="file"
            accept="image/*"
            multiple
            class="hidden"
            onchange={handleFileChange}
        />

        <div class="flex justify-end space-x-4">
            <button
                class="rounded bg-red-500 px-6 py-3 text-white hover:bg-red-600"
                onclick={resetUpload}
            >
                Cancel
            </button>
            <button
                class={`rounded px-6 py-3 text-white ${
                    uploadedImages.length > 0
                        ? 'bg-green-500 hover:bg-green-600'
                        : 'bg-gray-400 cursor-not-allowed'
                }`}
                disabled={uploadedImages.length === 0}
                onclick={() => uploadStep = 2}
            >
                Continue
            </button>
        </div>
    </div>
</div>
{:else if uploadStep === 2}
    <TagWorks 
        {uploadedImages} 
        {serviceDB} 
        backStep={() => uploadStep = 1}
        sumbitTag={(tags: any) => {
            // TODO
            console.log(tags);
            resetUpload();
        }}
    />
{/if}