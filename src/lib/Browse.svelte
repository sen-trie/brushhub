<script lang="ts">
    import type { ComponentProps } from 'svelte';
    import artistDB from '$lib/db/artist.json'
    let { artDB }: ComponentProps<any> = $props();

    const images: any = import.meta.glob(['$lib/assets/artwork/**'], {
        eager: true,
        query: '?url',
        import: 'default'
    });
</script>

<div class="grid grid-cols-4 gap-4">
    {#each artDB as art}
        <div class="relative overflow-hidden rounded-lg border bg-white shadow">
            <img
                src={images['/src/lib/assets/artwork/' + art.imgSrc]}
                alt="Artwork"
                class="h-48 w-full object-cover"
            />
            <div
                class="absolute right-2 top-2 cursor-default rounded-full bg-red-500 p-1 text-white"
            >
                <i class="fas fa-times text-xs"></i>
            </div>
            {#if artistDB.find((artist) => artist.id === art.artist)?.openCommission === false}
                <span class="absolute left-2 top-2 rounded bg-gray-700 px-2 py-1 text-xs text-white"
                    >Closed</span
                >
            {/if}
        </div>
    {/each}
</div>

<style>
    .grid div .fa-times {
        pointer-events: none;
    }
</style>
