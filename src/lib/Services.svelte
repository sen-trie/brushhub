<script lang="ts">
    import type { ComponentProps } from 'svelte';
    let { serviceDB }: ComponentProps<any> = $props();

    const images: any = import.meta.glob(['$lib/assets/thumbnail/**'], {
        eager: true,
        query: '?url',
        import: 'default'
    });
</script>

<div class="service-grid mt-4 grid grid-cols-2 gap-4">
    {#each serviceDB as service}
        <div
            class="service flex flex-col rounded-lg border border-gray-200 p-4 shadow-sm"
        >
            <div class="relative w-full">
                <img
                    src={images['/src/lib/assets/thumbnail/' + service.thumbnail]}
                    alt="Service Thumbnail"
                    class="h-48 w-full object-cover rounded-md"
                />
                {#if !service.isOpen}
                    <span
                        class="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded"
                    >
                        CLOSED
                    </span>
                {/if}
            </div>
            <div class="mt-4">
                <h4 class="font-semibold text-lg">{service.title}</h4>
                <p class="text-green-600 mt-2">
                    {service.types.length > 0
                        ? `SGD ${Math.min(...service.types.map((type: any) => type.price))} ~ SGD ${Math.max(
                              ...service.types.map((type: any) => type.price)
                          )}`
                        : 'Price not set'}
                </p>
                <div class="mt-3 flex flex-wrap items-center gap-2">
                    {#if service.fastDelivery?.enabled}
                        <span
                            class="bg-yellow-100 text-yellow-600 text-xs font-medium px-2 py-1 rounded"
                        >
                            Fast Delivery
                        </span>
                    {/if}
                    {#if service.commercialUse?.enabled}
                        <span
                            class="bg-orange-100 text-orange-600 text-xs font-medium px-2 py-1 rounded"
                        >
                            Commercial
                        </span>
                    {/if}
                </div>
            </div>
        </div>
    {/each}
</div>