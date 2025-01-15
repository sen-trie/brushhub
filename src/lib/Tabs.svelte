<script lang="ts">
    import type { ComponentProps } from 'svelte';
    let {
        items,
        hideTabs = false,
        currentTab = 0,
        bindableItems = $bindable(),
        binded = false
    }: ComponentProps<any> = $props();

    let activeTabValue = $state(1);

    const handleClick = (tabValue: number) => () => (activeTabValue = tabValue);
</script>

{#snippet tabLabel(items: Record<string, any>[])}
    {#each items as item}
        <li>
            <span
                onclick={handleClick(item.value)}
                class="block cursor-pointer border-b-2 px-4 py-2 font-semibold transition-all duration-300 ease-in-out
                      {activeTabValue === item.value
                    ? 'border-orange-400 text-orange-400'
                    : 'border-transparent'}"
                class:hover:border-gray-400={activeTabValue !== item.value}
            >
                {item.label}
            </span>
        </li>
    {/each}
{/snippet}

{#snippet tabItem(items: Record<string, any>[])}
    {#each items as item}
        {#if item.value === (!currentTab ? activeTabValue : currentTab)}
            <div class={!hideTabs ? 'pt-6' : ''}>
                {#if item.bindable}
                    <item.component bind:props={item.props} />
                {:else}
                    <item.component props={item.props} />
                {/if}
            </div>
        {/if}
    {/each}
{/snippet}

<div class="flex flex-col">
    {#if !hideTabs}
        <ul class="sticky top-0 z-10 flex border-b border-gray-300 bg-white">
            {#if binded}
                {@render tabLabel(bindableItems)}
            {:else}
                {@render tabLabel(items)}
            {/if}
        </ul>
    {/if}

    {#if binded}
        {@render tabItem(bindableItems)}
    {:else}
        {@render tabItem(items)}
    {/if}
</div>

<style>
</style>
