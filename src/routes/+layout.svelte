<script lang="ts">
	// è is È.
	import '@fontsource-variable/montserrat';
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { getNavState } from '$lib/components/navstate.svelte';
	import Menu from '$lib/components/Layout/Menu.svelte';
	import Navbar from '$lib/components/Layout/Navbar.svelte';
	import { lenis } from '$lib/lenis';

	let { children } = $props();

	$effect(() => {
		// Prevent body scroll when the menu is open
		//document.body.style.overflow = getNavState() ? 'hidden' : 'auto';
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="relative h-full w-full overflow-x-hidden">
	<Navbar />

	<Menu />

	<div>
		<main
			class:translate-x-full={getNavState()}
			class="pt-20 transition-transform duration-1000 ease-in-out"
			style="transition-timing-function: cubic-bezier(0.15, 0.85, 0.45, 1);"
		>
			{@render children?.()}
		</main>
	</div>
</div>

<style>
	:global(body) {
		font-family: 'Montserrat Variable', sans-serif;
	}
</style>
