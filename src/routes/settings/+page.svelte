<script lang="ts">
    import { getSingle } from '$lib/db';
    import { getUser, getPrefs, exchangeRates } from '$lib/util';

    let userPrefs = $state(getPrefs());
    const user = getUser();

    function savePreferences() {
        window.localStorage.setItem('user_pref', JSON.stringify(userPrefs));
        window.location.reload();
    }

    function pickRandomColor() {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        userPrefs.headerColor = randomColor;
    }
</script>

<div class="mx-auto max-w-4xl p-6">
    <h1 class="mb-4 text-2xl font-bold">BrushHub Settings</h1>
    <div class="space-y-4">
        <div class="flex items-center justify-between">
            <!-- svelte-ignore a11y_label_has_associated_control -->
            <label class="text-sm font-medium">Theme mode</label>
            <select
                bind:value={userPrefs.darkMode}
                class="rounded-md text-sm shadow-sm focus:border-orange-500 focus:ring-orange-500"
            >
                <option value="auto">Auto Detect</option>
                <option value="dark">Dark</option>
                <option value="light">Light</option>
            </select>
        </div>

        <div class="flex items-center justify-between">
            <!-- svelte-ignore a11y_label_has_associated_control -->
            <label class="text-sm font-medium">Preferred Currency</label>
            <select
                bind:value={userPrefs.preferredCurrency}
                class="rounded-md focus:border-orange-500 focus:ring-orange-500"
            >
                {#each Object.entries(exchangeRates) as [rate, _]}
                    <option value={rate}>{rate}</option>
                {/each}
            </select>
        </div>
    </div>

    <div class="mt-10 flex justify-end space-x-4">
        <button
            class="rounded bg-orange-500 px-4 py-2 text-white hover:bg-orange-600"
            onclick={savePreferences}
        >
            Save Preferences
        </button>
    </div>

    {#if user.displayName}
        <div class="my-8 border-t border-gray-700"></div>
        <div>
            <h1 class="mb-2 text-2xl font-bold">Your BrushHub Profile</h1>
            <p class="mb-6 text-sm text-gray-400">
                This is your public presence on BrushHub. You need a profile to upload your own
                services, comment on artwork, or create commissions.
            </p>

            <div class="mb-6 flex items-center space-x-4">
                <img
                    src={getSingle('dp', user.avatar)}
                    alt={`${user.displayName}'s avatar`}
                    class="h-16 w-16 rounded-full border border-gray-700 shadow"
                />
                <div>
                    <p class="text-lg font-semibold">{user.displayName}</p>
                    <p class="text-sm text-gray-400">@{user.username}</p>
                </div>
            </div>

            <div class="space-y-4">
                <a
                    href="/profile/{user.username}"
                    class="block text-sm font-medium text-red-500 hover:text-red-400"
                >
                    View Profile
                </a>
                <a
                    href="/account/edit"
                    class="block text-sm font-medium text-red-500 hover:text-red-400"
                >
                    Manage Profile
                </a>
            </div>
        </div>
    {/if}
</div>
