<script lang="ts">
    import '../app.css';
    import Header from '$lib/Header.svelte';
    import Sidebar from '$lib/Sidebar.svelte';

    let { children } = $props();
    let showSidebar = $state(false);

    const toggleSidebar = () => (showSidebar = !showSidebar);
</script>

<div class="flex flex-col h-screen">
    <Header {toggleSidebar} />
    {#if showSidebar}
        <Sidebar {toggleSidebar} />
    {/if}
    <main class="content flex w-screen justify-center overflow-y-auto">
        <div class="w-full screen-padding-x screen-padding-y
            max-w-full sm:max-w-screen-2xl
            "
        >
            {@render children()}
        </div>
    </main>
</div>

<style>
</style>
