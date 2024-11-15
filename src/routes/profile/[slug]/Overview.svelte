<script lang="ts">
    import type { ComponentProps } from 'svelte';
    let { props }: ComponentProps<any> = $props();
    const artist = props[0];
</script>

<div class="overview-container p-4">
    <div class="content-section flex flex-col md:flex-row gap-6">
        <!-- Left Column: Bio and Stats -->
        <div class="left-column w-full md:w-1/3 flex flex-col gap-6">
            <div class="bio p-4 border border-gray-300 rounded-lg shadow-sm">
                <p>{artist.bio}</p>
                <p><i class="fas fa-map-marker-alt"></i> {artist.location}</p>
                <p><i class="fas fa-language"></i> {artist.languages.join(', ')}</p>
                <a href="https://{artist.youtube}" target="_blank" class="block mt-2 text-blue-600">
                    {artist.youtube}
                </a>
                <a href="https://{artist.twitter}" target="_blank" class="block mt-1 text-blue-600">
                    {artist.twitter}
                </a>
                <button class="edit-profile mt-4 text-orange-600">Edit your profile <i class="fas fa-edit"></i></button>
            </div>

            <div class="stats p-4 border border-gray-300 rounded-lg shadow-sm">
                <p>Joined {artist.joined} ago</p>
                <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
                <p>Satisfaction Level: {artist.satisfaction}/5.0</p>
                <p>Avg. Response Time: {artist.responseTime}</p>
                <p>Completion Rate: {artist.completionRate}%</p>
                <p>Total: {artist.total}</p>
                <p><strong>Terms of Service:</strong> {artist.terms}</p>
            </div>
        </div>

        <!-- Right Column: Featured Artworks and Services -->
        <div class="right-column w-full md:w-2/3 flex flex-col gap-6">
            <!-- Featured Artworks Section -->
            <div class="featured-artworks p-4 border border-gray-300 rounded-lg shadow-sm">
                <h3 class="text-lg font-semibold">Featured Artworks</h3>
                <div class="artwork-grid grid grid-cols-3 gap-4 mt-4">
                    {#each artist.artworks as artwork (artwork.id)}
                        <div class="artwork relative">
                            <img src="{artwork.image}" alt="Artwork" class="w-full h-28 object-cover rounded-lg" />
                            <button class="remove-button absolute top-2 right-2 text-red-500">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                    {/each}
                </div>
            </div>

            <!-- Services Section -->
            <div class="services p-4 border border-gray-300 rounded-lg shadow-sm">
                <h3 class="text-lg font-semibold">Services</h3>
                <div class="service-grid grid grid-cols-2 gap-4 mt-4">
                    {#each artist.services as service}
                        <div class="service p-4 border border-gray-200 rounded-lg flex flex-col items-center shadow-sm">
                            <h4 class="font-semibold">{service.title}</h4>
                            <p class="text-green-600">{service.price}</p>
                            <button class="more-options mt-2 text-gray-500">
                                <i class="fas fa-ellipsis-v"></i>
                            </button>
                        </div>
                    {/each}
                </div>
                <button class="my-services-button mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                    My Services &gt;
                </button>
            </div>
        </div>
    </div>
</div>

<style>
    /* No additional CSS needed as all styles are handled by Tailwind classes */
</style>
