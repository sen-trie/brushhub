<script lang="ts">
    import { getPreferredCurrency } from '$lib/util';
    let { tab = $bindable(), removeSelf, extra = false } = $props();
    let openState = $state(false);
</script>

{#snippet closeButton(text: String)}
    <button
        class="absolute right-2 hover:text-orange-500 underline"
        onclick={() => (openState = !openState)}
    >
        {text}
    </button>
{/snippet}

<div class="flex items-center justify-between rounded-lg border p-4 shadow entry">
    <button class="mr-4 {openState ? 'hidden sm:visible' : ''} 
                    text-red-500 hover:text-red-700" onclick={removeSelf}>Remove</button>
    {#if !openState}
        <div class="relative grow">
            {@render closeButton('Edit')}
            <div class="flex flex-col gap-2">
                {#if tab.name}
                    <h3 class="text-lg font-bold max-w-32 xs:max-w-3xl">{tab.name}</h3>
                {:else}
                    <i class="fas text-lg font-bold">(Missing Name)</i>
                {/if}

                {#if tab.description}
                    <p class="text-sm">
                        {tab.description}
                    </p>
                {:else}
                    <i class="fas fa-pencil-alt text-sm">(Missing Description)</i>
                {/if}

                {#if tab.price}
                    <p class="text-sm font-medium">
                        {tab.price}
                        {tab.type === 'percentage' ? '%' : getPreferredCurrency()}
                    </p>
                {:else}
                    <i class="fas fa-pencil-alt text-sm">(Missing Price)</i>
                {/if}
            </div>
        </div>
    {:else}
        <div class="relative grow">
            {@render closeButton('Close')}
            <div class="space-y-4">
                <div>
                    <!-- svelte-ignore a11y_label_has_associated_control -->
                    <label class="block text-base font-medium">Name*</label>
                    <input
                        type="text"
                        placeholder={tab.name}
                        bind:value={tab.name}
                        class="mt-1 block w-3/4 sm:w-1/2 
                              rounded-md entry shadow-sm focus:border-orange-500 focus:ring-orange-500"
                    />
                </div>
                <div>
                    <!-- svelte-ignore a11y_label_has_associated_control -->
                    <label class="block text-base font-medium">Price*</label>
                    <div class="flex items-center gap-2">
                        <input
                            type="number"
                            placeholder={tab.price}
                            bind:value={tab.price}
                            class="mt-1 block w-3/4 sm:w-1/2 
                                    rounded-md entry shadow-sm focus:border-orange-500 focus:ring-orange-500"
                        />
                        {#if extra === true}
                            <select
                                bind:value={tab.type}
                                class="mt-1 block w-1/2 rounded-md entry shadow-sm focus:border-orange-500 focus:ring-orange-500"
                            >
                                <option value="percentage">%</option>
                                <option value="currency">{getPreferredCurrency()}</option>
                            </select>
                        {/if}
                    </div>
                </div>
                <div>
                    <!-- svelte-ignore a11y_label_has_associated_control -->
                    <label class="block text-base font-medium ">Description</label>
                    <textarea
                        bind:value={tab.description}
                        class="mt-1 block w-full rounded-md entry shadow-sm focus:border-orange-500 focus:ring-orange-500"
                        placeholder="Description..."
                    ></textarea>
                </div>
            </div>
        </div>
    {/if}
</div>
