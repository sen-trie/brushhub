<script lang="ts">
    import type { ComponentProps } from 'svelte';
    let { goToPreviousStep, proceedToNextStep, backwards, forwards }: ComponentProps<any> =
        $props();
</script>

<div class="mt-6 flex items-center justify-between">
    <button class="flex items-center font-medium text-orange-500" onclick={goToPreviousStep}>
        <i class="fas fa-arrow-left mr-2"></i>
        {backwards}
    </button>
    <!-- FIX ALIGNMENT TODO -->
    <button
        class="flex items-center rounded-lg bg-orange-500 px-4 py-2 font-medium text-white"
        onclick={proceedToNextStep}
        ><i class="fas fa-arrow-right ml-2">
            {forwards}
        </i>
    </button>
</div>
