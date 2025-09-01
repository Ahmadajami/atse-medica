<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import BrandName from '$lib/components/Layout/BrandName.svelte';
	import CalendarClock from '@lucide/svelte/icons/calendar-clock';
	import Vedio from '$lib/components/Vedio.svelte';
	import HeroCarousel from '$lib/components/Layout/HeroCarousel.svelte';
	import dental from '$lib/assets/dental-clean.webp';
	import implemant from '$lib/assets/implemant.jpg';
	import asthetic from '$lib/assets/asthetic.webp';
	import dermatologist from '$lib/assets/dermatologist.webp';
	import { m } from '$lib/paraglide/messages';
	// è is È.
</script>

<section
	id="hero"
	class={['mx-auto flex max-w-7xl  flex-col items-center gap-8 px-5 py-12 md:flex-row']}
>
	<div
		class={[
			'relative aspect-[10/7] w-full max-w-xl',
			'animate-in duration-1000 slide-in-from-left-100'
		]}
	>
		<HeroCarousel />
	</div>

	<div
		class={[
			'flex flex-1 flex-col justify-center gap-4',
			'animate-in duration-1000 slide-in-from-right-100'
		]}
	>
		<h1>
			<BrandName defultclass="text-4xl leading-tight font-bold md:text-5xl" />
		</h1>
		<p class=" text-3xl">
			{m.intro_slogan()}
			<span class="text-primary">{m.smile()}</span>
			{m.glows()}
		</p>

		<div class="group relative container mt-5 gap-3">
			<Button
				class="flex h-full   w-full items-center  justify-between px-4  "
				href="#"
				variant="secondary"
			>
				<span class="text-left text-2xl group-hover:animate-bounce">{m.reserve()}</span>
				<CalendarClock
					class="h-full group-hover:animate-bounce"
					style="width: 30px; height: 30px;"
				/>
			</Button>
		</div>
	</div>
</section>

<section id="services" class="mx-auto flex max-w-7xl transform-gpu flex-col space-y-8">
	<h2 class="mx-4 w-fit text-5xl font-semibold text-wrap md:mx-0 rtl:hidden">
		{m.tiny_polite_vole_mop()} <span class="text-primary">{m.services()}</span>
		<hr class="w-full bg-primary" />
	</h2>

	<h2 class="mx-4 w-fit text-5xl font-semibold text-wrap md:mx-0 ltr:hidden">
		خدماتنا <span class="text-primary">الشاملة</span>
		<hr class="w-full bg-primary" />
	</h2>
	<div class="grid grid-cols-1 grid-rows-2 gap-7 px-8 md:grid-cols-2">
		<div
			class="relative h-48 w-full rounded-lg bg-cover bg-center"
			style="background-image: url('{implemant}');"
		>
			<div
				class=" absolute inset-0 flex items-center justify-center rounded-lg bg-black/30 text-xl font-bold text-white"
			>
				{m.implants()}
			</div>
		</div>

		<div
			class="relative h-48 w-full translate-x-4 rounded-lg bg-cover bg-center md:mt-[40px]"
			style="background-image: url('{asthetic}');"
		>
			<div
				class="bg-opacity-30 absolute inset-0 flex items-center justify-center rounded-lg bg-black/30 text-xl font-bold text-white"
			>
				{m.asthetic()}
			</div>
		</div>

		<div
			class="relative h-48 w-full rounded-lg bg-cover bg-center"
			style="background-image: url('{dental}');"
		>
			<div
				class="bg-opacity-30 absolute inset-0 flex items-center justify-center rounded-lg bg-black/30 text-xl font-bold text-white"
			>
				{m.tooth_correction()}
			</div>
		</div>

		<div
			class="relative h-48 w-full -translate-x-4 rounded-lg bg-cover bg-center md:mt-[40px] md:translate-x-0"
			style="background-image: url('{dermatologist}');"
		>
			<div
				class="bg-opacity-30 absolute inset-0 flex items-center justify-center rounded-lg bg-black/30 text-xl font-bold text-white"
			>
				{m.skin_care()}
			</div>
		</div>
	</div>
</section>

<Vedio />

<section id="about" class="w-full py-12">
	<div class="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-6 lg:grid-cols-2 lg:px-12">
		<!-- Left: Logo & Info -->
		<div class="flex flex-col items-center space-y-6 text-center lg:items-start lg:text-left">
			<BrandName className="text-4xl" />
			<h2 class="text-3xl font-bold">{m.visit()}</h2>
		</div>

		<!-- Right: Google Maps -->
		<div class="h-80 overflow-hidden rounded-2xl lg:h-96">
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207.92255864395608!2d36.28289644994379!3d33.50759638488797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e176067da0d5%3A0xb3d69b5730908124!2sAtef%20Ajami%20Sons%20Company.AASCO!5e0!3m2!1sen!2s!4v1755534937816!5m2!1sen!2s"
				width="100%"
				height="100%"
				style="border:0;"
				title="Atse Medical Location"
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			>
			</iframe>
		</div>
	</div>
</section>
