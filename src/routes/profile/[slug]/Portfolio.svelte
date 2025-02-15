<script lang="ts">
    import { pullDB } from '$lib/db';
    import type { ComponentProps } from 'svelte';
    import { handleImageUpload, getUser } from '$lib/util';
    import CloseButton from '$lib/components/CloseButton.svelte';
    import Browse from '$lib/Browse.svelte';
    import TagWorks from './TagWorks.svelte';

    let { props }: ComponentProps<any> = $props();
    let additionalDB: any[] = $state([]);
    const artist = props[0];
    const currentArtist = getUser().id === artist.id;

    const artDB = $derived(additionalDB.concat(pullDB('artwork', { artist: artist.id })));
    const serviceDB = pullDB('services', { artistId: artist.id, state: 'published' });

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

    // TODO ADD EDIT IMAGE BUTTONS
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
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        <Browse {artDB} showArtist={false} shuffle={true}/>
    </div>
</div>

{#if uploadStep === 1}
    <div class="modal-pop">
        <div class="max-h-[75vh] sm:h-auto w-full max-w-2xl rounded-lg bg-white p-6 shadow-lg">
            <h2 class="mb-6 text-2xl font-bold">Upload Images</h2>
            <div class="mb-6 border-b border-orange-500">
                <p class="mt-4 text-center font-semibold text-orange-500">Browse from Device</p>
            </div>

            <!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions -->
            <div
                class="mb-4 sm:mb-6 grid min-h-64 cursor-pointer grid-cols-2 sm:grid-cols-4 gap-6 
                        rounded-lg border-2 border-dashed colour-border p-4 hover:border-orange-500
                        max-h-[40vh] overflow-y-auto"
                onclick={() => document.getElementById('upload-images')?.click()}
            >
                {#if uploadedImages.length === 0}
                    <p class="col-span-4 mt-24 text-center text-sm ">
                        No images uploaded
                    </p>
                {/if}
                {#each uploadedImages as image, index}
                    <div class="group relative">
                        <img
                            src={image}
                            alt="Uploaded reference"
                            class="h-32 w-full rounded-md border object-cover"
                        />
                        <button
                            class="absolute right-0 top-0 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white hover:bg-red-600"
                            onclick={(event) => {
                                event.stopPropagation();
                                removeImage(index);
                            }}
                        >
                            <CloseButton size="16"/>
                        </button>
                    </div>
                {/each}
            </div>

            {#if imageWarningMessage}
                <p class="mb-4 sm:mb-0 -mt-2 sm:mt-2 text-sm text-red-500">{imageWarningMessage}</p>
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
                            : 'cursor-not-allowed bg-gray-400'
                    }`}
                    disabled={uploadedImages.length === 0}
                    onclick={() => (uploadStep = 2)}
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
        backStep={() => (uploadStep = 1)}
        submitTag={(tags: any) => {
            const now = new Date();
            const currentTimeISO = now.toISOString();
            tags.map((item: any) => {
                item.datePosted = currentTimeISO;
                item.artist = artist.id;
                return item;
            });

            additionalDB = [...tags, ...additionalDB];
            resetUpload();
        }}
    />
{/if}
