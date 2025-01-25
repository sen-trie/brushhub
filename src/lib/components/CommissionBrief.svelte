<script lang="ts">
    import { onMount, type ComponentProps } from 'svelte';
    import { calculateCommission, calculateCurrency } from '$lib/util';
    import ImageSamples from './ImageSamples.svelte';

    let {
        selectedService,
        commissionChoice = $bindable(),
        warningMessage
    }: ComponentProps<any> = $props();

    let uploadedImages: string[] = $state([]);
    let imageWarningMessage: string = $state('');
    let uploadedBrief: string = $state('');
    let briefWarningMessage: string = $state('');

    let price = $derived.by((): number => {
        return calculateCommission(selectedService, commissionChoice);
    });

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

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const minDate = tomorrow.toISOString().split('T')[0];

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

    onMount(() => {
        uploadedBrief = commissionChoice.brief;
        uploadedImages = commissionChoice.images;
    });

    $effect(() => {
        // SINCE TEXTBOX IS USING BINDABLE
        // DOUBLE UPDATES WHEN BRIEF CHANGES
        // PROBABLY WONT CAUSE ISSUES
        commissionChoice.brief = uploadedBrief;
        commissionChoice.images = uploadedImages;
    });
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-4 sm:pt-6">
    <div>
        <div class="mb-4">
            <label for="type" class="block text-sm font-medium">Type *</label>
            <select
                id="type"
                class="mt-1 block w-full rounded-md entry shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                bind:value={commissionChoice.selectedTier}
            >
                {#each selectedService.types as type, index}
                    <option class="entry" value={index}>{type.name} ({calculateCurrency(type.price)})</option>
                {/each}
            </select>
        </div>

        <div class="mb-4">
            <label for="extras" class="block text-sm font-medium">Extras</label>
            <div class="mt-2 space-y-2">
                {#each selectedService.extras as extra, index}
                    <div class="flex items-center">
                        <input
                            id={extra.name}
                            type="checkbox"
                            class="h-4 w-4 rounded colour-border text-orange-500 focus:ring-orange-500"
                            bind:checked={commissionChoice.extras[index]}
                        />
                        <label
                            for={extra.name}
                            class="ml-2 text-sm"
                            style="user-select: none;"
                            >{extra.name} (+{extra.type === 'percentage'
                                ? `${extra.price} % of base price`
                                : calculateCurrency(extra.price)}
                            )</label
                        >
                    </div>
                {/each}
            </div>
        </div>

        <div class="mb-4">
            <label for="brief" class="block text-sm font-medium"
                >Brief* ({MAX_BRIEF_LENGTH - uploadedBrief.length} characters left)</label
            >
            <textarea
                id="brief"
                rows="3"
                class="mt-1 block w-full rounded-md entry shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                placeholder="Input your brief idea..."
                bind:value={uploadedBrief}
                oninput={(e) => {
                    const value = (e.target as HTMLTextAreaElement).value;
                    handleBriefInput(value);
                }}
            ></textarea>
            <div class="mt-2 flex items-center">
                <p class="mr-2 text-sm">Or</p>
                <label
                    for="upload-brief"
                    class="cursor-pointer rounded border colour-border px-3 py-1 text-sm 
                            bg-orange-500 text-white hover:bg-orange-600"
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
        </div>

        <div class="mb-4">
            <label for="deadline" class="block text-sm font-medium">Deadline*</label>
            <input
                id="deadline"
                type="date"
                class="mt-1 block w-full rounded-md entry shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                bind:value={commissionChoice.deadline}
                min={minDate}
            />
        </div>

        <p class="hidden sm:visible mt-4 text-lg font-bold text-green-600">Net Total: {calculateCurrency(price)}</p>
    </div>

    <div>
        <h3 class="text-sm font-medium">References</h3>
        <ImageSamples {uploadedImages} {imageWarningMessage} {removeImage} {handleImageUpload} />
    </div>

    {#if warningMessage}
        <p class="sm:-mt-4 text-sm text-red-500">{warningMessage}</p>
    {/if}
    <p class="visible sm:hidden text-lg text-right font-bold text-green-600">Net Total: {calculateCurrency(price)}</p>
</div>
