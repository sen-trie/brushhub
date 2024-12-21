<script lang="ts">
    import type { ComponentProps } from 'svelte';
    const { nodeTimeline, currentIndex, callback = () => {} }: ComponentProps<any> = $props();

    const passedNode = (index: number, location: String): String => {
        return currentIndex >= index ? `${location}-orange-500` : `${location}-gray-500`;
    };
</script>

{#snippet circleNode(index: number)}
    <div class="flex cursor-pointer flex-col items-center" onclick={() => callback(index)}>
        <div
            class="flex h-6 w-6 items-center justify-center rounded-full {passedNode(index, 'bg')}"
        >
            {#if currentIndex < index}
                <div class="h-3 w-3 rounded-full bg-white"></div>
            {/if}
        </div>
        <p
            class="mt-2 text-sm font-medium
              {passedNode(index, 'text')}
        "
        >
            {nodeTimeline[index]}
        </p>
    </div>
    {#if index !== nodeTimeline.length - 1}
        <div class="mx-2 h-1 flex-1 {passedNode(index, 'bg')}"></div>
    {/if}
{/snippet}

<div class="flex w-full items-center">
    <div class="relative flex w-full items-center">
        {#each nodeTimeline as milestone, index}
            {@render circleNode(index)}
        {/each}
    </div>
</div>
