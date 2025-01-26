<script lang="ts">
    import { getSingle, wrapDefault } from '$lib/db';
    import { navigateTo } from '$lib/util';
    import { page } from '$app/state';
    import { Icon, UserCircle } from 'svelte-hero-icons';
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
            class="flex items-center flex-col sm:flex-row space-y-3 sm:space-y-0
                   justify-between rounded-lg border colour-border p-4 shadow-sm {index ===
            0
                ? 'bg-blue-50'
                : ''}"
        >
            <div class="flex items-center">
                <img
                    src={getSingle('dp', artist.avatar)}
                    alt="Artist avatar"
                    class="mr-4 h-16 w-16 rounded-full border colour-border object-cover"
                />
                <div>
                    <div class="flex items-center space-x-2">
                        <h3 class="text-lg font-bold">{artist.displayName}</h3>
                        {#if !artist.openCommission}
                            <span
                                class="rounded-full bg-red-500 px-3 py-1 text-sm font-semibold"
                            >
                                Closed
                            </span>
                        {/if}
                    </div>
                    <p class="text-sm ">@{artist.username}</p>
                    <p class="text-sm font-medium ">{artist.artFollowers} Followers</p>
                </div>
            </div>

            <p class="mx-4 max-w-sm text-sm ">
                {artist.bio}
            </p>

            <button
                class="flex justify-center items-center gap-2 rounded-md border 
                        border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 
                        hover:bg-blue-50 dark:hover:bg-blue-600"
                onclick={() => {
                    navigateTo(`./profile/${artist.username}`, page.url.pathname);
                }}
            >
                <Icon src={UserCircle} size="24" />
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