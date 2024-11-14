<script lang="ts">
    import { getUsername, includesArray } from '$lib/util';
    import artworkDB from '$lib/db/artwork.json';
	import tagsDB from '$lib/db/tags.json';
    import Browse from './Browse.svelte';

    const username = getUsername();

	let openTagOnly = $state(false);
	let tags: string[] = $state([]);
	let tagInput = $state('');

	let updateDB = $derived.by(() => {
		return artworkDB.filter(art => {
			return (
				includesArray(art.tags, tags) && 
				(!openTagOnly || art.closed === false)
			)
		})
	});
	
	function addTag() {
		if (tagInput.trim().toLowerCase()) {
			const newTag = tagsDB.find(tag => tag.name.toLowerCase() === tagInput);
			if (newTag) {
				tags = [...tags, newTag.name];
				tagInput = '';
			}
		}
	}

	function removeTag(tag: string) {
		tags = tags.filter(x => x !== tag);
	}

	function clearFilters() {
		tags = [];
	}
</script>

<div class="container mx-auto px-4 flex">
	<div class="content flex-grow">
		<div class="mb-4 flex items-center">
			<h2 class="mr-4 text-2xl font-bold text-orange-500">Explore</h2>
			{#if username}
				<h3 class="text-2xl font-bold text-gray-400">Following</h3>
			{/if}
		</div>
		<Browse updateDB={updateDB} />
	</div>
	<div class="filter-panel w-64 ml-8 p-4 bg-gray-100 rounded-lg shadow">
		<button class="clear-button mb-4" onclick={clearFilters}>
		  <i class="fas fa-times"></i> Clear filters
		</button>
		<hr class="my-4" />
		<label class="checkbox flex justify-between">
		  Open only
		  <input type="checkbox" bind:checked={openTagOnly}/>
		</label>
		<label class="checkbox flex justify-between mt-2">
		  Commercial use only
		  <input type="checkbox" />
		</label>
		<hr class="my-4" />
		<label class="block mb-2">
		  Tags
		  <div class="tag-input flex items-center mt-2">
			<input type="text" bind:value={tagInput} placeholder="Add a tag..." class="p-2 border rounded mr-2 flex-grow" />
			<button class="add-tag bg-orange-500 text-white p-2 rounded" onclick={addTag}>+</button>
		  </div>
		</label>
		<div class="tags mt-4">
		  {#each tags as tag}
			<button class="tag inline-block bg-gray-200 text-gray-800 px-2 py-1 rounded mr-2 mb-2" onclick={() => {removeTag(tag)}}>{tag}</button>
		  {/each}
		</div>
		<button class="apply-button mt-4 bg-orange-500 text-white p-3 rounded-full w-full">APPLY FILTER</button>
	  </div>
</div>

<style>
    .container {
        max-width: 1200px;
    }
</style>
