<script lang="ts">
    import type { ComponentProps } from 'svelte';

    let { selectedService, commissionChoice = $bindable() }: ComponentProps<any> = $props();

    let uploadedImages: string[] = $state([]);
    let uploadedBrief: string = $state('');
    let imageWarningMessage: string = $state('');
    let briefWarningMessage: string = $state('');

    const MAX_BRIEF_LENGTH = 5000;

    const handleBriefInput = (value: string) => {
        if (value.length > MAX_BRIEF_LENGTH) {
            briefWarningMessage = `Brief cannot exceed ${MAX_BRIEF_LENGTH} characters.`;
            uploadedBrief = value.slice(0, MAX_BRIEF_LENGTH);
        } else {
            uploadedBrief = value;
            briefWarningMessage = '';
        }
    };

    const handleBriefUpload = (event: Event) => {
        const file = (event.target as HTMLInputElement).files?.[0];
        if (!file) return;

        if (file.type !== 'text/plain') {
            briefWarningMessage = 'Only .txt files are allowed for the brief.';
            return;
        }

        const reader = new FileReader();
        reader.onload = () => {
            const content = reader.result as string;
            handleBriefInput(content);
        };
        reader.readAsText(file);
    };

    const handleImageUpload = (event: Event) => {
        const files = (event.target as HTMLInputElement).files;
        if (!files) return;

        if (uploadedImages.length + files.length > 10) {
            imageWarningMessage = 'You can upload a maximum of 10 images.';
            return;
        }

        for (const file of files) {
            if (!file.type.startsWith('image/')) {
                imageWarningMessage = 'Only image files (e.g., jpg, png) are allowed.';
                return;
            }
            const fileReader = new FileReader();
            fileReader.onload = () => {
                uploadedImages = [...uploadedImages, fileReader.result as string];
            };
            fileReader.readAsDataURL(file);
        }
        imageWarningMessage = '';
    };

    const removeImage = (index: number) => {
        uploadedImages = uploadedImages.filter((_, i) => i !== index);
    };

    $effect(() => {
        // SINCE TEXTBOX IS USING BINDABLE
        // DOUBLE UPDATES WHEN BRIEF CHANGES
        // PROBABLY WONT CAUSE ISSUES
        commissionChoice.brief = uploadedBrief;
        commissionChoice.images = uploadedImages;
    });
</script>

<div class="grid grid-cols-2 gap-6 p-6">
    <div>
        <div class="mb-4">
            <label for="type" class="block text-sm font-medium text-gray-700">Type *</label>
            <select
                id="type"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                bind:value={commissionChoice.selectedTier}
            >
                {#each selectedService.types as type, index}
                    <option value={index}>{type.name}</option>
                {/each}
            </select>
        </div>

        <div class="mb-4">
            <label for="extras" class="block text-sm font-medium text-gray-700">Extras</label>
            <div class="mt-2 space-y-2">
                {#each selectedService.extras as extra, index}
                    <div class="flex items-center">
                        <input
                            id={extra.name}
                            type="checkbox"
                            class="h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                            onchange={() => {
                                commissionChoice.extras[index] = !commissionChoice.extras[index];
                            }}
                        />
                        <label for={extra.name} class="ml-2 text-sm text-gray-700"
                            >{extra.name}</label
                        >
                    </div>
                {/each}
            </div>
        </div>

        <div class="mb-4">
            <label for="brief" class="block text-sm font-medium text-gray-700"
                >Brief * ({MAX_BRIEF_LENGTH - uploadedBrief.length} characters left)</label
            >
            <textarea
                id="brief"
                rows="3"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                placeholder="Input your brief idea..."
                bind:value={uploadedBrief}
                oninput={(e) => {
                    const value = (e.target as HTMLTextAreaElement).value;
                    handleBriefInput(value);
                }}
            ></textarea>
            <div class="mt-2 flex items-center">
                <span class="mr-2 text-sm text-gray-500">Or</span>
                <label
                    for="upload-brief"
                    class="cursor-pointer rounded border border-gray-300 px-3 py-1 text-sm text-orange-500 hover:bg-orange-50"
                >
                    Upload your brief
                </label>
                <input
                    id="upload-brief"
                    type="file"
                    accept=".txt"
                    class="hidden"
                    onchange={handleBriefUpload}
                />
            </div>
            {#if briefWarningMessage}
                <p class="mt-2 text-sm text-red-500">{briefWarningMessage}</p>
            {/if}
        </div>

        <div class="mb-4">
            <label for="deadline" class="block text-sm font-medium text-gray-700">Deadline *</label>
            <input
                id="deadline"
                type="date"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
            />
        </div>

        <p class="mt-4 text-lg font-bold text-green-600">SGD 500</p>
    </div>

    <div>
        <h3 class="text-sm font-medium text-gray-700">References</h3>
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
                Upload images
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
    </div>
</div>
