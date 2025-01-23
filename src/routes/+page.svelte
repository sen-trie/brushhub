<script lang="ts">
    import { Icon, Funnel } from 'svelte-hero-icons';
    import { getUser, includesArray } from '$lib/util';
    import { pullDB } from '$lib/db';
    import Browse from '$lib/Browse.svelte';
    import SearchTags from '$lib/components/SearchTags.svelte';

    const user = getUser();

    let followersOnly = $state(false);
    let openTagOnly = $state(false);
    let commercialUseOnly = $state(false);
    let tags: string[] = $state([]);
    let tagInput = $state('');

    let artDB = $derived(
        pullDB(
            'artwork',
            {
                tags: (obj: any) => {
                    return includesArray(obj.tags, tags);
                },
                artist: (obj: any) => {
                    const artist = pullDB('artist', {}, { id: obj.artist });
                    return !openTagOnly || artist?.openCommission === true;
                },
                followers: (obj: any) => {
                    const following = user.isNotEmpty() && user.following.includes(obj.artist);
                    return !followersOnly || following;
                },
                services: (obj: any) => {
                    const services = pullDB(
                        'services',
                        {
                            state: 'published'
                        },
                        {
                            samples: (service: any) => service.samples.includes(obj.id),
                            commercialUse: (service: any) => service.commercialUse.enabled === true
                        }
                    );
                    return !commercialUseOnly || !!services;
                }
            },
            {}
        )
    );

    function addTag() {
        if (tagInput.trim().toLowerCase()) {
            const newTag = pullDB(
                'tags',
                {},
                {
                    name: (obj: any) => obj.name.toLowerCase() === tagInput
                }
            );

            if (newTag) {
                tags = [...tags, newTag?.name];
                tagInput = '';
            }
        }
    }

    function removeTag(tag: string) {
        tags = tags.filter((x) => x !== tag);
    }

    function clearFilters() {
        openTagOnly = false;
        commercialUseOnly = false;
        tags = [];
    }
</script>

<svelte:head>
    <title>BrushHub</title> 
</svelte:head>

<div class="flex card-island min-h-full">
    <div class="content flex-grow">
        <div class="mb-4 flex items-center">
            <button
                class="mr-4 text-2xl font-bold focus:outline-none
                    {followersOnly === false
                    ? 'text-orange-500 dark:text-orange-300'
                    : 'text-gray-400 hover:text-orange-500'}
                    "
                onclick={() => (followersOnly = false)}
            >
                Explore
            </button>
            {#if user.isNotEmpty()}
                <button
                    class="mr-4 text-2xl font-bold focus:outline-none
                        {followersOnly === true
                        ? 'text-orange-500 dark:text-orange-300'
                        : 'text-gray-400 hover:text-orange-500'}
                        "
                    onclick={() => (followersOnly = true)}
                >
                    Following
                </button>
            {/if}
        </div>
        <div>
            <Browse {artDB} />
        </div>
    </div>
    <div
        class="filter-panel sticky top-6 ml-8 h-96 w-72 pt-4"
    >
        <button class="clear-button flex justify-center gap-2" onclick={clearFilters}>
            <Icon src={Funnel} size="24" />
            Clear Filters
        </button>
        <hr class="my-4" />
        <label class="checkbox flex justify-between items-center cursor-pointer">
            Open Artists Only
            <input type="checkbox" class="cursor-pointer" bind:checked={openTagOnly} />
        </label>
        <label class="checkbox mt-2 flex justify-between items-center cursor-pointer">
            Commercial Use
            <input type="checkbox" class="cursor-pointer" bind:checked={commercialUseOnly} />
        </label>
        <hr class="my-4" />
        <div>
            <!-- svelte-ignore a11y_label_has_associated_control -->
            <label class="mb-2 block text-sm font-semibold">Tags</label>
            <SearchTags bind:currentTags={tags} slim={true} />
        </div>
    </div>
</div>

<style>
</style>
