<script>
    let { tab, removeSelf = () => {}, downpayment = false } = $props();
    let openState = $state(false);
</script>

<div class="flex items-center justify-between rounded-lg border p-4 shadow">
    {#if !downpayment}
        <button class="mr-6 text-red-500 hover:text-red-700" onclick={() => removeSelf()}
            >Remove</button
        >
    {/if}

    {#if !openState}
        <div class="relative grow">
            <button
                class="absolute right-2 top-2 hover:text-orange-500"
                onclick={() => (openState = !openState)}
            >
                Edit
            </button>
            <div class="flex flex-col gap-2">
                {#if tab.name}
                    <h3 class="text-lg font-bold">
                        {tab.name}
                        <p class="text-sm font-medium">
                            {tab.payment.enabled
                                ? `Pay ${tab.payment.value}%`
                                : 'No Payment Required'}
                        </p>
                        <p class="text-sm font-medium">
                            {tab.duration.enabled
                                ? ` Due within ${tab.duration.value} ${tab.duration.unit}`
                                : ''}
                        </p>
                    </h3>
                {:else if downpayment}
                    <h3 class="text-lg font-bold ">
                        Down Payment
                        <p class="text-sm font-medium ">
                            {tab.payment.enabled
                                ? `Pay ${tab.payment.value}%`
                                : 'No Down Payment Required'}
                        </p>
                    </h3>
                {:else}
                    <i class="fas text-lg font-bold ">(Missing Name)</i>
                {/if}
            </div>
        </div>
    {:else}
        <div class="relative grow">
            <button
                class="absolute right-2 top-2 hover:text-orange-500"
                onclick={() => (openState = !openState)}
            >
                Close
            </button>
            <div class="space-y-4">
                <div>
                    {#if downpayment}
                        <h3 class="text-lg font-bold">Down Payment</h3>
                    {:else}
                        <label class="block text-sm font-medium">Name*</label>
                        <input
                            type="text"
                            placeholder={tab.name}
                            bind:value={tab.name}
                            class="mt-1 block w-1/2 rounded-md entry shadow-sm focus:border-orange-500 focus:ring-orange-500"
                        />
                    {/if}
                </div>

                {#if !downpayment}
                    <div class="mt-2 flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="checkbox-duration"
                            bind:checked={tab.duration.enabled}
                            class="h-4 w-4 text-orange-500 focus:ring-orange-500"
                        />
                        <label for="checkbox-duration" class="select-none text-sm">
                            Duration
                        </label>
                        <input
                            type="number"
                            min="0"
                            max="100"
                            placeholder={tab.duration.value}
                            bind:value={tab.duration.value}
                            class="ml-2 w-24 rounded-md entry shadow-sm focus:border-orange-500 focus:ring-orange-500"
                        />
                        <select
                            bind:value={tab.duration.unit}
                            class="ml-2 w-32 rounded-md entry shadow-sm focus:border-orange-500 focus:ring-orange-500"
                        >
                            <option value="days">days</option>
                            <option value="weeks">weeks</option>
                        </select>
                    </div>
                {/if}

                <div class="mt-2 flex items-center gap-2">
                    <input
                        type="checkbox"
                        id="checkbox-payment"
                        bind:checked={tab.payment.enabled}
                        class="h-4 w-4 text-orange-500 focus:ring-orange-500"
                    />
                    <label for="checkbox-payment" class="select-none text-sm">
                        Payment
                    </label>
                    <input
                        type="number"
                        min="0"
                        max="100"
                        placeholder={tab.payment.value}
                        bind:value={tab.payment.value}
                        onchange={() => {
                            tab.payment.value = Math.min(100, Math.max(0, tab.payment.value));
                        }}
                        class="ml-2 w-24 rounded-md entry shadow-sm focus:border-orange-500 focus:ring-orange-500"
                    />
                    <span class="ml-1 text-sm">%</span>
                </div>
            </div>
        </div>
    {/if}
</div>
