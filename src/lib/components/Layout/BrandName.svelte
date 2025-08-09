<script lang="ts">
	import { cn } from '$lib/utils';

	let {
		defultclass = 'text-lg font-bold',
		defultEclass = 'text-primary',
		className
	}: { defultclass?: string; defultEclass?: string; className?: string } = $props();
</script>

<span class={cn(defultclass, className)}>ATS <span class={cn(defultEclass)}>È</span> MEDICA</span>
