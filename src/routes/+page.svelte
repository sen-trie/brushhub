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

    function clearFilters() {
        openTagOnly = false;
        commercialUseOnly = false;
        tags = [];
    }
</script>

<svelte:head>
    <title>BrushHub</title> 
</svelte:head>

<div class="flex flex-col-reverse sm:flex-row card-island min-h-full sm:space-x-8">
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
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <Browse {artDB}/>
        </div>
    </div>
    <div
        class="filter-panel sticky p-4
                sm:top-6 sm:h-96 sm:min-w-64 sm:pt-4"
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
            <div class="max-w-64">
                <SearchTags bind:currentTags={tags} slim={true} />
            </div>
        </div>
    </div>
</div>

<style>
</style>
