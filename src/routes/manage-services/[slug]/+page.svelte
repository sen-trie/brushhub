<script lang="ts">
    import Services from '$lib/Services.svelte';
    import type { Service } from '$lib/types';
    import type { PageData } from './$types';
    let { data }: { data: PageData } = $props();

    const serviceDB: Service[] = data?.service;
</script>

<div class="overview-container p-4">
    <section class="mb-8">
        <h2 class="mb-4 text-lg font-semibold">Published</h2>
        <Services {serviceDB} filter={'published'} />
    </section>
    <section class="mb-8">
        <h2 class="mb-4 text-lg font-semibold">Archived</h2>
        <Services {serviceDB} filter={'archived'} />
    </section>
    <section class="mb-8">
        <h2 class="mb-4 text-lg font-semibold">Draft</h2>
        <Services {serviceDB} filter={'draft'} />
    </section>
</div>
