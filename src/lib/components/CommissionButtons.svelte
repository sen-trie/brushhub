<script lang="ts">
    import type { ComponentProps } from 'svelte';
    let {
        goToPreviousStep,
        proceedToNextStep,
        backwards,
        forwards,
        indexes = [0, 0],
        finalStep = (prop1: any) => {
            proceedToNextStep(prop1);
        },
        finalWord = forwards
    }: ComponentProps<any> = $props();

    // FIRST IS CURRENT INDEX
    // SECOND IS MAX INDEX
    const isIndexEmpty = indexes[0] === 0 && indexes[1] === 0;
</script>

{#snippet backButton(extraClass: string = '')}
    <button class="confirm-button {extraClass}" onclick={goToPreviousStep}>
        {backwards}
    </button>
{/snippet}

{#snippet forwardButton()}
    <button
        class="confirm-button {forwards === 'Submit Request' ? 'save-button' : ''}"
        onclick={proceedToNextStep}
    >
        {forwards}
    </button>
{/snippet}

<div class="mt-6 flex items-center justify-between">
    {#if isIndexEmpty}
        {@render backButton()}
        {@render forwardButton()}
    {:else}
        {@render backButton(indexes[0] === 0 ? 'invisible' : '')}
        {#if indexes[0] != indexes[1]}
            {@render forwardButton()}
        {:else}
            <button class="confirm-button save-button" onclick={finalStep}>
                {finalWord}
            </button>
        {/if}
    {/if}
</div>
