<script lang="ts">
	import { applyPreferredColorScheme, IconButton } from '$lib/index.js';
	import IconSun from '~icons/hugeicons/sun-01';
	import IconMoon from '~icons/hugeicons/moon-02';

	let theme = $state<'light' | 'dark'>('light');
</script>

<IconButton
	onclick={() => {
		theme = theme == 'light' ? 'dark' : 'light';
		applyPreferredColorScheme(theme);
	}}
>
	{#if theme == 'light'}
		<IconSun font-size="20px" />
	{:else}
		<IconMoon font-size="20px" />
	{/if}
</IconButton>
