<script lang="ts">
    import '../app.css';
    import Header from '$lib/Header.svelte';
    import Sidebar from '$lib/Sidebar.svelte';
    import '@fontsource-variable/noto-sans-jp';

    let { children } = $props();
    let showSidebar = $state(false);

    const toggleSidebar = () => (showSidebar = !showSidebar);
</script>

<div class="flex h-screen flex-col">
    <Header {toggleSidebar} />
    {#if showSidebar}
        <Sidebar {toggleSidebar} />
    {/if}
    <main class="content flex flex-col w-screen justify-center overflow-y-auto h-full ">
        <div
            class="screen-padding-x screen-padding-y w-full
            max-w-full sm:max-w-screen-2xl min-h-full pb-0 
            "
        >
            <div class="pb-4 min-h-full flex flex-col ">
                <div class="child-div flex-1 mb-8">
                    {@render children()}
                </div>
                <footer class="text-center text-gray-400 text-sm">
                    © {new Date().getFullYear()} sentrie. All rights reserved. Demonstration purposes only
                </footer>
            </div>
        </div>
    </main>
</div>

<style>
</style>
