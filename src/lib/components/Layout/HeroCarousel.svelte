<script lang="ts">
	import hero from '$lib/assets/wating_room.webp?enhanced';
	import hero2 from '$lib/assets/wating_room_second.webp?enhanced';

	import LoaderPinwheel from '@lucide/svelte/icons/loader-pinwheel';
	let currentIndex = $state(0);

	const images = [hero, hero2];

	let interval: number = $state() as number;
	let { isArabic = $bindable() }: { isArabic: boolean } = $props();

	let imageLoaded = $state(false);
	function handleImageLoad() {
		imageLoaded = true;
	}

	$effect(() => {
		interval = setInterval(() => {
			currentIndex = (currentIndex + 1) % images.length;
		}, 3000);
		return () => {
			clearInterval(interval);
		};
	});
</script>

{#each images as image, index (image)}
	{#if !imageLoaded}
		<div class="absolute inset-0 flex items-center justify-center space-x-2">
			<LoaderPinwheel class="animate-spin text-primary duration-300 ease-in-out" />
			<span>{isArabic ? 'تحميل الصورة' : 'Image Loading'}</span>
		</div>
	{/if}
	<enhanced:img
		onload={handleImageLoad}
		src={image}
		alt="Atse Waiting room"
		class="carousel-item absolute inset-0 h-full w-full rounded-xl object-cover"
		class:active={index === currentIndex}
	/>
{/each}

<style>
	.carousel-item {
		position: absolute;
		top: 0;
		left: 0;
		opacity: 0;
		z-index: -10;
		transition: opacity 0.5s ease-in-out;
	}

	.carousel-item.active {
		opacity: 1;
		z-index: 1;
	}
</style>
