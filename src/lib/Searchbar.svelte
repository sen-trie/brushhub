<script lang="ts">
    import tagsDB from '$lib/db/tags.json';
    import { navigateTo } from './util';
    import { page } from '$app/stores';

    const { slug } = $page.params;

    let searchQuery = $state(slug ?? '');
    let showSuggestions = $state(false);
    let filteredTags: { name: string; count: number }[] = $state([]);
    let activeIndex = $state(0);

    function updateSuggestions() {
        activeIndex = 0;
        filteredTags = tagsDB.filter((tag) =>
            tag.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        showSuggestions = filteredTags.length > 0;
    }

    function selectTag(tagName: string) {
        navigateTo(`./search/${tagName}`);
        searchQuery = tagName;
        showSuggestions = false;
    }

    function handleKeyDown(event: KeyboardEvent) {
        if (showSuggestions && filteredTags.length > 0) {
            if (event.key === 'ArrowDown') {
                event.preventDefault();
                activeIndex = (activeIndex + 1) % filteredTags.length;
            } else if (event.key === 'ArrowUp') {
                event.preventDefault();
                activeIndex = (activeIndex - 1 + filteredTags.length) % filteredTags.length;
            } else if (event.key === 'Enter') {
                selectTag(filteredTags[activeIndex].name);
            }
        }
    }
</script>

<div class="relative mx-auto w-full max-w-lg">
    <input
        type="text"
        bind:value={searchQuery}
        oninput={updateSuggestions}
        onkeydown={handleKeyDown}
        placeholder="Search for tags..."
        class="w-full rounded-full border border-gray-300 bg-white px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
    />

    <!-- TODO -->
    <!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_noninteractive_element_interactions -->
    {#if showSuggestions}
        <ul
            class="absolute left-0 z-10 mt-1 w-full rounded-lg border border-gray-300 bg-white shadow-lg"
        >
            {#each filteredTags as tag, index}
                <li
                    class="flex cursor-pointer items-center justify-between px-4 py-2 text-gray-700 hover:bg-orange-100 {index ===
                    activeIndex
                        ? 'bg-orange-100'
                        : ''}"
                    onclick={() => selectTag(tag.name)}
                >
                    <span>{tag.name}</span>
                    <span class="text-sm text-gray-500">({tag.count} Mentions)</span>
                </li>
            {/each}
        </ul>
    {/if}
</div>
