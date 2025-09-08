<script lang="ts">
	import { easeInOutCubic, lenis } from '$lib/lenis';
	import Heart from '@lucide/svelte/icons/heart';
	import { Button } from '$lib/components/ui/button/index';

	import { m } from '$lib/paraglide/messages';
	import { getLocale } from '$lib/paraglide/runtime';
	import BrandName from './BrandName.svelte';
	const clinicDescription_ar =
		'عيادة رائدة لطب الأسنان والأمراض الجلدية في دمشق، سوريا. ملتزمون بالتميز في الرعاية الصحية ورضا المرضى.';
	const clinicDescription =
		'Leading dental and dermatology clinic in Damascus, Syria. Committed to excellence in healthcare and patient satisfaction.';

	function scrollToHash(e: MouseEvent) {
		e.preventDefault();
		if (!lenis) return;

		const target = (e.currentTarget as HTMLAnchorElement).hash;
		if (!target) return;

		const el = document.querySelector<HTMLElement>(target);
		if (el) {
			lenis.scrollTo(el, { duration: 2, easing: easeInOutCubic });
		}
	}
</script>

{#snippet old()}
	<footer class="bg-primary/80 px-4 py-12 text-white sm:px-6 lg:px-8">
		<div class="mx-auto max-w-7xl">
			<div class="grid grid-cols-1 gap-8 md:grid-cols-3 rtl:text-right">
				<div class="space-y-4 rounded-lg">
					<h3 class="text-2xl font-bold tracking-widest">
						<BrandName />
					</h3>
					<p class="leading-relaxed text-gray-400">
						{getLocale() == 'ar' ? clinicDescription_ar : clinicDescription}
					</p>
				</div>

				<div class="space-y-4">
					<h4 class="text-lg font-semibold">{m.quick_links()}</h4>
					<ul class="space-y-2">
						<li>
							<Button
								variant="link"
								href="#hero"
								onclick={(e) => {
									scrollToHash(e);
								}}
								class="hover:text-primary-400 text-gray-400 transition-colors"
							>
								{m.home()}
							</Button>
						</li>
						<li>
							<Button
								variant="link"
								href="#about"
								onclick={(e) => {
									scrollToHash(e);
								}}
								class="hover:text-primary-400 text-gray-400 transition-colors"
							>
								{m.about()}
							</Button>
						</li>
						<li>
							<Button
								variant="link"
								href="#services"
								onclick={(e) => {
									scrollToHash(e);
								}}
								class="hover:text-primary-400 text-gray-400 transition-colors"
							>
								{m.services()}
							</Button>
						</li>
						<li>
							<Button
								variant="link"
								href="#contact"
								onclick={(e) => {
									scrollToHash(e);
								}}
								class="hover:text-primary-400 text-gray-400 transition-colors"
							>
								{m.contact()}
							</Button>
						</li>
					</ul>
				</div>

				<div class="space-y-4">
					<h4 class="text-lg font-semibold">Contact Info</h4>
					<div class="space-y-2 text-gray-400">
						<p>{getLocale() === 'ar' ? 'دمشق,سوريا' : 'Damascus, Syria '}</p>
						<p>+963 XXX XXX XXX</p>
						<p>info@atsemedica.com</p>
					</div>
				</div>
			</div>

			<div
				class="mt-8 flex flex-col items-center justify-between border-t border-gray-800 pt-8 sm:flex-row rtl:flex-row-reverse"
			>
				<p class="text-sm text-gray-400">© 2025 ATSÈ MEDICA. All rights reserved.</p>
				<p
					class="mt-2 flex items-center text-sm text-gray-400 sm:mt-0 rtl:space-x-1 rtl:space-x-reverse"
				>
					Made with <Heart fill="red" class="text-primary-400 mx-1 h-4 w-4" /> for your health
				</p>
			</div>
		</div>
	</footer>
{/snippet}
{#snippet n_footer()}
	<footer class="bg-primary/60 text-white">
		<div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
			<div class="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4 lg:gap-24">
				<div class="col-span-1 md:col-span-2">
					<h3 class="text-3xl font-bold tracking-tight text-white">
						<BrandName />
					</h3>
					<p class="mt-4 max-w-lg text-gray-400">
						{getLocale() == 'ar' ? clinicDescription_ar : clinicDescription}
					</p>
				</div>

				<div class="sm:col-span-1">
					<h4 class="text-lg font-semibold text-gray-200">{m.quick_links()}</h4>
					<ul class="mt-4 space-y-3">
						<li>
							<Button
								variant="link"
								href="#hero"
								onclick={(e) => {
									scrollToHash(e);
								}}
								class="text-gray-400 transition-colors duration-200 hover:text-white"
							>
								{m.home()}
							</Button>
						</li>
						<li>
							<Button
								variant="link"
								href="#about"
								onclick={(e) => {
									scrollToHash(e);
								}}
								class="text-gray-400 transition-colors duration-200 hover:text-white"
							>
								{m.about()}
							</Button>
						</li>
						<li>
							<Button
								variant="link"
								href="#services"
								onclick={(e) => {
									scrollToHash(e);
								}}
								class="text-gray-400 transition-colors duration-200 hover:text-white"
							>
								{m.services()}
							</Button>
						</li>
						<li>
							<Button
								variant="link"
								href="#contact"
								onclick={(e) => {
									scrollToHash(e);
								}}
								class="text-gray-400 transition-colors duration-200 hover:text-white"
							>
								{m.contact()}
							</Button>
						</li>
					</ul>
				</div>

				<div class="sm:col-span-1">
					<h4 class="text-lg font-semibold text-gray-200">Contact Info</h4>
					<div class="mt-4 space-y-3 text-gray-400">
						<p>{getLocale() === 'ar' ? 'دمشق,سوريا' : 'Damascus, Syria'}</p>
						<p>+963 XXX XXX XXX</p>
						<p>info@atsemedica.com</p>
					</div>
				</div>
			</div>

			<div
				class="mt-16 border-t border-gray-700 pt-8 text-center sm:flex sm:items-center sm:justify-between sm:text-left"
			>
				<p class="text-sm text-gray-500">© 2025 ATSÈ MEDICA. All rights reserved.</p>
				<p class="mt-4 flex items-center justify-center text-sm text-gray-500 sm:mt-0">
					Made with <Heart fill="red" class="text-primary-400 mx-1 h-4 w-4" /> for your health
				</p>
			</div>
		</div>
	</footer>
{/snippet}

{@render n_footer()}
