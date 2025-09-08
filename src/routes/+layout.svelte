<script lang="ts">
	// è is È.
	import '@fontsource-variable/montserrat';
	import '../app.css';
	import favicon from '$lib/assets/atse-logo.png';
	import { getNavState } from '$lib/components/navstate.svelte';
	import Menu from '$lib/components/Layout/Menu.svelte';
	import Navbar from '$lib/components/Layout/Navbar.svelte';
	import { m } from '$lib/paraglide/messages';
	import Footer from '$lib/components/Layout/footer.svelte';
	import { scrollLenis } from '$lib/lenis';


	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />

	<title>{m.homepage_title()}</title>

	<meta name="description" content={m.homepage_description()} />
	<meta name="keywords" content={m.homepage_keywords()} />
	<meta name="author" content={m.clinic_author()} />

	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://atse-medica.vercel.app/" />
	<meta property="og:title" content={m.homepage_title()} />
	<meta property="og:description" content={m.homepage_description()} />
	<meta property="og:image" content="https://atse-medica.vercel.app/atse-logo.png" />

	<link rel="canonical" href="https://atse-medica.vercel.app/" />
</svelte:head>

<div class="relative h-full w-full overflow-x-hidden">
	<Navbar />

	<Menu />

	<div use:scrollLenis>
		<main
			class:translate-x-full={getNavState()}
			class="pt-20 transition-transform duration-1000 ease-in-out"
			style="transition-timing-function: cubic-bezier(0.15, 0.85, 0.45, 1);"
		>
			{@render children?.()}
		</main>
	</div>
</div>

<Footer />

<style>
	:global(body) {
		font-family: 'Montserrat Variable', sans-serif;
	}
</style>
