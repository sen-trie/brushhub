<script lang="ts">
    import { getSingle } from '$lib/db';
    import Tabs from '$lib/Tabs.svelte';
    import Overview from './Overview.svelte';
    import Portfolio from './Portfolio.svelte';
    import Review from './Review.svelte';
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();
    const artist = data;

    let items = [
        {
            label: 'Overview',
            value: 1,
            component: Overview,
            props: [artist]
        },
        {
            label: 'Portfolio',
            value: 2,
            component: Portfolio,
            props: [artist]
        },
        {
            label: 'Reviews',
            value: 3,
            component: Review,
            props: [artist]
        }
    ];
</script>

<svelte:head>
    <title>BrushHub - {artist.displayName}</title> 
</svelte:head>

<div class="card-island pt-0 px-0 pb-6">
    <img
        src={getSingle('banner', artist.coverImage)}
        alt={artist.coverImage}
        class="h-52 w-full object-cover"
    />
    <div class="header-section mt-4 flex justify-between items-center text-black screen-padding-x">
        <div class="profile-info flex items-center">
            <img
                src={getSingle('dp', artist.avatar)}
                alt={artist.displayName}
                class="h-32 w-32 rounded-full object-cover"
            />

            <div class="ml-6 space-y-2">
                <h1 class="profile-name text-3xl font-bold">{artist.displayName}</h1>
                <span
                    class="profile-status inline-block rounded
                        {artist.openCommission ? 'bg-green-500' : 'bg-red-500'} 
                        px-2 py-1 text-sm text-white
                    "
                >
                    {artist.openCommission ? 'Open' : 'Closed'}
                </span>
                <p class="text-stone-600 dark:text-stone-400">@{artist.username}</p>
                <div class="text-sm text-stone-500 dark:text-stone-200">
                    <span>{artist.artFollowers} Followers</span>
                </div>
            </div>
        </div>
        <div class="{artist.tags.length > 0 ? "mb-2" : ""} flex flex-wrap gap-2">
            {#each artist.tags as tag, index}
                <div
                    class="items-center space-x-1 rounded orange-tag px-2 py-1 flex
                            !bg-orange-100 text-orange-500 dark:!bg-orange-500 dark:!text-orange-100"
                >
                    <span>#{tag}</span>
                </div>
            {/each}
        </div>
    </div>
</div>

<div class="tab-section card-island mt-4">
    <Tabs {items} />
</div>

<style>
</style>
