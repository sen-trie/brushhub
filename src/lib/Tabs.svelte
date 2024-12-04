<script lang="ts">
    import type { Component } from 'svelte';

    interface TabItem {
        label: string;
        value: number;
        component: Component;
        props: any | undefined;
    }

    let { items }: { items: TabItem[] } = $props();
    let activeTabValue = $state(1);

    const handleClick = (tabValue: number) => () => (activeTabValue = tabValue);
</script>

<div class="flex h-screen flex-col">
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

    {#each items as item}
        {#if activeTabValue == item.value}
            <div class="flex-1 rounded-b-lg border border-gray-300 p-10">
                <item.component props={item.props} />
            </div>
        {/if}
    {/each}
</div>

<style>
    .active > span {
        @apply border-gray-300 bg-white text-gray-700;
    }

    ul {
        margin-top: 1px;
        /* Theres a tiny gap at the top when stickied */
    }
</style>
