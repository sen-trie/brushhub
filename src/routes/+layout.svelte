<script lang="ts">
    import '../app.css';
    import Header from '$lib/Header.svelte';
    import Sidebar from '$lib/Sidebar.svelte';

    let { children } = $props();
    let showSidebar = $state(false);

    const toggleSidebar = () => (showSidebar = !showSidebar);
</script>

<div class="layout">
    <Header {toggleSidebar} />
    {#if showSidebar}
        <Sidebar {toggleSidebar} />
    {/if}
    <main class="content">
        {@render children()}
    </main>
</div>

<style lang="css">
    .layout {
        position: relative;
        height: 100vh;
        display: flex;
        flex-direction: column;
    }

    .content {
        flex-grow: 1;
        padding: 1rem;
    }

    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 10;
    }

    main {
        transition: margin-left 0.3s;
    }
</style>
