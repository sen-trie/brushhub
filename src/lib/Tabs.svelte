<script lang="ts">
    import type { Component } from 'svelte';

    interface TabItem {
        label: string;
        value: number;
        component: Component;
        props: any | undefined;
    }

    let { items, hideTabs = false, currentTab = 0 }: { items: TabItem[], hideTabs: boolean, currentTab: number } = $props();
    let activeTabValue = $state(1);

    const handleClick = (tabValue: number) => () => (activeTabValue = tabValue);
</script>

<div class="flex flex-col">
    {#if !hideTabs}
        <ul class="sticky top-0 z-10 flex border-b border-gray-300 bg-white">
            {#each items as item}
                <li class={activeTabValue === item.value ? 'active' : ''}>
                    <span
                        onclick={handleClick(item.value)}
                        class="block cursor-pointer border-b-2 px-4 py-2 hover:border-gray-300"
                        class:font-semibold={activeTabValue === item.value}
                        class:bg-white={activeTabValue === item.value}
                    >
                        {item.label}
                    </span>
                </li>
            {/each}
        </ul>
    {/if}

    {#each items as item}
        {#if item.value === (!currentTab ? activeTabValue : currentTab)}
            <div class="p-4">
                <item.component props={item.props} />
            </div>
        {/if}
    {/each}
</div>

<style>
</style>
