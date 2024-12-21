<script lang="ts">
    import type { Component } from 'svelte';

    interface TabItem {
        label: string;
        value: number;
        component: Component;
        props: any | undefined;
        bindable?: boolean;
    }

    let {
        items,
        hideTabs = false,
        currentTab = 0,
        bindableItems = $bindable(),
        binded = false
    }: {
        items: TabItem[];
        hideTabs: boolean;
        currentTab: number;
        bindableItems: any | undefined;
        binded: boolean;
    } = $props();
    let activeTabValue = $state(1);

    const handleClick = (tabValue: number) => () => (activeTabValue = tabValue);
</script>

<div class="flex flex-col">
    {#if !hideTabs}
        <ul class="sticky top-0 z-10 flex border-b border-gray-300 bg-white">
            {#if binded}
                {#each bindableItems as item}
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
            {:else}
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
            {/if}
        </ul>
    {/if}

    {#if binded}
        {#each bindableItems as item}
            {#if item.value === (!currentTab ? activeTabValue : currentTab)}
                <div class="p-4">
                    {#if item.bindable}
                        <item.component bind:props={item.props} />
                    {:else}
                        <item.component props={item.props} />
                    {/if}
                </div>
            {/if}
        {/each}
    {:else}
        {#each items as item}
            {#if item.value === (!currentTab ? activeTabValue : currentTab)}
                <div class="p-4">
                    {#if item.bindable}
                        <item.component bind:props={item.props} />
                    {:else}
                        <item.component props={item.props} />
                    {/if}
                </div>
            {/if}
        {/each}
    {/if}
    <!-- {#each items as item}
        {#if item.value === (!currentTab ? activeTabValue : currentTab)}
            <div class="p-4">
                {#if item.bindable}
                    <item.component bind:props={item.props} />
                {:else}
                    <item.component props={item.props} />
                {/if}
            </div>
        {/if}
    {/each} -->
</div>

<style>
</style>
