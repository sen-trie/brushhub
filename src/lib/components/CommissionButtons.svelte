<script lang="ts">
    import type { ComponentProps } from 'svelte';
    let { goToPreviousStep, proceedToNextStep, backwards, forwards, indexes = [0, 0] }: ComponentProps<any> =
        $props();

    // FIRST IS CURRENT INDEX
    // SECOND IS MAX INDEX
    const isIndexEmpty = (indexes[0] === 0 && indexes[1] === 0);

</script>

<div class="mt-6 flex items-center justify-between">
    {#if isIndexEmpty}
        <button class="flex items-center font-medium text-orange-500" onclick={goToPreviousStep}>
            <i class="fas fa-arrow-left mr-2"></i>
            {backwards}
        </button>
        <button
            class="confirm-button {forwards === 'Submit Request' ? 'save-button' : ''}"
            onclick={proceedToNextStep}
        >
            {forwards}
        </button>
    {:else}
        <button 
            class="flex items-center font-medium text-orange-500
                {indexes[0] === 0 ? 'invisible' : ''}
            " 
            onclick={goToPreviousStep}
        >
            {backwards}
        </button>
        {#if indexes[0] != indexes[1]}
            <button
                class="confirm-button {forwards === 'Submit Request' ? 'save-button' : ''}"
                onclick={proceedToNextStep}
            >
                {forwards}
            </button>
        {/if}
    {/if}
</div>
