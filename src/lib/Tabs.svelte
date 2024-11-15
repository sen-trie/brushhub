<script lang="ts">
    interface TabItem {
        label: string;
        value: number;
        component: any;
        props: any[];
    }

    export let items: TabItem[];
    export let activeTabValue = 1;

    const handleClick = (tabValue: number) => () => (activeTabValue = tabValue);
</script>

<div class="h-screen flex flex-col">
    <!-- Sticky Tabs Navigation -->
    <ul class="sticky top-0 z-10 flex border-b border-gray-300 bg-white">
        {#each items as item}
            <li class={activeTabValue === item.value ? 'active' : ''}>
                <span
                    on:click={handleClick(item.value)}
                    class="block px-4 py-2 cursor-pointer hover:border-gray-300 border-b-2"
                    class:font-semibold={activeTabValue === item.value}
                    class:bg-white={activeTabValue === item.value}
                >
                    {item.label}
                </span>
            </li>
        {/each}
    </ul>
    
    <!-- Scrollable Tab Content -->
    {#each items as item}
        {#if activeTabValue == item.value}
            <div class="flex-1 p-10 border border-gray-300 rounded-b-lg">
                <svelte:component this={item.component} props={item.props}/>
            </div>
        {/if}
    {/each}
</div>

<style>
    .active > span {
        @apply text-gray-700 bg-white border-gray-300;
    }

    ul {
        margin-top: 1px; 
        /* ? Theres a tiny gap at the top when stickied*/
    }
</style>
