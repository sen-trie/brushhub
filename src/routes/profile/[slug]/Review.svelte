<script lang="ts">
    import type { ComponentProps } from 'svelte';
    import { filterArray } from '$lib/util';
    import reviewDB from '$lib/db/review.json';
    import userDB from '$lib/db/user.json';
    import serviceDB from '$lib/db/services.json';

    let { props }: ComponentProps<any> = $props();
    const artist = props[0];

    // Filter reviews for the specific artist
    let filterDB = reviewDB.filter((review) => review.artist === artist.id);
</script>

<div class="grid grid-cols-2 gap-6 rounded-lg bg-gray-50 p-6">
    {#each filterDB as review}
        <div class="flex flex-col gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow">
            <div class="flex items-center gap-1">
                {#each Array(review.rating) as _}
                    <span class="fas fa-star text-orange-500">★</span>
                {/each}
                {#if review.rating < 5}
                    {#each Array(5 - review.rating) as _}
                        <span class="fas fa-star text-gray-300">★</span>
                    {/each}
                {/if}
            </div>
            <p class="text-gray-800">{review.comment}</p>
            <div class="mt-2 flex items-center gap-4">
                <div class="h-10 w-10 rounded-full bg-gray-300"></div>
                <div>
                    <p class="font-bold text-gray-700">
                        {userDB.find((user) => user.id === review.commissioner)?.username ||
                            'Anonymous'}
                    </p>
                    <p class="text-sm text-gray-500">
                        (Purchased: {serviceDB.find((service) => service.id === review.service)
                            ?.title || 'Unknown'})
                    </p>
                </div>
            </div>
        </div>
    {/each}
</div>
