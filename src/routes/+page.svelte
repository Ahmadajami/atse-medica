<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import BrandName from '$lib/components/Layout/BrandName.svelte';
	import LoaderPinwheel from '@lucide/svelte/icons/loader-pinwheel';
	import CalendarClock from '@lucide/svelte/icons/calendar-clock';
	import Vedio from '$lib/components/Vedio.svelte';
	let imageLoaded = $state(false);

	function handleImageLoad() {
		imageLoaded = true;
	}
	const grid_image: string = 'https://picsum.photos/400/300';

	// è is È.
	//
	//"   "
</script>

<section
	id="Hero"
	class={['mx-auto flex max-w-7xl  flex-col items-center gap-8 px-5 py-12 md:flex-row']}
>
	<div
		class={[
			'relative aspect-[10/7] w-full max-w-xl',
			'animate-in duration-1000 slide-in-from-left-100'
		]}
	>
		{#if !imageLoaded}
			<div class="absolute inset-0 flex items-center justify-center space-x-2">
				<LoaderPinwheel class="animate-spin text-primary duration-300 ease-in-out" />
				<span>Image Loading</span>
			</div>
		{/if}
		<img
			onload={handleImageLoad}
			src="https://picsum.photos/800/560"
			alt="Descriptive alt text"
			class="absolute inset-0 h-full w-full rounded-xl object-cover"
		/>
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
			Where Your <span class="text-primary">Smile</span> Glows
		</p>

		<div class="group relative container mt-5 gap-3">
			<Button
				class="flex h-full w-full items-center justify-between px-4"
				href="#"
				variant="secondary"
			>
				<span class="text-left text-2xl group-hover:animate-bounce">Reserve Now</span>
				<CalendarClock
					class="h-full group-hover:animate-bounce"
					style="width: 30px; height: 30px;"
				/>
			</Button>
		</div>
	</div>
</section>

<section class="mx-auto flex max-w-7xl flex-col space-y-8">
	<h2 class="mx-4 w-fit text-5xl font-semibold text-wrap md:mx-0">
		Our Comprehensive <span class="text-primary">Services</span>
		<hr class="w-full bg-primary" />
	</h2>
	<div class="grid grid-cols-1 grid-rows-2 gap-7 px-8 md:grid-cols-2">
		<div
			class="relative h-48 w-full rounded-lg bg-cover bg-center duration-150 ease-in-out hover:scale-110 hover:scale-3d"
			style="background-image: url('{grid_image}');"
		>
			<div
				class=" absolute inset-0 flex items-center justify-center rounded-lg bg-black/30 text-xl font-bold text-white"
			>
				Dental implants
			</div>
		</div>

		<div
			class="relative h-48 w-full translate-x-4 rounded-lg bg-cover bg-center duration-150 ease-in-out hover:scale-110 hover:scale-3d md:mt-[40px]"
			style="background-image: url('{grid_image}');"
		>
			<div
				class="bg-opacity-30 absolute inset-0 flex items-center justify-center rounded-lg bg-black/30 text-xl font-bold text-white"
			>
				Aesthetic Dentistry
			</div>
		</div>

		<div
			class="relative h-48 w-full rounded-lg bg-cover bg-center duration-150 ease-in-out hover:scale-110 hover:scale-3d"
			style="background-image: url('{grid_image}');"
		>
			<div
				class="bg-opacity-30 absolute inset-0 flex items-center justify-center rounded-lg bg-black/30 text-xl font-bold text-white"
			>
				Tooth Correction
			</div>
		</div>

		<div
			class="relative h-48 w-full -translate-x-4 rounded-lg bg-cover bg-center duration-150 ease-in-out hover:scale-110 hover:scale-3d md:mt-[40px] md:translate-x-0"
			style="background-image: url('{grid_image}');"
		>
			<div
				class="bg-opacity-30 absolute inset-0 flex items-center justify-center rounded-lg bg-black/30 text-xl font-bold text-white"
			>
				Skin Care
			</div>
		</div>
	</div>
</section>

<Vedio />
