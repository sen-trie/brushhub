<script lang="ts">
    import { pullDB } from '$lib/db';
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
            pullDB('tags').some(
                (tag: any) => tag.name.toLowerCase() === pathName.split('/')[2]?.toLowerCase()
            )
        );
    }

    if (validateSlug(pathName)) {
        searchQuery = slug;
    }

    function updateSuggestions() {
        activeIndex = 0;
        filteredTags = pullDB('tags')
            .filter((tag: any) => tag.name.toLowerCase().includes(searchQuery.toLowerCase()))
            .sort((a: any, b: any) => b.count - a.count);
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

<input
    type="text"
    bind:value={searchQuery}
    bind:this={inputRef}
    oninput={updateSuggestions}
    onkeydown={handleKeyDown}
    placeholder="Search"
    class="w-full rounded-full border  bg-white px-4 py-2 text-stone-700 
            border-stone-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500
            dark:bg-stone-900 dark:text-stone-200 
    "
/>

<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_noninteractive_element_interactions -->
{#key $page.url}
    {#if showSuggestions}
        <ul
            class="absolute left-0 top-full z-30 mt-1 w-full overflow-clip rounded-lg border 
                    colour-border bg-white shadow-lg dark:bg-stone-900"
        >
            {#each filteredTags.slice(0, 10) as tag, index}
                <li
                    class="flex cursor-pointer items-center justify-between px-4 py-2
                    hover:bg-orange-100 hover:dark:bg-orange-700 text-stone-700 dark:text-stone-200 
                    {index === activeIndex
                        ? 'bg-orange-100 dark:bg-orange-700'
                        : ''}"
                    onclick={() => selectTag(tag.name)}
                >
                    <span>{tag.name}</span>
                    <span class="text-sm text-stone-700 dark:text-stone-200">({tag.count} Mentions)</span>
                </li>
            {/each}
        </ul>
    {/if}
{/key}
