<script lang="ts">
    import { getSingle, wrapDefault } from '$lib/db';
    import { navigateTo } from '$lib/util';
    import { page } from '$app/stores';
    import type { ComponentProps } from 'svelte';
    let { props }: ComponentProps<any> = $props();

    let artistDB = $state(props[0].artist);
    $effect(() => {
        artistDB = props[0].artist;
    });
</script>

<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions -->
<div class="space-y-4">
    {#each artistDB as artist, index}
        <div
            class="flex items-center justify-between rounded-lg border bg-white p-4 shadow-sm {index ===
            0
                ? 'bg-blue-50'
                : ''}"
        >
            <div class="flex items-center">
                <img
                    src={getSingle('dp', artist.avatar)}
                    alt="Artist avatar"
                    class="mr-4 h-16 w-16 rounded-full border border-gray-300 object-cover"
                />
                <div>
                    <div class="flex items-center space-x-2">
                        <h3 class="text-lg font-bold">{artist.displayName}</h3>
                        {#if !artist.openCommission}
                            <span
                                class="rounded-full bg-red-500 px-3 py-1 text-sm font-semibold text-white"
                            >
                                Closed
                            </span>
                        {/if}
                    </div>
                    <p class="text-sm text-gray-500">@{artist.username}</p>
                    <p class="text-sm font-medium text-gray-700">{artist.artFollowers} Followers</p>
                </div>
            </div>

            <div class="mx-4 max-w-sm text-sm text-gray-700">
                {artist.bio}
            </div>

            <button
                class="flex items-center gap-2 rounded-md border border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-50"
                onclick={() => {
                    navigateTo(`./profile/${artist.username}`, $page.url.pathname);
                }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    class="h-4 w-4"
                >
                    <path
                        d="M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8zm0-2C5.92 2 2 5.92 2 12s3.92 10 10 10 10-3.92 10-10S18.08 2 12 2zm2 10v2H10v-2H8v-2h2V8h2v2h2v2h-2z"
                        fill="currentColor"
                    />
                </svg>
                View Page
            </button>
        </div>
    {/each}
</div>

{#if artistDB.length === 0}
    <img
        src={wrapDefault('artwork', '')}
        alt="Artist Missing"
        class="h-48 w-full rounded-md object-contain"
    />
{/if}