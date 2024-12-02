<script lang="ts">
    import type { ComponentProps } from 'svelte';
    import ImageSamples from './ImageSamples.svelte';

    let { props }: ComponentProps<any> = $props();
    let uploadedImages: string[] = $state([]);
    let imageWarningMessage: string = $state('');

    const selectedService = props.selectedService;

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

    $inspect(selectedService);
</script>

<div>
    <h2 class="text-lg font-semibold">Overview</h2>
    <div>
        <label for="title" class="block text-sm font-medium">Title</label>
        <input
            id="title"
            type="text"
            class="mt-1 block w-full border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
            bind:value={selectedService.title}
        />
    </div>
    <div class="mt-4">
        <label for="description" class="block text-sm font-medium">Description</label>
        <textarea
            id="description"
            rows="4"
            class="mt-1 block w-full border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
            bind:value={selectedService.description}
        ></textarea>
    </div>

    <div>
        <h3 class="text-sm font-medium text-gray-700">References</h3>
        <ImageSamples {uploadedImages} {imageWarningMessage} {removeImage} {handleImageUpload} />
    </div>
</div>
