<script lang="ts">
    import Tabs from './Tabs.svelte';
    import ViewProgress from '$lib/components/ViewProgress.svelte';
    import ViewSummary from '$lib/components/ViewSummary.svelte';
    import type { ComponentProps } from 'svelte';
    let { closeRequest, request }: ComponentProps<any> = $props();

    let items = [
        {
            label: 'Progress',
            value: 1,
            component: ViewProgress,
            props: {
                request: request
            }
        },
        {
            label: 'Request Summary',
            value: 2,
            component: ViewSummary,
            props: {}
        }
    ];
</script>

<div class="fixed inset-0 z-50 overflow-y-auto bg-white">
    <div class="relative p-6">
        <button
            class="mb-4 flex items-center space-x-2 text-sm font-bold text-orange-500"
            onclick={closeRequest}
            aria-label="Back"
        >
            <i class="fas fa-arrow-left"></i>
            <span>Back</span>
        </button>
        <Tabs {items} />
    </div>
</div>
