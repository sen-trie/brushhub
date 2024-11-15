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
    ]

</script>

<div class="profile-container">
    <!-- style="background-image: url('{artist.coverImage}') -->
    <div class="header-section">
        <div class="profile-info flex items-center">
            <!-- <img src="{artist.avatar}" alt="{artist.name}" class="profile-avatar" /> -->
            <div class="profile-details ml-4">
                <h1 class="profile-name">{artist.name}</h1>
                <span class="profile-status badge">{artist.status}</span>
                <p class="profile-username">@{artist.username}</p>
                <div class="profile-followers text-gray-500">
                    <span>{artist.followers} Followers</span> •
                    <span>{artist.following} Following</span>
                </div>
            </div>
        </div>
    </div>
    <Tabs items={items} />
</div>

<style>
    .profile-container {
        max-width: 800px;
        margin: 0 auto;
    }

    .header-section {
        background-size: cover;
        background-position: center;
        padding: 20px;
        display: flex;
        align-items: center;
        color: black;
    }

    .profile-avatar {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: 3px solid white;
    }

    .profile-name {
        font-size: 1.5rem;
        font-weight: bold;
    }

    .profile-status {
        background-color: green;
        color: white;
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 0.875rem;
        margin-top: 4px;
    }

    .tabs {
        display: flex;
        gap: 10px;
        align-items: center;
    }

    .tab {
        padding: 8px 16px;
        border-bottom: 2px solid transparent;
        cursor: pointer;
        font-weight: bold;
    }

    .tab.active {
        color: orange;
        border-bottom-color: orange;
    }

    .search-bar {
        display: flex;
        margin-left: auto;
    }

    .search-input {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }

    .search-button {
        padding: 8px;
        background-color: #eee;
        border: none;
    }

    .bio {
        margin-top: 20px;
    }

    .featured-artworks,
    .services {
        margin-top: 20px;
    }

    .artwork-grid {
        display: flex;
        gap: 10px;
    }

    .artwork {
        position: relative;
    }

    .remove-button {
        position: absolute;
        top: 5px;
        right: 5px;
        background: rgba(0, 0, 0, 0.5);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
    }

    .my-services-button {
        padding: 10px;
        background-color: orange;
        color: white;
        border: none;
        border-radius: 20px;
        cursor: pointer;
        font-weight: bold;
    }
</style>
