<script lang="ts">
    import Request from '$lib/components/Request.svelte';
    import type { ComponentProps } from 'svelte';
    let { props }: ComponentProps<any> = $props();

    const requestDB = props.requestDB;
    const openRequest = props.openRequest;
</script>

<div class="overflow-x-auto -mt-4 whitespace-nowrap">
    <table class="border-collapse text-left w-full">
        <thead>
            <tr class="border-b text-sm font-medium">
                <th class="px-4 py-2 w-4/12">SERVICE</th>
                <th class="px-4 py-2 w-2/12">TYPE</th>
                <th class="px-4 py-2 w-2/12">DEADLINE</th>
                <th class="px-4 py-2 w-2/12">STATE</th>
                <th class="px-4 py-2 w-2/12">ACTIONS</th>
            </tr>
        </thead>
        <tbody>
            {#each requestDB as request}
                <Request {request} {openRequest} artistOrCommissioner={props.artistOrCommissioner}/>
            {/each}
        </tbody>
    </table>
</div>
