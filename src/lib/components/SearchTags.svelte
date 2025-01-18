<script lang="ts">
    import type { ComponentProps } from 'svelte';
    import { pullDB } from '$lib/db';

    let { currentTags = $bindable(), slim = false }: ComponentProps<any> = $props();

    let searchQuery = $state('');
    let showSuggestions = $state(false);
    let filteredTags = $derived(
        pullDB(
            'tags',
            {
                name: (tag) =>
                    tag.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
                    !currentTags.includes(tag.name.toLowerCase())
            },
            {}
        ).sort((a: any, b: any) => b.count - a.count)
    );

    let activeIndex = $state(0);
    let inputRef: HTMLInputElement | null = null;

    $effect(() => {
        if (searchQuery.length > 0) {
            showSuggestions = true;
        } else {
            showSuggestions = false;
        }
    });

    function resetSuggestions(): void {
        searchQuery = '';
        showSuggestions = false;
        activeIndex = 0;
    }

    function handleKeyDown(event: KeyboardEvent): void {
        if (showSuggestions && filteredTags.length > 0) {
            if (event.key === 'ArrowDown') {
                event.preventDefault();
                activeIndex = (activeIndex + 1) % filteredTags.length;
            } else if (event.key === 'ArrowUp') {
                event.preventDefault();
                activeIndex = (activeIndex - 1 + filteredTags.length) % filteredTags.length;
            } else if (event.key === 'Enter') {
                currentTags.push(filteredTags[activeIndex].name);
                resetSuggestions();
            }
        }
    }

    function handleClickOutside(event: MouseEvent) {
        if (inputRef && !inputRef.contains(event.target as Node)) {
            showSuggestions = false;
        }
    }
</script>

<div class="relative">
    <div class="{slim ? "" : "mt-1 block w-full rounded-md border border-gray-300 bg-white p-2 shadow-sm"}">
        <div class="{currentTags.length > 0 ? "mb-2" : ""} flex flex-wrap gap-2">
            {#each currentTags as tag, index}
                <div
                    class="items-center space-x-1 rounded bg-orange-100 px-2 py-1 text-orange-500"
                    onclick={() => currentTags.splice(index, 1)}
                >
                    <span>{tag}</span>
                    <button class="text-xs font-bold">x</button>
                </div>
            {/each}
        </div>
        <input
            type="text"
            bind:value={searchQuery}
            bind:this={inputRef}
            onkeydown={handleKeyDown}
            placeholder="Search for tags..."
            class="w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
        />
    </div>

    {#if showSuggestions && filteredTags.length > 0}
        <ul
            class="left-0 z-30 mt-1 w-full rounded-lg border border-gray-300 bg-white shadow-lg"
        >
            {#each filteredTags.slice(0, 6) as tag, index}
                <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
                <li
                    class="flex cursor-pointer items-center justify-between px-4 py-2 text-gray-700 hover:bg-orange-100 {index ===
                    activeIndex
                        ? 'bg-orange-100'
                        : ''}"
                    onclick={() => {
                        currentTags.push(tag.name);
                        resetSuggestions();
                    }}
                >
                    <span>{tag.name}</span>
                    <span class="text-sm text-gray-500">({tag.count} Mentions)</span>
                </li>
            {/each}
        </ul>
    {/if}
</div>
