<script lang="ts">
    import Request from '$lib/components/Request.svelte';
    import type { ComponentProps } from 'svelte';
    let { props }: ComponentProps<any> = $props();

    const requestDB = props.requestDB;
    const openRequest = props.openRequest;
</script>

<table class="w-full border-collapse text-left -mt-4">
    <thead>
        <tr class="border-b text-sm font-medium text-gray-700">
            <th class="px-4 py-2">SERVICE</th>
            <th class="px-4 py-2">TYPE</th>
            <th class="px-4 py-2">DEADLINE</th>
            <th class="px-4 py-2">STATE</th>
            <th class="px-4 py-2">ACTIONS</th>
        </tr>
    </thead>
    <tbody>
        {#each requestDB as request}
            <Request {request} {openRequest} />
        {/each}
    </tbody>
</table>
