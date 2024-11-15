<script lang="ts">
    import { getUsername, includesArray, filterArray } from '$lib/util';
    import artworkDB from '$lib/db/artwork.json';
    import tagsDB from '$lib/db/tags.json';
    import Browse from '$lib/Browse.svelte';

    const username = getUsername();

    let openTagOnly = $state(false);
    let tags: string[] = $state([]);
    let tagInput = $state('');

    let updateDB = $derived.by(
        filterArray(artworkDB, (art) => {
            return includesArray(art.tags, tags) && (!openTagOnly || art.closed === false);
        })
    );

    function addTag() {
        if (tagInput.trim().toLowerCase()) {
            const newTag = tagsDB.find((tag) => tag.name.toLowerCase() === tagInput);
            if (newTag) {
                tags = [...tags, newTag.name];
                tagInput = '';
            }
        }
    }

    function removeTag(tag: string) {
        tags = tags.filter((x) => x !== tag);
    }

    function clearFilters() {
        tags = [];
    }
</script>

<div class="container mx-auto flex px-4">
    <div class="content flex-grow">
        <div class="mb-4 flex items-center">
            <h2 class="mr-4 text-2xl font-bold text-orange-500">Explore</h2>
            {#if username}
                <h3 class="text-2xl font-bold text-gray-400">Following</h3>
            {/if}
        </div>
        <Browse {updateDB} />
    </div>
    <div class="filter-panel ml-8 w-64 rounded-lg bg-gray-100 p-4 shadow">
        <button class="clear-button mb-4" onclick={clearFilters}>
            <i class="fas fa-times"></i> Clear filters
        </button>
        <hr class="my-4" />
        <label class="checkbox flex justify-between">
            Open only
            <input type="checkbox" bind:checked={openTagOnly} />
        </label>
        <label class="checkbox mt-2 flex justify-between">
            Commercial use only
            <input type="checkbox" />
        </label>
        <hr class="my-4" />
        <label class="mb-2 block">
            Tags
            <div class="tag-input mt-2 flex items-center">
                <input
                    type="text"
                    bind:value={tagInput}
                    placeholder="Add a tag..."
                    class="mr-2 flex-grow rounded border p-2"
                />
                <button class="add-tag rounded bg-orange-500 p-2 text-white" onclick={addTag}
                    >+</button
                >
            </div>
        </label>
        <div class="tags mt-4">
            {#each tags as tag}
                <button
                    class="tag mb-2 mr-2 inline-block rounded bg-gray-200 px-2 py-1 text-gray-800"
                    onclick={() => {
                        removeTag(tag);
                    }}>{tag}</button
                >
            {/each}
        </div>
        <button class="apply-button mt-4 w-full rounded-full bg-orange-500 p-3 text-white"
            >APPLY FILTER</button
        >
    </div>
</div>

<style>
    .container {
        max-width: 1200px;
    }
</style>
