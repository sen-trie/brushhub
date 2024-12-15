<script lang="ts">
    import tagsDB from '$lib/db/tags.json';
    import { navigateTo } from './util';
    import { page } from '$app/stores';

    const { slug } = $page.params;

    let pathName = $page.url.pathname;
    let searchQuery = $state('');
    let showSuggestions = $state(false);
    let filteredTags: { name: string; count: number }[] = $state([]);
    let activeIndex = $state(0);
    let inputRef: HTMLInputElement | null = null;

    function validateSlug(pathName: string): boolean {
        return (
            pathName.startsWith('/search/') &&
            tagsDB.some((tag) => tag.name.toLowerCase() === pathName.split('/')[2]?.toLowerCase())
        );
    }

    if (validateSlug(pathName)) {
        searchQuery = slug;
    }

    function updateSuggestions() {
        activeIndex = 0;
        filteredTags = tagsDB.filter((tag) =>
            tag.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        showSuggestions = filteredTags.length > 0;
    }

    function selectTag(tagName: string) {
        navigateTo(`./search/${tagName}`, $page.url.pathname);
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

    function handleClickOutside(event: MouseEvent) {
        if (inputRef && !inputRef.contains(event.target as Node)) {
            showSuggestions = false;
        }
    }

    $effect(() => {
        pathName = $page.url.pathname;

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    });
</script>

<div class="relative mx-auto w-full max-w-lg">
    <input
        type="text"
        bind:value={searchQuery}
        bind:this={inputRef}
        oninput={updateSuggestions}
        onkeydown={handleKeyDown}
        placeholder="Search for tags..."
        class="w-full rounded-full border border-gray-300 bg-white px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
    />

    <!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_noninteractive_element_interactions -->
    {#key $page.url}
        {#if showSuggestions}
            <ul
                class="absolute left-0 z-30 mt-1 w-full rounded-lg border border-gray-300 bg-white shadow-lg"
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
    {/key}
</div>
