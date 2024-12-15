<script lang="ts">
    import { calculateTimePassed, formatResponseTime, navigateTo } from '$lib/util';
    import type { ComponentProps } from 'svelte';
    import { page } from '$app/stores';
    import Browse from '$lib/Browse.svelte';
    import artworkDB from '$lib/db/artwork.json';
    import tosData from '$lib/db/tos.json';
    import services from '$lib/db/services.json';
    import Services from '$lib/Services.svelte';

    let { props }: ComponentProps<any> = $props();
    const artist = props[0];

    const artistTOS = tosData.find((tos) => tos.artistId === artist.id);
    
    const serviceDB = services.filter(
        (service) => service.artistId === artist.id && service.state === 'published'
    );

    const artDB = artworkDB.filter((artwork) => artist.featured.includes(artwork.id));
</script>

<div class="overview-container p-4">
    <div class="content-section flex flex-col gap-6 md:flex-row">
        <!-- Left Column: Bio and Stats -->
        <div class="left-column flex w-full flex-col gap-6 md:w-1/3">
            <div class="bio rounded-lg border border-gray-300 p-4 shadow-sm">
                <p>{artist.bio}</p>
                <p><i class="fas fa-map-marker-alt"></i> {artist.location}</p>
                <p><i class="fas fa-language"></i> {artist.languages.join(', ')}</p>
                <a href="https://{artist.youtube}" target="_blank" class="mt-2 block text-blue-600">
                    {artist.youtube}
                </a>
                <a href="https://{artist.twitter}" target="_blank" class="mt-1 block text-blue-600">
                    {artist.twitter}
                </a>
                <button
                    class="edit-profile mt-4 text-orange-600"
                    onclick={() => navigateTo(`/account/edit`, $page.url.pathname)}
                    >Edit your profile <i class="fas fa-edit"></i></button
                >

                <br /><br />

                <p>Joined {calculateTimePassed(new Date(artist.joined))} ago</p>
                <p>Satisfaction Level: {artist.satisfaction}/5.0</p>
                <p>Avg. Response Time: {formatResponseTime(artist.responseTime)}</p>
                <p>Completion Rate: {artist.completionRate}%</p>
                <p>Total: {artist.total}</p>

                <br />

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
                <h3 class="text-lg font-semibold">Featured Artworks</h3>
                <Browse {artDB} showArtist={false} />
            </div>

            <!-- Services Section -->
            <div class="services rounded-lg border border-gray-300 p-4 shadow-sm">
                <h3 class="text-lg font-semibold">Services</h3>
                <Services {serviceDB} />
                <!-- TODO EDIT SERVICE IF CURRENT USER IS ARTIST -->
                <button
                    class="my-services-button mt-4 rounded bg-orange-500 px-4 py-2 text-white hover:bg-orange-600"
                >
                    My Services &gt;
                </button>
            </div>
        </div>
    </div>
</div>

<style>
</style>
