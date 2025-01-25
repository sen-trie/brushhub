<script>
    let { tab, unique = false, removeSelf = () => {} } = $props();
    let openState = $state(false);
</script>

<div class="entry flex items-center justify-between rounded-lg border p-4 shadow">
    {#if unique}
        <button class="mr-4 text-red-500 hover:text-red-700" onclick={() => removeSelf()}
            >Remove</button
        >
    {:else}
        <input
            type="checkbox"
            id="checkbox-enabled"
            placeholder={tab.enabled}
            bind:checked={tab.enabled}
            class="mr-4 h-4 w-4 text-orange-500 focus:ring-orange-500
                   {openState ? 'hidden sm:visible' : ''}"
        />
    {/if}

    {#if !openState}
        <div class="relative grow">
            <button
                class="absolute right-2 hover:text-orange-500"
                onclick={() => (openState = !openState)}
            >
                Edit
            </button>
            <div class="flex flex-col gap-2">
                <h3 class="text-lg font-bold">
                    {tab.title}
                </h3>
            </div>
        </div>
    {:else}
        <div class="relative grow">
            <button
                class="absolute right-2 hover:text-orange-500"
                onclick={() => (openState = !openState)}
            >
                Edit
            </button>
            <div class="flex flex-col gap-2 pr-16">
                <input
                    type="text"
                    placeholder={tab.title}
                    bind:value={tab.title}
                    class="mt-1 block w-full rounded-md entry shadow-sm focus:border-orange-500 focus:ring-orange-500"
                />
                {#if unique}
                    <div class="flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="global-enabled"
                            bind:checked={tab.global}
                            class="h-4 w-4 text-orange-500 focus:ring-orange-500"
                        />
                        <label for="global-enabled" class="text-sm font-medium">
                            Add this term to global contract (applied when saved)
                        </label>
                    </div>
                {/if}
                <textarea
                    id="brief"
                    rows="3"
                    class="mt-1 block w-full rounded-md entry shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                    placeholder={tab.details}
                    bind:value={tab.details}
                ></textarea>
            </div>
        </div>
    {/if}
</div>
