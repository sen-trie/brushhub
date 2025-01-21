<script lang="ts">
    import { getSingle } from '$lib/db';
    import { getUser, getPrefs, exchangeRates } from '$lib/util';

    let userPrefs = $state(getPrefs());
    const user = getUser();

    function savePreferences() {
        console.log(userPrefs)

        window.localStorage.setItem('user_pref', JSON.stringify(userPrefs));
        window.localStorage.setItem('color-theme', userPrefs.darkMode);
        window.location.reload();
    }
</script>

<div class="card-island min-h-full">
    <h1 class="mb-2 text-2xl font-bold">BrushHub Settings</h1>
    <div class="space-y-4 text-lg font-medium">
        <div class="flex items-center justify-between">
            <!-- svelte-ignore a11y_label_has_associated_control -->
            <label>Appearance</label>
            <select
                bind:value={userPrefs.darkMode}
                class="w-40 rounded-md focus:border-orange-500 focus:ring-orange-500 entry"
            >
                <option class="entry" value="auto">Auto Detect</option>
                <option class="entry" value="dark">Dark</option>
                <option class="entry" value="light">Light</option>
            </select>
        </div>

        <div class="flex items-center justify-between">
            <!-- svelte-ignore a11y_label_has_associated_control -->
            <label>Preferred Currency</label>
            <select
                bind:value={userPrefs.preferredCurrency}
                class="w-40 rounded-md focus:border-orange-500 focus:ring-orange-500 entry"
            >
                {#each Object.entries(exchangeRates) as [rate, _]}
                    <option class="entry" value={rate}>{rate}</option>
                {/each}
            </select>
        </div>
    </div>

    <div class="mt-4 flex justify-end space-x-4">
        <button class="large-button" onclick={savePreferences}> Save Preferences </button>
    </div>

    {#if user.displayName}
        <div class="my-4 border-t border-gray-700"></div>
        <div>
            <h1 class="mb-2 text-2xl font-bold">Your BrushHub Profile</h1>
            <p class="text-sm text-gray-400">
                This is your public presence on BrushHub. You need a profile to upload your own
                services, comment on artwork, or create commissions.
            </p>

            <div class="my-4 flex items-center space-x-4">
                <div class="flex w-auto items-center space-x-4 card-container p-6 py-3">
                    <img
                        src={getSingle('dp', user.avatar)}
                        alt={`${user.displayName}'s avatar`}
                        class="h-16 w-16 rounded-full border  shadow"
                    />
                    <div>
                        <p class="text-lg font-semibold">{user.displayName}</p>
                        <p class="text-sm text-gray-400">@{user.username}</p>
                    </div>
                </div>
            </div>

            <div class="mt-2 space-x-4 py-4">
                <a href="/profile/{user.username}" class="large-button"> View Profile </a>
                <a href="/account/edit" class="large-button"> Manage Profile </a>
            </div>
        </div>
    {/if}
</div>