<script lang="ts">
    import { wrapDefault,saveUser } from '$lib/db';
    import { getCountryList } from '$lib/util';
    import type { PageData } from './$types';
    let { data }: { data: PageData } = $props();

    const initialValue = {
        ...data.artist,
        ...data.user,
        uploadedDP: data.user.avatar,
        uploadedBanner: data.user.coverImage
    };

    let profileInfo = $state(initialValue);
    let languageValue = $state('');

    $effect(() => {
        if (/,\s$/.test(languageValue)) {
            languageValue = languageValue.replace(/,\s$/, '');
            profileInfo.languages.push(languageValue);
            languageValue = '';
        }
    });

    let bannerWarningMessage: string = $state('');
    let dpWarningMessage: string = $state('');

    const handleImageUpload = (event: Event, imageLocation: String) => {
        const file = (event.target as HTMLInputElement).files?.[0];
        if (!file) return;

        if (!file.type.startsWith('image/')) {
            if (imageLocation === 'dp') {
                dpWarningMessage = 'Only image files (e.g., jpg, png) are allowed.';
            } else {
                bannerWarningMessage = 'Only image files (e.g., jpg, png) are allowed.';
            }
            return;
        }

        const fileReader = new FileReader();
        fileReader.onload = () => {
            if (imageLocation === 'dp') {
                profileInfo.uploadedDP = fileReader.result as string;
                dpWarningMessage = '';
            } else {
                profileInfo.uploadedBanner = fileReader.result as string;
                bannerWarningMessage = '';
            }
        };
        fileReader.readAsDataURL(file);
    };

    const saveProfile = () => {
        alert('Saved!');
        saveUser($state.snapshot(profileInfo));
    }

    function moveLink(fromIndex: number, toIndex: number) {
        if (toIndex < 0 || toIndex >= profileInfo.links.length) return;
        const temp = profileInfo.links[fromIndex];
        profileInfo.links[fromIndex] = profileInfo.links[toIndex];
        profileInfo.links[toIndex] = temp;
    }
</script>

