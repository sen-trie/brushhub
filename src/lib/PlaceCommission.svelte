<script lang="ts">
    import Milestone from '$lib/components/Milestone.svelte';
    import type { ComponentProps } from 'svelte';
    let { selectedService, closePlaceCommission }: ComponentProps<any> = $props();

    let progress = $state(0);
    const steps = [
        ['Service Details', 'Agree and Continue'],
        ['Milestones and ToS', 'Proceed to Check Out'],
        ['Commission Request', 'Pay Now'],
    ]

    function proceedToNextStep() {
        if (progress < steps.length - 1) {
            progress += 1;
        }
    }

    function goToPreviousStep() {
        if (progress > 0) {
            progress -= 1;
        } else {
            closePlaceCommission();
        }
    }

</script>

<div class="fixed inset-0 z-50 overflow-y-auto bg-white">
    <div class="relative p-6">
        <button
            class="mb-4 flex items-center space-x-2 text-sm font-bold text-orange-500"
            onclick={closePlaceCommission}
            aria-label="Back"
        >
            <i class="fas fa-arrow-left"></i>
            <span>Back</span>
        </button>

        <div class="space-y-2">
            <h1 class="text-3xl font-bold">{selectedService.title}</h1>
            <p class="text-sm text-gray-500">Anne the Hungry</p>
        </div>

        {#if progress === 0}
            <h2 class="mt-6 text-lg font-semibold">Milestones</h2>
            <p class="text-sm text-gray-500">
                * Your money will be held and paid to the artist as per the completion of milestones.
            </p>

            <Milestone {selectedService} />

            <h2 class="mt-6 text-lg font-semibold">Terms of Services</h2>
            <div class="mt-4 space-y-2">
                {#each selectedService.termsOfService as term}
                    <details class="rounded-md border p-4">
                        <summary class="text-sm font-semibold">{term.title}</summary>
                        <p class="mt-2 text-sm text-gray-500">{term.details}</p>
                    </details>
                {/each}
            </div>

            <p class="mt-6 text-sm text-gray-500">
                * By proceeding to the commission, you agree with the proposed milestones and terms of
                service.
            </p>

            <div class="mt-6 flex items-center justify-between">
                <button
                    class="flex items-center font-medium text-orange-500"
                    onclick={goToPreviousStep}
                >
                    <i class="fas fa-arrow-left mr-2"></i> {steps[progress][0]}
                </button>
                <!-- FIX ALIGNMENT TODO -->
                <button
                    class="flex items-center rounded-lg bg-orange-500 px-4 py-2 font-medium text-white"
                    onclick={proceedToNextStep}
                ><i class="fas fa-arrow-right ml-2">
                    {steps[progress][1]}
                </i>
                </button>
            </div>
        {:else if progress === 1}
            <div class="rid grid-cols-2 gap-6 p-6">
                <div>
                    <div class="mb-4">
                        <label for="type" class="block font-medium text-sm text-gray-700">Type *</label>
                        <!-- <select
                            id="type"
                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                            bind:value={selectedType}
                        >
                            <option>Full body</option>
                            <option>Half body</option>
                            <option>Headshot</option>
                        </select> -->
                    </div>
            
                    <div class="mb-4">
                        <label for="extras" class="block font-medium text-sm text-gray-700">Extras</label>
                        <!-- <select
                            id="extras"
                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                            multiple
                            bind:value={selectedExtras}
                        >
                            <option>Detailed Background</option>
                            <option>Layered for Animation</option>
                            <option>Extra Characters</option>
                        </select> -->
                    </div>
            
                    <div class="mb-4">
                        <label for="brief" class="block font-medium text-sm text-gray-700">Brief *</label>
                        <!-- <textarea
                            id="brief"
                            rows="3"
                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                            placeholder="Input your brief idea..."
                            bind:value={brief}
                        ></textarea> -->
                        <div class="mt-2 flex items-center">
                            <span class="text-sm text-gray-500 mr-2">Or</span>
                            <label
                                for="upload-brief"
                                class="cursor-pointer rounded border border-gray-300 px-3 py-1 text-sm text-orange-500 hover:bg-orange-50"
                            >
                                Upload your brief
                            </label>
                            <input
                                id="upload-brief"
                                type="file"
                                class="hidden"
                            />
                        </div>
                    </div>
            
                    <div class="mb-4">
                        <label for="deadline" class="block font-medium text-sm text-gray-700">Deadline *</label>
                        <!-- <input
                            id="deadline"
                            type="date"
                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                            bind:value={deadline}
                        /> -->
                    </div>
            
                    <div class="mb-4">
                        <label for="add-in-services" class="block font-medium text-sm text-gray-700">Add-in services</label>
                        <div class="mt-2">
                            <div class="flex items-center">
                                <!-- <input
                                    id="commercial-use"
                                    type="checkbox"
                                    class="h-4 w-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                                    bind:checked={commercialUse}
                                /> -->
                                <label for="commercial-use" class="ml-2 text-sm text-gray-700">Commercial use</label>
                            </div>
                            <p class="text-xs text-gray-500 mt-1">+ 100%</p>
                        </div>
                    </div>
<!--             
                    <p class="text-green-600 font-bold text-lg mt-4">SGD {totalPrice}</p> -->
                </div>
            
                <!-- Right Section -->
                <div>
                    <h3 class="font-medium text-sm text-gray-700">References</h3>
                    <div
                        class="mt-2 h-48 w-full rounded-md border border-dashed border-gray-300 bg-gray-50 flex items-center justify-center"
                    >
                        <span class="text-sm text-gray-500">No images uploaded</span>
                    </div>
                    <!-- <button
                        class="mt-4 bg-orange-500 text-white rounded px-4 py-2 text-sm font-medium hover:bg-orange-600"
                        onclick={handleFileUpload}
                    >
                        Upload images
                    </button> -->
                    <!-- <input
                        type="file"
                        accept="image/*"
                        multiple
                        class="hidden"
                        onchange={handleFileUpload}
                    /> -->
                </div>
                
                <div class="mt-6 flex items-center justify-between">
                    <button
                        class="flex items-center font-medium text-orange-500"
                        onclick={goToPreviousStep}
                    >
                        <i class="fas fa-arrow-left mr-2"></i> {steps[progress][0]}
                    </button>
                    <button
                        class="flex items-center rounded-lg bg-orange-500 px-4 py-2 font-medium text-white"
                        onclick={proceedToNextStep}
                    >
                    {steps[progress][1]} <i class="fas fa-arrow-right ml-2"></i>
                    </button>
                </div>
            </div>
        {/if}

    </div>
</div>
