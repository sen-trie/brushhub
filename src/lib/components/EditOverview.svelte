<script lang="ts">
    import type { ComponentProps } from 'svelte';

    let { props }: ComponentProps<any> = $props();

    const selectedService = props.selectedService;

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
</div>
