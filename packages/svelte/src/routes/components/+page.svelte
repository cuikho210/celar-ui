<script lang="ts">
	import { Container, Breadcrumb, Gap, AppBar } from '$lib/index.js';
	import Avatar from './Avatar.svelte';
	import Buttons from './Buttons.svelte';
	import Spinners from './Spinners.svelte';
	import Overlay from './Overlay.svelte';
	import Inputs from './Inputs.svelte';
	import Navigation from './Navigation.svelte';
	import TextButton from '$lib/buttons/TextButton.svelte';
	import LinearProgressIndicator from '$lib/misc/LinearProgressIndicator.svelte';
	import ToggleThemeButton from '../ToggleThemeButton.svelte';
	import { layout } from '../state.svelte.js';

	layout.activedNavbar = 'components';
</script>

<AppBar style="position: sticky; top: 0; z-index: 20;">
	{#snippet leading()}
		<TextButton style="color: var(--color-onSurface-info)" onclick={() => history.back()}>
			Back
		</TextButton>
	{/snippet}

	{#snippet title()}
		Components
	{/snippet}

	{#snippet actions()}
		<ToggleThemeButton />
	{/snippet}
</AppBar>

<Container sm>
	<Breadcrumb>
		<a href="/">Home</a>
		<a href="/components">Components</a>
	</Breadcrumb>
	<Gap />

	<LinearProgressIndicator />
	<Gap />

	<Buttons /><Gap />
	<Inputs /><Gap />
	<Avatar /><Gap />
	<Spinners /><Gap />
	<Overlay /><Gap />
	<Navigation /><Gap />
</Container>
