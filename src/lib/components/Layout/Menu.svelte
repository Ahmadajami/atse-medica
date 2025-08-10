<script lang="ts">
	import { setLocale } from '$lib/paraglide/runtime';
	import { getNavState, toggleNavState } from '../navstate.svelte';
	import Globe from '@lucide/svelte/icons/globe';
	let { isArabic = $bindable() } = $props();
	function translate(word: string, t: string) {
		return isArabic ? t : word;
	}
</script>

<div
	style="transition-timing-function: cubic-bezier(0.15, 0.85, 0.45, 1);"
	class="fixed top-0 z-10 h-screen w-screen transition-transform duration-700 ease-in-out
        ltr:left-0 ltr:-translate-x-full ltr:data-[open=true]:translate-x-0
        rtl:right-0 rtl:translate-x-full rtl:data-[open=true]:-translate-x-0"
	data-open={getNavState()}
>
	<!-- Fullscreen Nav Links -->
	<nav class="flex h-full w-full flex-col items-center justify-center space-y-8 text-2xl font-bold">
		<a href="#home" class="transition hover:text-primary" onclick={toggleNavState}
			>{translate('Home', 'الرئيسية')}</a
		>
		<a href="#about" class="transition hover:text-primary" onclick={toggleNavState}
			>{translate('About', 'من نحن')}</a
		>
		<a href="#services" class="transition hover:text-primary" onclick={toggleNavState}
			>{translate('Services', 'الخدمات')}</a
		>
		<a href="#contact" class="transition hover:text-primary" onclick={toggleNavState}
			>{translate('Contact', 'التواصل')}</a
		>
		<button
			class="m-0 p-0 hover:text-primary ltr:block rtl:hidden"
			onclick={() => {
				setLocale('ar');
			}}
		>
			<span class="mx-1"> Ar </span><Globe class="inline-block" /></button
		>

		<button
			class="hover:text-primary ltr:hidden rtl:block"
			onclick={() => {
				setLocale('en');
			}}
			><span class="mx-1"> EN</span><Globe class="inline-block" />
		</button>
	</nav>
</div>
