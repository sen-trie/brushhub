<script lang="ts">
    import Tabs from '$lib/Tabs.svelte';
    import Overview from './Overview.svelte';
    import Portfolio from './Portfolio.svelte';
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();
    const artist = data;

    let items = [
        { 
            label: "Overview",
            value: 1,
            component: Overview,
            props: [artist]
        },
        { 
            label: "Browse",
            value: 2,
            component: Portfolio,
            props: [artist]
        }
    ];
</script>

<div class="w-full mx-auto p-4">
    <!-- Cover Image -->
    <div 
        class="header-section bg-cover bg-center p-6 text-black flex items-center"
        style="background-image: url('{artist.coverImage}')"
    >
        <div class="profile-info flex items-center">
            <!-- Profile Avatar -->
            <img src="{artist.avatar}" alt="{artist.name}" class="w-20 h-20 rounded-full" />
            
            <div class="profile-details ml-4">
                <h1 class="profile-name text-2xl font-bold">{artist.name}</h1>
                <span class="profile-status bg-green-500 text-white px-2 py-1 rounded text-sm mt-2 inline-block">
                    {artist.status}
                </span>
                <p class="profile-username text-gray-600">@{artist.username}</p>
                <div class="profile-followers text-gray-500 text-sm mt-2">
                    <span>{artist.followers} Followers</span> •
                    <span>{artist.following} Following</span>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Tabs Component -->
    <Tabs items={items} />
</div>

<style>

</style>
