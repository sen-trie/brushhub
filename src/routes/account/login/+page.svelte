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

{#snippet signButton(
    profileIndex: number,
    profileName: string,
    profileImage: string,
    profileDescription: string
)}
    <button
        onclick={() => handleLogin(profileIndex)}
        class="card-container flex max-w-[30%] flex-1 flex-col items-center justify-center"
    >
        <img
            src={getSingle('dp', profileImage)}
            alt={profileName}
            class="mb-4 h-16 w-16 rounded-full shadow"
        />
        <h2 class="text-lg font-bold text-gray-800">{profileName}</h2>
        <p class="text-sm text-gray-500">{profileDescription}</p>
    </button>
{/snippet}

<div class="card-island">
    <h1 class="mb-2 text-center text-3xl font-bold text-gray-800">BrushHub Profiles</h1>
    <p class="mb-6 text-center text-gray-500">Choose a profile to sign in:</p>
    
    <div class="flex flex-row justify-around gap-4">
        {@render signButton(1, 'Artist', '1.jpg', 'Manage your commissions')}
        {@render signButton(2, 'Commissioner', '3.png', 'Request and track services')}
        {@render signButton(0, 'Guest', '3.png', 'Browse as a guest')}
    </div>
</div>
