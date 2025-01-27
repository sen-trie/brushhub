<script lang="ts">
    import { wrapDefault } from '$lib/db';
    import { invalidate } from '$app/navigation';
    import { navigateTo } from '$lib/util';
    import { page } from '$app/state';

    function handleLogin(user_id: number) {
        window.localStorage.setItem('user_id', String(user_id));
        invalidate('user:profile').then(() => {
            navigateTo('/', page.url.pathname);
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
        class="card-container flex sm:max-w-[30%] flex-1 flex-col items-center justify-center group"
    >
        <img
            src={wrapDefault('dp', profileImage)}
            alt={profileName}
            class="mb-4 h-16 w-16 rounded-full shadow"
        />
        <h2 class="text-lg font-bold group-hover:text-orange-500">{profileName}</h2>
        <p class="text-sm group-hover:text-orange-500">{profileDescription}</p>
    </button>
{/snippet}

<svelte:head>
    <title>BrushHub - Login</title> 
</svelte:head>

<div class="card-island">
    <h1 class="mb-2 text-center text-3xl font-bold">BrushHub Profiles</h1>
    <p class="mb-6 text-center">Choose a profile to sign in with:</p>
    
    <div class="flex flex-col sm:flex-row justify-around gap-4">
        {@render signButton(3, 'Artist', '3.jpg', 'Manage your commissions')}
        {@render signButton(1, 'Commissioner', '1.jpg', 'Request and track services')}
        {@render signButton(0, 'Guest', '', 'Browse as a guest')}
    </div>
</div>
