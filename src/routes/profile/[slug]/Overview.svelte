<script lang="ts">
    import { calculateTimePassed, formatResponseTime, getUser, navigateTo } from '$lib/util';
    import type { ComponentProps } from 'svelte';
    import { pullDB } from '$lib/db';
    import { page } from '$app/stores';
    import Browse from '$lib/Browse.svelte';
    import Services from '$lib/Services.svelte';

    let { props }: ComponentProps<any> = $props();
    const artist = props[0];
    const currentArtist = getUser().id === artist.id;

    const artistTOS = pullDB('tos', {}, { artistId: artist.id });
    const serviceDB = pullDB('services', { artistId: artist.id, state: 'published' }, {});
    const artDB = pullDB(
        'artwork',
        { featured: (obj: any) => artist.featured.includes(obj.id) },
        {}
    );
</script>

<div class="">
    <div class="content-section flex flex-col gap-6 md:flex-row">
        <div class="left-column flex w-full flex-col gap-6 md:w-1/3">
            <div class="bio rounded-lg border border-gray-300 p-4 shadow-sm">
                <p class="mb-4">{artist.bio}</p>
                <p class="mb-2">{artist.location}</p>
                <p class="mb-4">{artist.languages.join(', ')}</p>
                <a href="https://{artist.youtube}" target="_blank" class="mt-2 block text-blue-600">
                    {artist.youtube}
                </a>
                <a href="https://{artist.twitter}" target="_blank" class="mt-2 block text-blue-600">
                    {artist.twitter}
                </a>

                {#if currentArtist}
                    <button
                        class="edit-profile mt-4 text-orange-600"
                        onclick={() => navigateTo(`/account/edit`, $page.url.pathname)}
                        >Edit your profile <i class="fas fa-edit"></i></button
                    >
                {/if}

                <p class="mt-4">Joined {calculateTimePassed(new Date(artist.joined))} ago</p>
                <p>Satisfaction Level: {artist.satisfaction}/5.0</p>
                <p>Avg. Response Time: {formatResponseTime(artist.responseTime)}</p>
                <p>Completion Rate: {artist.completionRate}%</p>
                <p class="mb-4">Total: {artist.total}</p>

                {#if artistTOS}
                    <div class="tos-container mx-auto max-w-2xl rounded-lg bg-gray-50 p-6 shadow">
                        <h2 class="mb-4 text-2xl font-bold">Terms of Service</h2>
                        <p class="mb-6 text-sm text-gray-500">
                            Last updated: {new Date(artistTOS.lastUpdated).toLocaleDateString()}
                        </p>

                        {#each artistTOS.categories as category (category.title)}
                            <details class="category group border-b last:border-none">
                                <summary
                                    class="flex cursor-pointer items-center justify-between py-3 text-lg font-medium text-gray-700 hover:text-orange-500 focus:outline-none"
                                >
                                    <span>{category.title}</span>
                                    <span
                                        class="transform transition-transform group-open:rotate-180"
                                        >▼</span
                                    >
                                </summary>
                                <ul class="py-2 pl-6 text-gray-600">
                                    {#each category.details as detail}
                                        <li class="list-disc">{detail}</li>
                                    {/each}
                                </ul>
                            </details>
                        {/each}
                    </div>
                {/if}
            </div>
        </div>

        <div class="right-column flex w-full flex-col gap-6 md:w-2/3">
            <div class="featured-artworks rounded-lg border border-gray-300 p-4 shadow-sm">
                <h3 class="mb-4 text-lg font-semibold">Featured Artworks</h3>
                <Browse {artDB} showArtist={false} />
            </div>

            <div class="services rounded-lg border border-gray-300 p-4 shadow-sm">
                <h3 class="text-lg font-semibold">Services</h3>
                <div class="service-grid mt-4 grid grid-cols-2 gap-4">
                    <Services {serviceDB} />
                </div>
                {#if currentArtist}
                    <button
                        class="my-services-button mt-4 rounded bg-orange-500 px-4 py-2 text-white hover:bg-orange-600"
                        onclick={() =>
                            navigateTo(`/manage-services/${artist.username}`, $page.url.pathname)}
                    >
                        My Services &gt;
                    </button>
                {/if}
            </div>
        </div>
    </div>
</div>

<style>
</style>
