import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const [{ default: Vedio }, { default: Map }] = await Promise.all([
		import('../lib/components/Vedio.svelte'),
		import('../lib/components/Map.svelte')
	]);

	return { Vedio, Map };
};
