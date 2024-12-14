<script lang="ts">
    import { getSingle } from '$lib/db';
    import { onMount } from 'svelte';
    import { invalidate, invalidateAll } from '$app/navigation';
    import { navigateTo } from '$lib/util';
    import { page } from '$app/stores';

    function handleLogin(user_id: number) {
        window.localStorage.setItem('user_id', String(user_id));
        invalidate('user:profile').then(() => {
            navigateTo('/', $page.url.pathname);
        });
    }
</script>

<div class="p-8">
    <h1 class="mb-6 text-center text-3xl font-bold text-gray-800">BrushHub</h1>
    <p class="mb-6 text-center text-gray-500">Choose a profile to sign in:</p>

    <div class="flex flex-row justify-around gap-4">
        <button
            on:click={() => handleLogin(1)}
            class="flex max-w-[30%] flex-1 flex-col items-center rounded-lg border border-gray-200 bg-white p-6 text-center shadow-md hover:bg-orange-50"
        >
            <img
                src={getSingle('dp', '1.jpg')}
                alt="Artist"
                class="mb-4 h-16 w-16 rounded-full shadow"
            />
            <h2 class="text-lg font-bold text-gray-800">Artist</h2>
            <p class="text-sm text-gray-500">Manage your commissions</p>
        </button>

        <button
            on:click={() => handleLogin(2)}
            class="flex max-w-[30%] flex-1 flex-col items-center rounded-lg border border-gray-200 bg-white p-6 text-center shadow-md hover:bg-orange-50"
        >
            <img
                src={getSingle('dp', '3.png')}
                alt="Artist"
                class="mb-4 h-16 w-16 rounded-full shadow"
            />
            <h2 class="text-lg font-bold text-gray-800">Commissioner</h2>
            <p class="text-sm text-gray-500">Request and track services</p>
        </button>

        <button
            on:click={() => handleLogin(0)}
            class="flex max-w-[30%] flex-1 flex-col items-center rounded-lg border border-gray-200 bg-white p-6 text-center shadow-md hover:bg-orange-50"
        >
            <img
                src={getSingle('dp', '3.png')}
                alt="Artist"
                class="mb-4 h-16 w-16 rounded-full shadow"
            />
            <h2 class="text-lg font-bold text-gray-800">Guest</h2>
            <p class="text-sm text-gray-500">Browse as a guest</p>
        </button>
    </div>
</div>