{#snippet imageUpload(imageLocation: string)}
    <div class="mt-2 flex justify-center space-x-2">
        <label
            for="upload-{imageLocation}"
            class="mr-4 cursor-pointer rounded bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600"
        >
            Upload Image
        </label>
        <input
            id="upload-{imageLocation}"
            type="file"
            accept="image/*"
            class="hidden"
            onchange={(e) => handleImageUpload(e, imageLocation)}
        />
        <button
            class="text-red-500 hover:underline"
            onclick={() => {
                if (imageLocation === 'dp') {
                    profileInfo.uploadedDP = '';
                    dpWarningMessage = '';
                } else {
                    profileInfo.uploadedBanner = '';
                    bannerWarningMessage = '';
                }
            }}
        >
            Remove
        </button>
    </div>
{/snippet}

<div class="card-island">
    <div class="flex flex-col space-y-6">
        <h1 class="page-title -mb-2">Profile Customization</h1>
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
                <p class="block text-sm font-medium heading">Profile Picture</p>
                <p class="mt-1 text-sm sub-heading">
                    Appears whenever your page is presented to others
                </p>

                {#if dpWarningMessage}
                    <p class="mt-2 text-sm text-red-500">{dpWarningMessage}</p>
                {/if}

                <img
                    src={wrapDefault('dp', profileInfo.uploadedDP)}
                    alt="DP"
                    class="mx-auto my-4 h-24 w-24 rounded-full"
                />
                {@render imageUpload('dp')}
            </div>

            <div>
                <p class="block text-sm font-medium heading">Banner Image</p>
                <p class="mt-1 text-sm sub-heading">
                    This image will be displayed at the top of your profile page
                </p>

                {#if bannerWarningMessage}
                    <p class="mt-2 text-sm text-red-500">{bannerWarningMessage}</p>
                {/if}

                <img
                    src={wrapDefault('banner', profileInfo.uploadedBanner)}
                    alt="Cover Banner"
                    class="mx-auto my-4 h-24 w-full rounded-md object-cover"
                />
                {@render imageUpload('banner')}
            </div>
        </div>

        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
                <label for="username" class="block text-sm font-medium heading">Handle</label>
                <p class="mt-1 text-sm sub-heading">
                    Choose a unique handle - brushhub.com/{profileInfo.username}
                </p>
                <input
                    type="text"
                    id="username"
                    bind:value={profileInfo.username}
                    class="mt-1 block w-full rounded-md entry shadow-sm focus:border-orange-500 focus:ring-orange-500"
                />
            </div>
            <div>
                <label for="displayName" class="block text-sm font-medium heading"
                    >Display Name</label
                >
                <p class="mt-1 text-sm sub-heading">
                    Choose a channel name that represents you and your content
                </p>
                <input
                    type="text"
                    id="displayName"
                    bind:value={profileInfo.displayName}
                    class="mt-1 block w-full rounded-md entry shadow-sm focus:border-orange-500 focus:ring-orange-500"
                />
            </div>
        </div>

        <div>
            <label for="bio" class="block text-sm font-medium heading">Bio</label>
            <textarea
                id="bio"
                rows="3"
                bind:value={profileInfo.bio}
                class="mt-1 block w-full rounded-md entry shadow-sm focus:border-orange-500 focus:ring-orange-500"
            ></textarea>
        </div>

        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
                <label for="languages" class="block text-sm font-medium heading">Languages</label>
                <div class="mt-1 block w-full rounded-md border border-gray-300 bg-white p-2 shadow-sm">
                    <div class="flex flex-wrap gap-2">
                        {#each profileInfo.languages as language, index}
                            <!-- svelte-ignore a11y_no_static_element_interactions, a11y_click_events_have_key_events -->
                            <div
                                class="items-center space-x-1 rounded px-2 py-1 justify-center flex
                                        !bg-orange-100 text-orange-500 dark:!bg-orange-500 dark:text-orange-100"
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
                        class="mt-2 block w-full rounded-md entry shadow-sm entry focus:border-orange-500 focus:ring-orange-500"
                        bind:value={languageValue}
                    />
                </div>
                <p class="mt-1 text-sm sub-heading">Enter a comma after every language</p>
            </div>

            <div>
                <label for="location" class="block text-sm font-medium heading">Location</label>
                <select
                    id="location"
                    bind:value={profileInfo.location}
                    class="mt-1 block w-full rounded-md entry shadow-sm focus:border-orange-500 focus:ring-orange-500"
                >
                    {#each getCountryList() as country}
                        <option value={country}>{country}</option>
                    {/each}
                </select>
            </div>
        </div>

        <div class="mt-6 space-y-2">
            <label for="location" class="block text-sm font-medium heading">External Links</label>
            <p class="text-sm sub-heading">
                Share external links with viewers. They'll be visible on your profile.
            </p>
            {#each profileInfo.links as link, index}
                <div class="flex items-center space-x-2">
                    <button
                        class="sub-heading hover:text-orange-500 disabled:text-gray-300"
                        onclick={() => moveLink(index, index - 1)}
                        disabled={index === 0}
                        aria-label="Move link up"
                    >
                        ▲
                    </button>

                    <button
                        class="sub-heading hover:text-orange-500 disabled:text-gray-300"
                        onclick={() => moveLink(index, index + 1)}
                        disabled={index === profileInfo.links.length - 1}
                        aria-label="Move link down"
                    >
                        ▼
                    </button>
                    <input
                        type="url"
                        bind:value={profileInfo.links[index]}
                        placeholder="Enter link URL"
                        class="w-full rounded-md entry shadow-sm focus:border-orange-500 focus:ring-orange-500"
                    />
                    <button
                        class="sub-heading hover:text-red-500"
                        onclick={() => profileInfo.links.splice(index, 1)}
                        aria-label="Remove link"
                    >
                        🗑️
                    </button>
                </div>
            {/each}

            <button
                class="mt-2 flex items-center text-orange-500 hover:underline"
                onclick={() => profileInfo.links.push('')}
            >
                <span class="mr-2 text-lg">+</span>
                Add new link
            </button>
        </div>
    </div>

    <div class="mt-6 flex justify-between space-x-4 items-center">
        <p class="text-sm sub-heading">
            *Disclaimer: Since no database is being used, some information like images and usernames are not retained after saving.
        </p>
        <div class="flex space-x-4">
            <button
                class="rounded border border-red-500 px-4 py-2 text-red-500 hover:bg-red-50"
                onclick={() => {
                    if (confirm('Are you sure you want to discard all changes?')) {
                        profileInfo = initialValue;
                    }
                }}
                >
                Discard Changes
            </button>
            <button class="rounded bg-orange-500 px-4 py-2 text-white hover:bg-orange-600"
                onclick={saveProfile}
            >Save</button>
        </div>
    </div>
</div>

<style>
    .entry {
        @apply border-stone-200 bg-stone-100 text-stone-700 dark:border-stone-600 dark:bg-stone-700 dark:text-stone-100
    }

    .heading {
        @apply text-stone-700 dark:text-stone-200
    }

    .sub-heading {
        @apply text-stone-500 dark:text-stone-400
    }
</style>