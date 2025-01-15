<script lang="ts">
    import '../app.css';
    import Header from '$lib/Header.svelte';
    import Sidebar from '$lib/Sidebar.svelte';

    let { children } = $props();
    let showSidebar = $state(false);

    const toggleSidebar = () => (showSidebar = !showSidebar);
</script>

<div class="flex h-screen flex-col">
    <Header {toggleSidebar} />
    {#if showSidebar}
        <Sidebar {toggleSidebar} />
    {/if}
    <main class="content flex w-screen justify-center overflow-y-auto h-full">
        <div
            class="screen-padding-x screen-padding-y w-full
            max-w-full sm:max-w-screen-2xl min-h-full
            "
        >
            <div class="pb-8">
                {@render children()}
            </div>
        </div>
    </main>
</div>

<style>
</style>
