<script lang="ts">
    import { Icon, ArrowLeft } from 'svelte-hero-icons';
    import type { ComponentProps } from 'svelte';

    const { closeEdit, buttonText, includeBorder = false }: ComponentProps<any> = $props();
</script>

<div class="flex {includeBorder ? 'mb-4 border-b-2 pb-2' : ''}">
    <button class="flex items-center gap-2 space-x-2 text-sm" onclick={closeEdit} aria-label="Back">
        <Icon src={ArrowLeft} size="24" />
        <h1 class="mb-1 ml-4 flex items-center text-xl font-bold">{buttonText}</h1>
    </button>
</div>
