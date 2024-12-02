<script>
    let { tab, removeSelf, extra = false } = $props();

    let openState = $state(false);
</script>

<div class="mb-4 flex items-center justify-between rounded-lg border p-4 shadow">
    <button class="mr-4 text-red-500 hover:text-red-700" onclick={removeSelf}>Remove</button>
    {#if !openState}
        <div class="relative grow">
            <button
                class="absolute right-2 top-2 text-gray-500 hover:text-orange-500"
                onclick={() => (openState = !openState)}
            >
                Edit
            </button>
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
                        {tab.type === 'percentage' ? '%' : 'USD'}
                    </p>
                {:else}
                    <i class="fas fa-pencil-alt text-sm text-gray-500">(Missing Price)</i>
                {/if}
            </div>
        </div>
    {:else}
        <div class="relative grow">
            <div class="mb-4 flex items-center justify-between">
                <h3 class="text-lg font-bold text-gray-800">Edit "{tab.name}"</h3>
            </div>
            <button
                class="absolute right-2 top-2 text-gray-500 hover:text-orange-500"
                onclick={() => (openState = !openState)}
            >
                Close
            </button>
            <div class="space-y-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700">Name*</label>
                    <input
                        type="text"
                        bind:value={tab.name}
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                    />
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700">Price*</label>
                    <div class="flex items-center gap-2">
                        <input
                            type="number"
                            bind:value={tab.price}
                            class="mt-1 block w-1/2 rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                        />
                        {#if extra === true}
                            <select
                                bind:value={tab.type}
                                class="mt-1 block w-1/2 rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                            >
                                <option value="percentage">%</option>
                                <option value="currency">USD</option>
                            </select>
                        {/if}
                    </div>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700">Description</label>
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
