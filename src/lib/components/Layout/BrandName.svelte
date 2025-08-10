<script lang="ts">
	import { cn } from '$lib/utils';

	let {
		defultclass = 'text-lg font-bold',
		defultEclass = 'text-primary',
		className,
		isArabic = $bindable()
	}: {
		defultclass?: string;
		defultEclass?: string;
		className?: string;
		isArabic: boolean;
	} = $props();
	function translate(word: string, t: string) {
		return isArabic ? t : word;
	}
	// آ
</script>

<span class={cn(defultclass, className, 'tracking-wide')}
	>{translate('ATS', 'آتس')}<span class={cn(defultEclass)}>{translate('È', 'ي  ')}</span>{translate(
		'MEDICA',
		'ميديكا'
	)}</span
>
