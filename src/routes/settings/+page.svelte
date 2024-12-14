
<script lang="ts">
    import { getSingle } from '$lib/db';
    import { getUser } from '$lib/util';
    const user = getUser();

    let darkMode = $state("auto");
    let preferredCurrency =  $state('USD');
    let headerColor =  $state('#ff4500');
</script>

<div class="max-w-4xl mx-auto mt-8 p-6">
    {#if user.displayName}
        <div>
            <h1 class="text-2xl font-bold mb-2">Your BrushHub profile</h1>
            <p class="text-sm text-gray-400 mb-6">
                This is your public presence on BrushHub. You need a profile to upload your own services,
                comment on artwork, or create commissions.
            </p>

            <div class="flex items-center space-x-4 mb-6">
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
            <div class="my-10 border-t border-gray-700"></div>
        </div>
    {/if}

    <h1 class="text-2xl font-bold mb-4">BrushHub Settings</h1>

    <div class="space-y-4">
        <div class="flex items-center justify-between">
            <!-- svelte-ignore a11y_label_has_associated_control -->
            <label class="text-sm font-medium">Accent color</label>
            <div class="flex items-center space-x-4">
                <input
                    type="color"
                    bind:value={headerColor}
                    class="w-8 h-8 border rounded-md"
                />
                <button class="px-4 py-2 border border-gray-500 rounded-md shadow-sm text-sm">Pick Random</button>
            </div>
        </div>
    
        <div class="flex items-center justify-between">
            <!-- svelte-ignore a11y_label_has_associated_control -->
            <label class="text-sm font-medium">Theme mode</label>
            <select
                bind:value={darkMode}
                class="rounded-md shadow-sm text-sm focus:border-orange-500 focus:ring-orange-500"
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
                bind:value={preferredCurrency}
                class="rounded-md focus:border-orange-500 focus:ring-orange-500"
            >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="SGD">SGD</option>
                <option value="JPY">JPY</option>
            </select>
        </div>
    </div>
    
</div>
