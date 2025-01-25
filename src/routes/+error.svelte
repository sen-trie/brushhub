<script>
    import { page } from '$app/state';
    import { getSingle } from '$lib/db';
    import { navigateTo } from '$lib/util';
</script>

<svelte:head>
    <title>BrushHub - 404</title> 
</svelte:head>

<div class="flex flex-col card-island min-h-full justify-center items-center space-y-4">
    <img
        src={getSingle('dp', '404.png')}
        alt="Error"
        class="h-80 w-full object-contain"
    />
    <h1 class="text-3xl">{page.status}: {page.error?.message}</h1>
    <button class="text-xl confirm-button" onclick={() => navigateTo('/', page.url.pathname)}>Return Home</button>
</div>