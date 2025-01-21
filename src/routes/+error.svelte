<script>
    import { page } from '$app/state';
    import { getSingle } from '$lib/db';
</script>

<div class="flex flex-col card-island min-h-full justify-center items-center space-y-4">
    <img
        src={getSingle('dp', '404.png')}
        alt="Error"
        class="h-80 w-full object-contain"
    />
    <h1 class="text-3xl">{page.status}: {page.error?.message}</h1>
    <button class="text-xl confirm-button" onclick={() => window.history.back()}>Return To Previous Page</button>
</div>