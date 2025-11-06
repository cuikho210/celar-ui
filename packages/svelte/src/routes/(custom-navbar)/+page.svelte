<script lang="ts">
	import { Container } from '$lib/index.js';
	import AppBar from '$lib/navigation/AppBar.svelte';
	import { onMount } from 'svelte';
	import ColorPalette from './ColorPalette.svelte';
	import ToggleThemeButton from './ToggleThemeButton.svelte';
	import { layout } from './state.svelte.js';
	import Gap from '$lib/misc/Gap.svelte';
	import OutlinedButton from '$lib/buttons/OutlinedButton.svelte';

	onMount(() => {
		layout.activedNavbar = 'home';
	});
</script>

<AppBar>
	{#snippet title()}
		Celar UI
	{/snippet}

	{#snippet actions()}
		<ToggleThemeButton />
	{/snippet}
</AppBar>

<Container sm>
	<OutlinedButton href="/adaptive-sidebar">Adaptive Sidebar</OutlinedButton>
	<Gap />
	<ColorPalette />
</Container>
