<script lang="ts">
    import type { ComponentProps } from 'svelte';
    import BackButtonArrow from '$lib/components/BackButtonArrow.svelte';
    import EditCommission from './EditCommission.svelte';
    import CreateCommission from './CreateCommission.svelte';

    const discardChanges = () => {
        if (confirm('Are you sure you want to discard all changes?')) {
            closeEdit();
        }
    };

    const { closeEdit, editOrCreate, props }: ComponentProps<any> = $props();
</script>

<div class="fixed inset-0 z-50 overflow-y-auto bg-white">
    <div class="relative p-6">
        <div
            class="mb-4 flex w-full justify-between border-b-2 px-2 pb-2
            pt-0 sm:px-4 md:px-6 lg:px-8"
        >
            <BackButtonArrow
                closeEdit={discardChanges}
                includeBorder={false}
                buttonText={editOrCreate ? 'Edit Service' : 'Create Service'}
            />
            <div class="flex">
                <button onclick={discardChanges} class="discard-button"
                    >{editOrCreate ? 'Discard Draft' : 'Discard Changes'}</button
                >
                <button class="save-button mx-4">Save and Leave</button>
            </div>
        </div>
        <div class="px-2 sm:px-6 md:px-10 lg:px-16">
            {#if editOrCreate}
                <EditCommission {closeEdit} selectedService={props} />
            {:else}
                <CreateCommission {closeEdit} currentArtist={props} />
            {/if}
        </div>
    </div>
</div>
