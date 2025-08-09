<script lang="ts">
	import { getNavState, toggleNavState } from '../navstate.svelte';
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
		<a href="#home" class="transition hover:text-primary" onclick={toggleNavState}>Home</a>
		<a href="#about" class="transition hover:text-primary" onclick={toggleNavState}>About</a>
		<a href="#services" class="transition hover:text-primary" onclick={toggleNavState}>Services</a>
		<a href="#contact" class="transition hover:text-primary" onclick={toggleNavState}>Contact</a>
	</nav>
</div>
