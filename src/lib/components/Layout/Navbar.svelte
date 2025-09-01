<script lang="ts">
	import { scrollY } from 'svelte/reactivity/window';
	import { localizeHref, setLocale } from '$lib/paraglide/runtime';
	import Globe from '@lucide/svelte/icons/globe';
	import BrandName from '$lib/components/Layout/BrandName.svelte';

	import Hamburger from '$lib/components/Layout/Hamburger.svelte';
	import logo from '$lib/assets/atse-logo.png?enhanced';
	import { lenis, easeInOutCubic } from '$lib/lenis';
	import { onDestroy } from 'svelte';
	import { m } from '$lib/paraglide/messages';
	
	function scrollToHash(e: MouseEvent) {
		e.preventDefault();
		if (!lenis) return;

		const target = (e.currentTarget as HTMLAnchorElement).hash;
		if (!target) return;

		const el = document.querySelector<HTMLElement>(target);
		if (el) {
			lenis.scrollTo(el, { duration: 2, easing: easeInOutCubic });
			shy = true;
		}
	}

	let lastScrollY = $state(0);
	let shy = $state(false);

	const handleScroll = () => {
		if (scrollY) {
			const scrollingDown = lastScrollY < scrollY.current!;
			shy = scrollingDown && scrollY.current! > 200;
			lastScrollY = scrollY.current!;
		}
	};
	onDestroy(() => {
		if (lenis) lenis.destroy();
	});
</script>

<svelte:window onscroll={handleScroll} />

<nav
	class:nav-slide={shy}
	class=" bg-base-100/80 fixed top-0 right-0 left-0 z-40 h-16 w-full backdrop-blur-sm delay-75"
>
	<div class="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
		<a href={localizeHref('/')} class="flex items-center space-x-2">
			<enhanced:img src={logo} width="40" height="40" class="inline-flex" alt="Atse Medica Logo" />
			<BrandName />
		</a>

		<ul class="hidden space-x-8 font-medium md:flex">
			<li>
				<a href="#hero" onclick={(e) => scrollToHash(e)} class="hover:text-primary"> {m.home()}</a>
			</li>
			<li>
				<a href="#about" onclick={(e) => scrollToHash(e)} class="hover:text-primary">{m.about()}</a>
			</li>
			<li>
				<a href="#services" onclick={(e) => scrollToHash(e)} class="hover:text-primary"
					>{m.services()}</a
				>
			</li>
			<li>
				<a href="#contact" onclick={(e) => scrollToHash(e)} class="hover:text-primary"
					>{m.contact()}</a
				>
			</li>
			<li>
				<button
					class="m-0 p-0 hover:text-primary ltr:block rtl:hidden"
					onclick={() => {
						setLocale('ar');
					}}><span class="mx-1"> Ar</span><Globe class="inline-block" /></button
				>
			</li>
			<li>
				<button
					class="hover:text-primary ltr:hidden rtl:block"
					onclick={() => {
						setLocale('en');
					}}
					><span class="mx-1"> EN</span><Globe class="inline-block" />
				</button>
			</li>
		</ul>

		<div class="md:hidden">
			<Hamburger />
		</div>
	</div>
</nav>

<style>
	.nav-slide {
		transform: translateY(-200%);
		transition: transform 0.5s ease-in-out;
	}
</style>
