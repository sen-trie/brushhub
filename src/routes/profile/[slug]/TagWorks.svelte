<script lang="ts">
    import SearchTags from '$lib/components/SearchTags.svelte';
    import type { ComponentProps } from 'svelte';
    let { uploadedImages, serviceDB, backStep, sumbitTag }: ComponentProps<any> = $props();

    const tagDefaults = { title: '', description: '', tags: [], service: '' };

    let currentIndex = $state(0);
    let imageTags = $state(uploadedImages.map(() => ({ ...tagDefaults })));

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

    const handleTagUpdate = (index: number, field: string, value: any) => {
        uploadedImages = uploadedImages.map((image: any, i: number) =>
            i === index ? { ...image, [field]: value } : image
        );
    };

    const addTag = (index: number, tag: string) => {
        if (tag.trim() && !uploadedImages[index].tags.includes(tag.trim())) {
            handleTagUpdate(index, 'tags', [...uploadedImages[index].tags, tag.trim()]);
        }
    };

    const removeTag = (index: number, tagIndex: number) => {
        const updatedTags = uploadedImages[index].tags.filter((_: any, i: number) => i !== tagIndex);
        handleTagUpdate(index, 'tags', updatedTags);
    };
</script>


<div class="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
    <div class="w-full max-w-4xl h-[70vh] rounded-lg bg-white p-6 shadow-lg flex flex-col">
        <h2 class="text-2xl font-bold mb-4">Tag Artworks</h2>
        <div class="w-full flex grow overflow-y-auto ">
            <div class="w-1/3 h-full overflow-y-auto pr-4 border-r border-gray-200">
                {#each uploadedImages as image, index}
                    <div
                        class="relative mb-4 cursor-pointer rounded-lg border p-2 hover:border-orange-500 {currentIndex === index ? 'border-orange-500 border-2' : ''}"
                        onclick={() => (currentIndex = index)}
                    >
                        <img
                            src={image}
                            alt="Uploaded artwork"
                            class="w-full h-32 object-cover rounded-md"
                        />
                        {#if isTagged(index) !== ''}
                            <span class="absolute bottom-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                                {isTagged(index)}
                            </span>
                        {/if}
                    </div>
                {/each}
            </div>
    
            <div class="w-2/3 h-full overflow-y-auto  pl-6">
                <div>
                    <div class="mb-4">
                        <label class="block text-sm font-semibold mb-2">Title</label>
                        <input
                            type="text"
                            bind:value={imageTags[currentIndex].title}
                            class="w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                            placeholder="Enter title..."
                        />
                    </div>
    
                    <div class="mb-4">
                        <!-- svelte-ignore a11y_label_has_associated_control -->
                        <label class="block text-sm font-semibold mb-2">Description</label>
                        <textarea
                            rows="3"
                            bind:value={imageTags[currentIndex].description}
                            class="w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                            placeholder="Enter description..."
                        ></textarea>
                    </div>
    
                    <div class="mb-4">
                        <!-- svelte-ignore a11y_label_has_associated_control -->
                        <label class="block text-sm font-semibold mb-2">Tags</label>
                        <SearchTags bind:currentTags={imageTags[currentIndex].tags}/>
                    </div>
    
                    <div class="mb-4">
                        <!-- svelte-ignore a11y_label_has_associated_control -->
                        <label class="block text-sm font-semibold mb-2">Add to Service</label>
                        {#if serviceDB.length > 0}
                            <select
                                bind:value={imageTags[currentIndex].service}
                                class="w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
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
        <div class="w-full flex justify-end space-x-4">
            <button
                class="rounded bg-red-500 px-6 py-3 text-white hover:bg-red-600"
                onclick={backStep}
            >
                Back
            </button>
            <button
                class={`rounded px-6 py-3 text-white ${
                    uploadedImages.length > 0
                        ? 'bg-green-500 hover:bg-green-600'
                        : 'bg-gray-400 cursor-not-allowed'
                }`}
                disabled={uploadedImages.length === 0}
                onclick={() => sumbitTag(imageTags)}
            >
                Continue
            </button>
        </div>
    </div>
</div>