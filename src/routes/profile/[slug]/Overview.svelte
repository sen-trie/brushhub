<script lang="ts">
    import { calculateTimePassed, formatResponseTime, getUser, navigateTo } from '$lib/util';
    import type { ComponentProps } from 'svelte';
    import { PencilSquare, Icon, MapPin, Language, Link } from 'svelte-hero-icons';
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

<div>
    <div class="content-section flex flex-col gap-6 md:flex-row">
        <div class="left-column flex w-full flex-col md:w-1/4">
            <div class="bio card-container">
                <p>{artist.bio}</p>
                <hr class="my-4" />
                <div class="my-2 flex flex-col gap-2">
                    <div class="flex gap-2">
                        <Icon src={MapPin} size="24" />
                        <p class="max-w-64 truncate">{artist.location}</p>
                    </div>
                    <div class="flex gap-2">
                        <Icon src={Language} size="24" />
                        <p class="max-w-64 truncate">{artist.languages.join(', ')}</p>
                    </div>
                    {#each artist.links as link}
                        <div class="flex gap-2">
                            <Icon src={Link} size="24" />
                            <a
                                href={'//' + link}
                                target="_blank"
                                class="max-w-64 truncate text-blue-600"
                            >
                                {link}
                            </a>
                        </div>
                    {/each}
                </div>

                {#if currentArtist}
                    <button
                        class="confirm-button mt-4 flex gap-2 rounded"
                        onclick={() => navigateTo(`/account/edit`, $page.url.pathname)}
                    >
                        <Icon src={PencilSquare} size="24" />
                        Edit Your Profile
                    </button>
                {/if}

                <hr class="my-4" />
                <div class="my-4 flex flex-col gap-1">
                    <p>Joined {calculateTimePassed(new Date(artist.joined))} ago</p>
                    <div class="grid grid-cols-4 gap-1">
                        <div class="col-span-3">
                            <p>Satisfaction Level:</p>
                        </div>
                        <div class="col-span-1 text-end">
                            <p>{artist.satisfaction} / 5.0</p>
                        </div>
                        <div class="col-span-3">
                            <p>Avg. Response Time:</p>
                        </div>
                        <div class="col-span-1 text-end">
                            <p>{formatResponseTime(artist.responseTime)}</p>
                        </div>
                        <div class="col-span-3">
                            <p>Completion Rate:</p>
                        </div>
                        <div class="col-span-1 text-end">
                            <p>{artist.completionRate}%</p>
                        </div>
                        <div class="col-span-3">
                            <p>Total Commissions:</p>
                        </div>
                        <div class="col-span-1 text-end">
                            <p>{artist.total}</p>
                        </div>
                    </div>
                </div>

                {#if artistTOS}
                    <hr class="my-4" />
                    <div class="tos-container">
                        <h3 class="mb-2 text-xl font-bold">Terms of Service</h3>
                        <p class="mb-2 text-sm text-gray-500">
                            Last updated: {new Date(artistTOS.lastUpdated).toLocaleDateString()}
                        </p>

                        {#each artistTOS.categories as category (category.title)}
                            <details class="category group border-b last:border-none">
                                <summary
                                    class="text-m flex cursor-pointer items-center justify-between py-3 font-medium text-gray-700 hover:text-orange-500 focus:outline-none"
                                >
                                    <span>{category.title}</span>
                                    <span
                                        class="transform transition-transform group-open:rotate-180"
                                        >▼</span
                                    >
                                </summary>
                                <ul class="-mt-2 pb-4 pl-6 text-gray-600">
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

        <div class="right-column flex w-full flex-col gap-6 md:w-3/4">
            <div class="featured-artworks card-container">
                <h3 class="mb-4 text-lg font-semibold">Featured Artworks</h3>
                <Browse {artDB} showArtist={false} />
            </div>

            <div class="services card-container">
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
