<script lang="ts">
    import type { ComponentProps } from 'svelte';
    import { getSingle } from '$lib/db';
    import { pullDB } from '$lib/db';

    let { props }: ComponentProps<any> = $props();
    const artist = props[0];

    const filterDB = pullDB('review', { artist: artist.id }, {}).map((review: any) => ({
        ...review,
        service: pullDB('services', {}, { id: review.service }),
        user: pullDB('user', {}, { id: review.commissioner })
    }));
</script>

<div class="grid grid-cols-2 gap-6">
    {#each filterDB as review}
        <div class="card-container flex flex-col gap-4">
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
                <div class="h-10 w-10 rounded-full bg-gray-300">
                    <img
                        src={getSingle('dp', review.user?.avatar)}
                        alt="User Avatar"
                        class="h-10 w-10 rounded-full object-cover"
                    />
                </div>
                <div>
                    <p class="font-bold text-gray-700">
                        {review?.user?.displayName || 'Anonymous'}
                    </p>
                    <p class="text-sm text-gray-500">
                        (Purchased: {review.service?.title || 'Unknown'})
                    </p>
                </div>
            </div>
        </div>
    {/each}
</div>
