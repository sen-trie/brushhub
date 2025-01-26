<script lang="ts">
    import SearchTags from '$lib/components/SearchTags.svelte';
    import type { ComponentProps } from 'svelte';
    let { uploadedImages, serviceDB, backStep, submitTag }: ComponentProps<any> = $props();

    const tagDefaults = { title: '', description: '', tags: [], service: '' };

    let currentIndex = $state(0);
    let imageTags = $state(uploadedImages.map((src: string) => ({ ...tagDefaults, imgSrc: src })));

    const isTagged = (index: number): string => {
        const image = imageTags[index];
        if (image.title.trim() === '') {
            return 'Missing Title';
        } else if (image.description.trim() === '') {
            return 'Missing Description';
        } else if (image.tags.length === 0) {
            return 'Missing Tags';
        }
        return '';
    };
</script>

<div class="modal-pop">
    <div class="flex flex-col h-[90vh] sm:h-[70vh] w-full max-w-4xl rounded-lg bg-white p-6 shadow-lg">
        <h2 class="page-title mb-4">Tag Artworks</h2>
        <div class="flex flex-col sm:flex-row w-full grow overflow-y-auto sm:gap-2">
            <div class="h-1/2 sm:h-full items-center sm:w-1/3 overflow-auto sm:border-r border-gray-200 sm:pr-4
                        flex flex-row sm:flex-col space-x-2">
                {#each uploadedImages as image, index}
                    <div
                        class="relative mb-4 cursor-pointer rounded-lg border p-2 
                                hover:border-orange-500 min-w-32 h-36 sm:w-auto sm:h-auto
                        {currentIndex === index
                            ? 'border-2 border-orange-500'
                            : ''}"
                        onclick={() => (currentIndex = index)}
                    >
                        <img
                            src={image}
                            alt="Uploaded artwork"
                            class="h-32 w-full rounded-md object-cover"
                        />
                        {#if isTagged(index) !== ''}
                            <span
                                class="absolute bottom-2 right-2 rounded bg-red-500 px-2 py-1 text-xs text-white"
                            >
                                {isTagged(index)}
                            </span>
                        {/if}
                    </div>
                {/each}
            </div>

            <hr class="visible sm:hidden mb-4" />

            <div class="h-full sm:w-2/3 overflow-y-auto p-4 pt-2 card-container">
                <div class="flex flex-col space-y-4">
                    <div>
                        <label class="mb-2 block text-sm font-semibold">Title</label>
                        <input
                            type="text"
                            bind:value={imageTags[currentIndex].title}
                            class="w-full rounded-md entry shadow-sm focus:border-orange-500 focus:ring-orange-500"
                            placeholder="Enter title..."
                        />
                    </div>

                    <div>
                        <!-- svelte-ignore a11y_label_has_associated_control -->
                        <label class="mb-2 block text-sm font-semibold">Description</label>
                        <textarea
                            rows="3"
                            bind:value={imageTags[currentIndex].description}
                            class="w-full rounded-md entry shadow-sm focus:border-orange-500 focus:ring-orange-500"
                            placeholder="Enter description..."
                        ></textarea>
                    </div>

                    <div>
                        <!-- svelte-ignore a11y_label_has_associated_control -->
                        <label class="mb-2 block text-sm font-semibold">Tags</label>
                        <SearchTags bind:currentTags={imageTags[currentIndex].tags} />
                    </div>

                    <div>
                        <!-- svelte-ignore a11y_label_has_associated_control -->
                        <label class="mb-2 block text-sm font-semibold">Add to Service</label>
                        {#if serviceDB.length > 0}
                            <select
                                bind:value={imageTags[currentIndex].service}
                                class="w-full rounded-md entry shadow-sm focus:border-orange-500 focus:ring-orange-500"
                            >
                                <option value="" disabled>Select a service</option>
                                {#each serviceDB as service}
                                    <option value={service.id}>{service.title}</option>
                                {/each}
                            </select>
                        {:else}
                            <p>No services available</p>
                        {/if}
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-4 flex w-full justify-end space-x-4">
            <button class="discard-button" onclick={backStep}> Discard </button>
            <button
                class={`save-button ${
                    uploadedImages.length > 0
                        ? 'bg-green-500 hover:bg-green-600'
                        : 'cursor-not-allowed bg-gray-400'
                }`}
                disabled={uploadedImages.length === 0}
                onclick={() => submitTag(imageTags)}
            >
                Continue
            </button>
        </div>
    </div>
</div>
