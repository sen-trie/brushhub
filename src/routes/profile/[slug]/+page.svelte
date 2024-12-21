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

<img
    src={getSingle('banner', artist.coverImage)}
    alt={artist.coverImage}
    class="h-52 w-full rounded-xl object-cover -mt-8"
/>
<div class="header-section my-4 flex items-center text-black">
    <div class="profile-info flex items-center">
        <img
            src={getSingle('dp', artist.avatar)}
            alt={artist.displayName}
            class="h-32 w-32 rounded-full object-cover"
        />

        <div class="ml-6 space-y-2">
            <h1 class="profile-name text-3xl font-bold">{artist.displayName}</h1>
            <!-- TODO STANDARDIZE STATUS -->
            <span
                class="profile-status inline-block rounded
                    {artist.openCommission ? 'bg-green-500' : 'bg-red-500'} 
                    px-2 py-1 text-sm text-white
                "
            >
                {artist.openCommission ? 'Open' : 'Closed'}
            </span>
            <p class="text-gray-600">@{artist.username}</p>
            <div class="text-sm text-gray-500">
                <span>{artist.followers.length} Followers</span> •
                <span>{artist.following.length} Following</span>
            </div>
        </div>
    </div>
</div>

<Tabs {items} />

<style>
</style>
