<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import BrandName from '$lib/components/Layout/BrandName.svelte';
	import CalendarClock from '@lucide/svelte/icons/calendar-clock';
	import HeroCarousel from '$lib/components/Layout/HeroCarousel.svelte';

	import { m } from '$lib/paraglide/messages';
	import Services from '$lib/components/Layout/Services.svelte';
	import About from '$lib/components/Layout/About.svelte';
	// è is È.
	let { data } = $props();
</script>

<svelte:head>
	<link
		rel="preconnect"
		href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207.92255864395608!2d36.28289644994379!3d33.50759638488797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e176067da0d5%3A0xb3d69b5730908124!2sAtef%20Ajami%20Sons%20Company.AASCO!5e0!3m2!1sen!2s!4v1755534937816!5m2!1sen!2s"
	/>
	<link rel="preconnect" href="https://maps.googleapis.com" />
</svelte:head>
<section
	id="hero"
	class="mx-auto flex max-w-7xl transform-gpu flex-col items-center gap-8 px-5 py-12 md:flex-row"
>
	<div
		class={[
			'relative aspect-[10/7] w-full max-w-xl will-change-auto',
			'animate-in duration-1000 slide-in-from-left-100'
		]}
	>
		<HeroCarousel />
	</div>

	<div
		class={[
			'flex flex-1 flex-col justify-center gap-4 will-change-auto',
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
				class="flex h-full w-full items-center  justify-between px-4  "
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

<Services />
<data.Vedio />

<About />
