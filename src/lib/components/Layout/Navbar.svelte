<script lang="ts">
	import BrandName from './BrandName.svelte';

	import Hamburger from './Hamburger.svelte';
</script>

<nav class="bg-base-100/80 fixed top-0 right-0 left-0 z-40 h-16 w-full backdrop-blur-sm">
	<div class="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
		<div class="flex items-center space-x-2">
			<BrandName />
		</div>

		<ul class="hidden space-x-8 font-medium md:flex">
			<li><a href="#home" class="hover:text-primary">Home</a></li>
			<li><a href="#about" class="hover:text-primary">About</a></li>
			<li><a href="#services" class="hover:text-primary">Services</a></li>
			<li><a href="#contact" class="hover:text-primary">Contact</a></li>
		</ul>

		<div class="md:hidden">
			<Hamburger />
		</div>
	</div>
</nav>
