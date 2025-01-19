<script lang="ts">
    import type { ComponentProps } from 'svelte';
    import { Icon, EllipsisVertical } from 'svelte-hero-icons';
    import { navigateTo, calculateCurrency, stopPropagation } from './util';
    import { page } from '$app/state';
    import { wrapDefault } from '$lib/db';

    let { serviceDB, viewOnly = true, currentArtist = false,
          removeEntry, editEntry, callback }: ComponentProps<any> = $props();
    
    let openIndex = $state(-1);

    const navigateOut = (service: Record<string, any>) => {
        if (service.artistId === page.data.user.id) {
            navigateTo(`./manage-services/${page.data.user.username}`, page.url.pathname);
        } else {
            navigateTo(`./service/${service.id}`, page.url.pathname);
        }
    }

    const archiveService = (archiveState: boolean, service: Record<string, any>) => {
        if (archiveState === true) {
            service.state = "archived";
        } else {
            service.state = "published"
        }

        editEntry(service)
    }
</script>

{#each serviceDB as service, index}
    <div
        class="relative service flex flex-col rounded-lg border border-gray-200 p-4 shadow-sm cursor-pointer"
        onclick={viewOnly
            ? () => navigateOut(service)
            : () => callback(service)}
    >
        <div class="relative w-full">
            <img
                src={wrapDefault('thumbnail', service.thumbnail)}
                alt="Service Thumbnail"
                class="h-48 w-full rounded-md object-cover"
            />
            {#if !service.isOpen && !currentArtist}
                <span
                    class="absolute right-2 top-2 rounded bg-red-600 px-2 py-1 text-xs font-bold text-white"
                >
                    CLOSED
                </span>
            {/if}
        </div>

        <div class="mt-4 text-left flex-grow">
            <h4 class="text-lg font-semibold">{service.title}</h4>
            <p class="mt-2 text-green-600">
                {service.types.length > 0
                    ? `${calculateCurrency(Math.min(...service.types.map((type: any) => type.price)))} ~ 
                            ${calculateCurrency(Math.max(...service.types.map((type: any) => type.price)))}`
                    : 'Price not set'}
            </p>
            <div class="mt-3 flex flex-wrap items-center gap-2">
                {#if service.fastDelivery?.enabled}
                    <span
                        class="rounded bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-600"
                    >
                        Fast Delivery
                    </span>
                {/if}
                {#if service.commercialUse?.enabled}
                    <span
                        class="rounded bg-orange-100 px-2 py-1 text-xs font-medium text-orange-600"
                    >
                        Commercial
                    </span>
                {/if}
            </div>
        </div>
        {#if service.state === 'published'}
            <div class="mt-4 mr-2" onclick={(event) => {event.stopPropagation()}}>
                <label class="inline-flex items-center cursor-pointer w-full justify-end">
                    <input type="checkbox" bind:checked={service.isOpen} class="sr-only peer">
                    <span class="mr-3 text-sm font-medium">{service.isOpen ? 'Open' : 'Closed'}</span>
                    <div class="relative w-11 h-6 bg-gray-200
                                rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white 
                                after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 
                                after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gray-600"></div>
                </label>
            </div>
        {/if}

        {#if currentArtist}
            <div class="absolute top-4 right-4 text-white bg-gray-800 rounded-full p-1"
                onclick="{(event) => {
                    event.stopPropagation();
                    openIndex = index === openIndex ? -1 : index;
                }}"
            >
                <Icon src={EllipsisVertical} size=24 />
                {#if openIndex === index}
                    <div class="absolute top-9 right-2 bg-white text-black rounded-sm p-2 px-4 z-20
                                flex flex-col border-2 border-gray-500">
                        {#if service.state === 'archived'}
                            <button onclick={() => archiveService(false, service)}>Unarchive</button>
                            <hr class="my-2" />
                        {:else if service.state === 'published'}
                            <button onclick={() => archiveService(true, service)}>Archive</button>
                            <hr class="my-2" />
                        {/if}
                        <button onclick={() => removeEntry(service.id)} class="text-red-500">Delete</button>
                    </div>
                {/if}
            </div>
        {/if}
    </div>
{/each}
