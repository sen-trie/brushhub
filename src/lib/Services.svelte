<script lang="ts">
    import type { ComponentProps } from 'svelte';
    let { serviceDB, toggleToService }: ComponentProps<any> = $props();

    const images: any = import.meta.glob(['$lib/assets/thumbnail/**'], {
        eager: true,
        query: '?url',
        import: 'default'
    });
</script>
<!-- 
TODO -->
<div class="service-grid mt-4 grid grid-cols-2 gap-4">
    {#each serviceDB as service}
        <div 
            class="service flex flex-col rounded-lg border border-gray-200 p-4 shadow-sm"
            onclick={() => toggleToService(service)}
        >
            <div class="relative w-full">
                <img
                    src={images['/src/lib/assets/thumbnail/' + service.thumbnail]}
                    alt="Service Thumbnail"
                    class="h-48 w-full rounded-md object-cover"
                />
                {#if !service.isOpen}
                    <span
                        class="absolute right-2 top-2 rounded bg-red-600 px-2 py-1 text-xs font-bold text-white"
                    >
                        CLOSED
                    </span>
                {/if}
            </div>
            <div class="mt-4">
                <h4 class="text-lg font-semibold">{service.title}</h4>
                <p class="mt-2 text-green-600">
                    {service.types.length > 0
                        ? `SGD ${Math.min(...service.types.map((type: any) => type.price))} ~ SGD ${Math.max(
                              ...service.types.map((type: any) => type.price)
                          )}`
                        : 'Price not set'}
                </p>
                <div class="mt-3 flex flex-wrap items-center gap-2">
                    {#if service.fastDelivery?.enabled}
                        <span
                            class="rounded bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-600"
                        >
                            Fast Delivery
                        </span>
                    {/if}
                    {#if service.commercialUse?.enabled}
                        <span
                            class="rounded bg-orange-100 px-2 py-1 text-xs font-medium text-orange-600"
                        >
                            Commercial
                        </span>
                    {/if}
                </div>
            </div>
        </div>
    {/each}
</div>
