<script lang="ts">
    import { Icon, XMark } from "svelte-hero-icons";
    let { size = "24" }: { size: string } = $props();
</script>

<Icon src={XMark} {size}/>