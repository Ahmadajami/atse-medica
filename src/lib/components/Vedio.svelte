<script lang="ts">
	import { onMount } from 'svelte';

	let videoElement = $state<HTMLVideoElement>();
	let isVisible = $state<boolean>(false);

	onMount(() => {
		if (!videoElement) return;

		const observer = new IntersectionObserver(
			(entries: IntersectionObserverEntry[]) => {
				entries.forEach((entry: IntersectionObserverEntry) => {
					isVisible = entry.isIntersecting;

					if (entry.isIntersecting && videoElement) {
						videoElement.play().catch((error: Error) => console.error('Video play failed:', error));
					} else if (videoElement) {
						videoElement.pause();
					}
				});
			},
			{
				threshold: 0.5,

				rootMargin: '50px'
			}
		);

		observer.observe(videoElement);

		return (): void => {
			observer.disconnect();
		};
	});
</script>

<section class="mx-auto my-9 flex max-w-7xl flex-col space-y-8">
	<h2 class="mx-4 w-fit text-5xl text-wrap md:mx-0">
		Let's Take A<span class="text-primary">{' '}Tour</span>
		<hr class="w-full bg-primary" />
	</h2>

	<div class="px-8">
		<div class="relative w-full overflow-hidden rounded-lg shadow-lg">
			<video
				bind:this={videoElement}
				class="h-auto w-full rounded-lg transition-opacity duration-300"
				class:opacity-100={isVisible}
				class:opacity-75={!isVisible}
				muted
				loop
				playsinline
				preload="metadata"
			>
				<source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>

			<!-- Optional overlay text with fade effect -->
			<div
				class="absolute inset-0 flex items-center justify-center bg-black/30 text-xl font-bold text-white transition-opacity duration-300"
				class:opacity-100={isVisible}
				class:opacity-60={!isVisible}
			>
				{isVisible ? 'Now Playing' : 'Overview'}
			</div>
		</div>
	</div>
</section>
