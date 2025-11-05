<script lang="ts">
	import { applyPreferredColorScheme, IconButton } from '$lib/index.js';
	import IconSun from '~icons/hugeicons/sun-01';
	import IconMoon from '~icons/hugeicons/moon-02';
	import { layout } from './state.svelte.js';
</script>

<IconButton
	onclick={() => {
		layout.theme = layout.theme == 'light' ? 'dark' : 'light';
		applyPreferredColorScheme(layout.theme);
	}}
>
	{#if layout.theme == 'light'}
		<IconSun font-size="20px" />
	{:else}
		<IconMoon font-size="20px" />
	{/if}
</IconButton>
