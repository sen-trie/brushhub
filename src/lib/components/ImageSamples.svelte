<script lang="ts">
    import { getSingle } from '$lib/db';
    let {
        uploadedImages,
        imageWarningMessage,
        removeImage,
        handleImageUpload,
        size = 16
    } = $props();
</script>

<div
    class="mt-2 flex h-48 w-full flex-wrap items-center justify-center gap-2 rounded-md
            border border-dashed border-gray-300 bg-gray-50 p-2"
>
    {#if uploadedImages.length === 0}
        <span class="text-sm text-gray-500">No images uploaded</span>
    {/if}
    {#each uploadedImages as image, index}
        <div class="relative">
            <img
                src={getSingle('artwork', image)}
                alt="Uploaded reference"
                class="h-{size} w-{size} rounded-md border object-cover"
            />
            <button
                class="absolute right-0 top-0 flex h-{size / 4} w-{size / 4}
                items-center justify-center rounded-full bg-red-500 text-xs text-white"
                onclick={() => removeImage(index)}
            >
                ×
            </button>
        </div>
    {/each}
</div>
{#if imageWarningMessage}
    <p class="mt-2 text-sm text-red-500">{imageWarningMessage}</p>
{/if}
<div class="mt-4">
    <label
        for="upload-images"
        class="cursor-pointer rounded px-4 py-2 text-sm font-medium bg-orange-500 text-white hover:bg-orange-600"
    >
        Upload Images
    </label>
    <input
        id="upload-images"
        type="file"
        accept="image/*"
        multiple
        class="hidden"
        onchange={handleImageUpload}
    />
</div>
