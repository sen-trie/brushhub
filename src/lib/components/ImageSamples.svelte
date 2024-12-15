<script lang="ts">
    let { uploadedImages, imageWarningMessage, removeImage, handleImageUpload } = $props();
</script>

<div
    class="mt-2 flex h-48 w-full flex-wrap items-center justify-center gap-2 rounded-md border border-dashed border-gray-300 bg-gray-50 p-2"
>
    {#if uploadedImages.length === 0}
        <span class="text-sm text-gray-500">No images uploaded</span>
    {/if}
    {#each uploadedImages as image, index}
        <div class="relative">
            <img
                src={image}
                alt="Uploaded reference"
                class="h-16 w-16 rounded-md border object-cover"
            />
            <button
                class="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white"
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
        class="cursor-pointer rounded bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600"
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
