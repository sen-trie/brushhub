<script lang="ts">
	import { browser } from '$app/environment';
	import { navigateTo } from '$lib/util';
	import type { ComponentProps } from 'svelte';

    let { toggleSidebar }: ComponentProps<any> = $props();

	const defaultValue = '';
	const username = browser
		? (window.localStorage.getItem('username') ?? defaultValue)
		: defaultValue;

</script>

<header>
	<nav>
		<ul>
            <li><button onclick={() => toggleSidebar()}>Sidebar</button></li>
			<li><button onclick={() => navigateTo('/')}>BrushHub</button></li>
			<li><button onclick={() => navigateTo('/account')}>Account</button></li>
            {#if !!username}
                <p>Logged in as {username}</p>
            {/if}
		</ul>
	</nav>
</header>

<style>
	header {
		background-color: #333;
		color: #fff;
		padding: 1rem;
		text-align: center;
	}
	nav ul {
		display: flex;
		gap: 1rem;
		list-style: none;
	}
</style>
