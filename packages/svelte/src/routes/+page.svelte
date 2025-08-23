<script lang="ts">
	import { Container } from '$lib/index.js';
	import AppBar from '$lib/navigation/AppBar.svelte';
	import { onMount } from 'svelte';
	import ColorPallete from './ColorPallete.svelte';
	import ToggleThemeButton from './ToggleThemeButton.svelte';
	import { layout } from './state.svelte.js';

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
	<ColorPallete />
</Container>
