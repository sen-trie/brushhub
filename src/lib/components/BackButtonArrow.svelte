<script lang="ts">
    import { Icon, ArrowLeft } from 'svelte-hero-icons';
    import type { ComponentProps } from 'svelte';

    const { closeEdit, buttonText, includeBorder = true }: ComponentProps<any> = $props();
</script>

<div class="ml-4 flex {includeBorder ? 'mb-4 border-b-2' : ''}">
    <button
        class="flex items-center space-x-2 text-sm font-bold"
        onclick={closeEdit}
        aria-label="Back"
    >
        <Icon src={ArrowLeft} size="24" />
    </button>
    <h1 class="mb-1 ml-4 flex items-center text-2xl font-bold">{buttonText}</h1>
</div>
