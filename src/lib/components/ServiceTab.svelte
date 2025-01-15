<script lang="ts">
    import { getPreferredCurrency } from '$lib/util';
    let { tab = $bindable(), removeSelf, extra = false } = $props();
    let openState = $state(false);
</script>

{#snippet closeButton(text: String)}
    <button
        class="absolute right-2 text-gray-500 hover:text-orange-500"
        onclick={() => (openState = !openState)}
    >
        {text}
    </button>
{/snippet}

<div class="flex items-center justify-between rounded-lg border p-4 shadow">
    <button class="mr-4 text-red-500 hover:text-red-700" onclick={removeSelf}>Remove</button>
    {#if !openState}
        <div class="relative grow">
            {@render closeButton('Edit')}
            <div class="flex flex-col gap-2">
                {#if tab.name}
                    <h3 class="text-lg font-bold text-gray-800">{tab.name}</h3>
                {:else}
                    <i class="fas text-lg font-bold text-gray-800">(Missing Name)</i>
                {/if}

                {#if tab.description}
                    <p class="text-sm text-gray-500">
                        {tab.description}
                    </p>
                {:else}
                    <i class="fas fa-pencil-alt text-sm text-gray-500">(Missing Description)</i>
                {/if}

                {#if tab.price}
                    <p class="text-sm font-medium text-gray-900">
                        {tab.price}
                        {tab.type === 'percentage' ? '%' : getPreferredCurrency()}
                    </p>
                {:else}
                    <i class="fas fa-pencil-alt text-sm text-gray-500">(Missing Price)</i>
                {/if}
            </div>
        </div>
    {:else}
        <div class="relative grow">
            {@render closeButton('Close')}
            <div class="space-y-4">
                <div class="mt-4">
                    <label class="block text-base font-medium text-gray-700">Name*</label>
                    <input
                        type="text"
                        placeholder={tab.name}
                        bind:value={tab.name}
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                    />
                </div>
                <div>
                    <label class="block text-base font-medium text-gray-700">Price*</label>
                    <div class="flex items-center gap-2">
                        <input
                            type="number"
                            placeholder={tab.price}
                            bind:value={tab.price}
                            class="mt-1 block w-1/2 rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                        />
                        {#if extra === true}
                            <select
                                bind:value={tab.type}
                                class="mt-1 block w-1/2 rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                            >
                                <option value="percentage">%</option>
                                <option value="currency">{getPreferredCurrency()}</option>
                            </select>
                        {/if}
                    </div>
                </div>
                <div>
                    <label class="block text-base font-medium text-gray-700">Description</label>
                    <textarea
                        bind:value={tab.description}
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                        placeholder="Description..."
                    ></textarea>
                </div>
            </div>
        </div>
    {/if}
</div>
