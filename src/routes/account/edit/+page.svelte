<script lang="ts">
    import { importSingle } from '$lib/api';
    import type { PageData } from './$types';
    let { data }: { data: PageData } = $props();

    let profileInfo = $state({
        ...data.artist,
        ...data.user
    });

    let languageValue = $state('');

    $effect(() => {
        if (/,\s$/.test(languageValue)) {
            languageValue = languageValue.replace(/,\s$/, '');
            profileInfo.languages.push(languageValue);
            languageValue = '';
        }
    });
</script>

<div class="space-y-6 p-6">
    <h1 class="text-2xl font-bold">Profile Customization</h1>

    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
            <p class="block text-sm font-medium text-gray-700">Profile Picture</p>
            <p class="mt-1 text-sm text-gray-500">
                Appears whenever your page is presented to others
            </p>
            <img
                src={importSingle('dp', '1.jpg')}
                alt="DP"
                class="mx-auto h-24 w-24 rounded-full"
            />
            <div class="mt-2 flex justify-center space-x-2">
                <button class="text-orange-500 hover:underline">Change</button>
                <button class="text-red-500 hover:underline">Remove</button>
            </div>
        </div>

        <div>
            <p class="block text-sm font-medium text-gray-700">Banner Image</p>
            <p class="mt-1 text-sm text-gray-500">
                This image will be displayed at the top of your profile page
            </p>
            <img
                src={importSingle('banner', '1.jpg')}
                alt="Cover Banner"
                class="mx-auto h-24 w-full rounded-md object-cover"
            />
            <div class="mt-2 flex justify-center space-x-2">
                <button class="text-orange-500 hover:underline">Change</button>
                <button class="text-red-500 hover:underline">Remove</button>
            </div>
        </div>
    </div>

    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
            <label for="username" class="block text-sm font-medium text-gray-700">Handle</label>
            <p class="mt-1 text-sm text-gray-500">
                Choose a unique handle - brushhub.com/{profileInfo.username}
            </p>
            <input
                type="text"
                id="username"
                bind:value={profileInfo.username}
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
            />
        </div>
        <div>
            <label for="displayName" class="block text-sm font-medium text-gray-700"
                >Display Name</label
            >
            <p class="mt-1 text-sm text-gray-500">
                Choose a channel name that represents you and your content
            </p>
            <input
                type="text"
                id="displayName"
                bind:value={profileInfo.displayName}
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
            />
        </div>
    </div>

    <div>
        <label for="bio" class="block text-sm font-medium text-gray-700">Bio</label>
        <textarea
            id="bio"
            rows="3"
            bind:value={profileInfo.bio}
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
        ></textarea>
    </div>

    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
            <label for="languages" class="block text-sm font-medium text-gray-700">Languages</label>
            <div class="mt-1 block w-full rounded-md border border-gray-300 bg-white p-2 shadow-sm">
                <div class="flex flex-wrap gap-2">
                    {#each profileInfo.languages as language, index}
                        <!-- svelte-ignore a11y_no_static_element_interactions, a11y_click_events_have_key_events -->
                        <div
                            class="items-center space-x-1 rounded bg-orange-100 px-2 py-1 text-orange-500"
                            onclick={() => profileInfo.languages.splice(index, 1)}
                        >
                            <span>{language}</span>
                            <button class="text-xs font-bold">x</button>
                        </div>
                    {/each}
                </div>
                <input
                    type="text"
                    placeholder="Add language"
                    class="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                    bind:value={languageValue}
                />
            </div>
            <p class="mt-1 text-sm text-gray-500">Enter a comma after every language</p>
        </div>

        <div>
            <label for="location" class="block text-sm font-medium text-gray-700">Location</label>
            <select
                id="location"
                bind:value={profileInfo.location}
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
            >
                <option value="Singapore">Singapore</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Indonesia">Indonesia</option>
            </select>
        </div>
    </div>

    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <!-- <div>
            <label for="youtube" class="block text-sm font-medium text-gray-700">YouTube</label>
            <input
                id="youtube"
                type="url"
                bind:value={profileInfo.youtube}
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
            />
        </div>
        <div>
            <label for="twitter" class="block text-sm font-medium text-gray-700">Twitter</label>
            <input
                id="twitter"
                type="url"
                bind:value={profileInfo.twitter}
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
            />
        </div> -->
    </div>

    <div class="mt-6 flex justify-end space-x-4">
        <button class="rounded border border-red-500 px-4 py-2 text-red-500 hover:bg-red-50">
            View Your Channel
        </button>
        <button class="rounded border border-red-500 px-4 py-2 text-red-500 hover:bg-red-50">
            Discard
        </button>
        <button class="rounded bg-orange-500 px-4 py-2 text-white hover:bg-orange-600">
            Save
        </button>
    </div>
</div>
