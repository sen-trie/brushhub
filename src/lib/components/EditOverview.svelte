<script lang="ts">
    import { getSingle, wrapDefault } from '$lib/db';
    import type { ComponentProps } from 'svelte';
    import SearchTags from '$lib/components/SearchTags.svelte';
    import ImageSamples from './ImageSamples.svelte';

    let { props = $bindable() }: ComponentProps<any> = $props();
    let imageWarningMessage: string = $state('');
    let thumbWarningMessage: string = $state('');

    const selectedService = props.selectedService;

    const handleImageUpload = (event: Event, imageLocation: string) => {
        let files = (event.target as HTMLInputElement).files;
        let firstFile = files?.[0];
        if (!files || !firstFile) return;

        if (imageLocation === 'sample' && selectedService.samples.length + files.length > 10) {
            imageWarningMessage = 'You can upload a maximum of 10 images.';
            return;
        }

        if (imageLocation === 'thumbnail') {
            if (!firstFile.type.startsWith('image/')) {
                thumbWarningMessage = 'Only image files (e.g., jpg, png) are allowed.';
                return;
            }
            const fileReader = new FileReader();
            fileReader.onload = () => {
                selectedService.thumbnail = fileReader.result as string;
                thumbWarningMessage = '';
            };
            fileReader.readAsDataURL(firstFile);
        } else {
            for (const file of files) {
                if (!file.type.startsWith('image/')) {
                    imageWarningMessage = 'Only image files (e.g., jpg, png) are allowed.';
                    return;
                }
                const fileReader = new FileReader();
                fileReader.onload = () => {
                    selectedService.samples = [
                        ...selectedService.samples,
                        fileReader.result as string
                    ];
                    imageWarningMessage = '';
                };
                fileReader.readAsDataURL(file);
            }
        }
    };

    const removeImage = (index: number) => {
        selectedService.samples = selectedService.samples.filter((_: any, i: any) => i !== index);
    };
</script>

<h2 class="mb-2 text-lg font-semibold">Overview</h2>
<div class="flex flex-col space-y-4">
    <div>
        <label for="title" class="block text-sm font-medium">Title</label>
        <input
            id="title"
            type="text"
            class="mt-1 block w-full shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm entry"
            bind:value={selectedService.title}
        />
    </div>
    <div>
        <label for="upload-thumbnail" class="block text-sm font-medium mb-2">Service Thumbnail</label>
        <input
            id="upload-thumbnail"
            type="file"
            accept="image/*"
            class="hidden"
            onchange={(e) => handleImageUpload(e, 'thumbnail')}
        />
        <div class="flex flex-col sm:flex-row justify-center items-center">
            <img
                src={wrapDefault('thumbnail', selectedService.thumbnail)}
                alt="thumbnail"
                class="w-full rounded-md object-contain flex-1 h-48"
            />
            <div class="flex flex-1 content-center flex-row 
                        mt-3 sm:mt-0 space-x-4 sm:space-x-0 sm:flex-col sm:space-y-2">
                <label
                    for="upload-thumbnail"
                    class="cursor-pointer rounded bg-orange-500 px-4 py-2 
                          text-sm font-medium text-white hover:bg-orange-600 m-auto"
                >
                    Upload Image
                </label>
                <button
                    class="text-red-500 hover:underline"
                    onclick={() => {
                        selectedService.thumbnail = '';
                        thumbWarningMessage = '';
                    }}
                >
                    Remove
                </button>
            </div>
        </div>
    </div>
    <div>
        <label for="description" class="block text-sm font-medium">Description</label>
        <textarea
            id="description"
            rows="4"
            class="mt-1 block w-full entry shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
            bind:value={selectedService.description}
        ></textarea>
    </div>

    <div class="relative">
        <!-- svelte-ignore a11y_label_has_associated_control -->
        <label class="mb-2 block text-sm font-semibold">Tags</label>
        <SearchTags bind:currentTags={selectedService.tags} />
    </div>

    <div>
        <h3 class="text-sm font-medium ">References</h3>
        <ImageSamples
            uploadedImages={selectedService.samples}
            {imageWarningMessage}
            size={24}
            {removeImage}
            handleImageUpload={(e: InputEvent) => {
                handleImageUpload(e, 'sample');
            }}
        />
    </div>
</div>
