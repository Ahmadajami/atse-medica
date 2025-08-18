<script lang="ts">
	import { localizeHref, setLocale } from '$lib/paraglide/runtime';
	import Globe from '@lucide/svelte/icons/globe';

	import BrandName from '$lib/components/Layout/BrandName.svelte';

	import Hamburger from '$lib/components/Layout/Hamburger.svelte';
	import logo from '$lib/assets/atse-logo.png?enhanced';
	let { isArabic = $bindable() } = $props();
	function translate(word: string, t: string) {
		return isArabic ? t : word;
	}
</script>

<nav class="bg-base-100/80 fixed top-0 right-0 left-0 z-40 h-16 w-full backdrop-blur-sm">
	<div class="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
		<a href={localizeHref('/')} class="flex items-center space-x-2">
			<enhanced:img src={logo} width="40" height="40" class="inline-flex" alt="Atse Medica Logo" />
			<BrandName bind:isArabic />
		</a>

		<ul class="hidden space-x-8 font-medium md:flex">
			<li><a href="#home" class="hover:text-primary">{translate('Home', 'الرئيسية')}</a></li>
			<li><a href="#about" class="hover:text-primary">{translate('About', 'من نحن')}</a></li>
			<li><a href="#services" class="hover:text-primary">{translate('Services', 'الخدمات')}</a></li>
			<li><a href="#contact" class="hover:text-primary">{translate('Contact', 'التواصل')}</a></li>
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
