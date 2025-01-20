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
    <main class="content flex flex-col w-screen justify-center overflow-y-auto h-full 
                bg-gray-100 dark:bg-stone-900">
        <div
            class="screen-padding-x screen-padding-y w-full
            max-w-full sm:max-w-screen-2xl h-full
            "
        >
            <div class="mt-4 h-full flex flex-col">
                <div class="child-div flex-1 mb-4">
                    {@render children()}
                </div>
                <footer class="text-center text-gray-400 text-sm pb-2">
                    © {new Date().getFullYear()} sentrie. All rights reserved. Demonstration purposes only
                </footer>
            </div>
        </div>
    </main>
</div>

<style>
</style>
