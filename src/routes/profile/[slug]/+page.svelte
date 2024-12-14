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

<div class="mx-auto w-full p-4">
    <!-- style="background-image: url('{artist.coverImage}')" -->
    <div class="header-section flex items-center bg-cover bg-center p-6 text-black">
        <div class="profile-info flex items-center">
            <img
                src={getSingle('dp', artist.avatar)}
                alt={artist.displayName}
                class="h-20 w-20 rounded-full"
            />

            <div class="profile-details ml-4">
                <h1 class="profile-name text-2xl font-bold">{artist.displayName}</h1>
                <span
                    class="profile-status mt-2 inline-block rounded {artist.openCommission
                        ? 'bg-green-500'
                        : 'bg-red-500'} px-2 py-1 text-sm text-white"
                >
                    {artist.openCommission ? 'Open' : 'Closed'}
                </span>
                <p class="profile-username text-gray-600">@{artist.username}</p>
                <div class="profile-followers mt-2 text-sm text-gray-500">
                    <span>{artist.followers.length} Followers</span> •
                    <span>{artist.following.length} Following</span>
                </div>
            </div>
        </div>
    </div>

    <Tabs {items} />
</div>

<style>
</style>
