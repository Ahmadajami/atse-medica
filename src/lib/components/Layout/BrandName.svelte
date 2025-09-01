<script lang="ts">
	import { getLocale } from '$lib/paraglide/runtime';
	import { cn } from '$lib/utils';
	let isArabic = $state(getLocale() === 'ar');
	let {
		defultclass = 'text-lg font-bold',
		defultEclass = 'text-primary',
		className
	}: {
		defultclass?: string;
		defultEclass?: string;
		className?: string;
	} = $props();
	function translate(word: string, t: string) {
		return isArabic ? t : word;
	}
	// آ
</script>

<span class={cn(defultclass, className, 'tracking-widest')}
	>{translate('ATS', 'آتس')}<span class={cn(defultEclass)}>{translate('È', 'ي  ')}</span>{translate(
		'MEDICA',
		'ميديكا'
	)}</span
>
