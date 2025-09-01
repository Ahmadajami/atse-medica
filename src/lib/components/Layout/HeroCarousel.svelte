<script lang="ts">
	import hero from '$lib/assets/wating_room.webp?enhanced';
	import hero2 from '$lib/assets/wating_room_second.webp?enhanced';

	let currentIndex = $state(0);
	const images = [hero, hero2];
	let interval: number = $state() as number;

	$effect(() => {
		interval = setInterval(() => {
			currentIndex = (currentIndex + 1) % images.length;
		}, 3000);
		return () => {
			clearInterval(interval);
		};
	});
</script>

<enhanced:img
	src={images[0]}
	alt="Atse Waiting room"
	class="carousel-item active absolute inset-0 h-full w-full rounded-xl object-cover"
	loading="eager"
	width="1600"
	height="900"
	fetchpriority="high"
	sizes="(max-width: 768px) 100vw, 1600px"
/>

{#each images.slice(1) as image, index (image)}
	<enhanced:img
		src={image}
		alt="Atse Waiting room"
		width="1600"
		height="900"
		class="carousel-item absolute inset-0 h-full w-full rounded-xl object-cover"
		class:active={index + 1 === currentIndex}
		sizes="(max-width: 768px) 100vw, 1600px"
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
		aspect-ratio: 4 / 3;
	}
	.carousel-item.active {
		opacity: 1;
		z-index: 1;
	}
</style>
