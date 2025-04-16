<script lang="ts">
	import { Container, Breadcrumb, Gap, AppBar } from '$lib/index.js';
	import Avatar from './Avatar.svelte';
	import Buttons from './Buttons.svelte';
	import Spinners from './Spinners.svelte';
	import Overlay from './Overlay.svelte';
	import Inputs from './Inputs.svelte';
	import TextButton from '$lib/buttons/TextButton.svelte';
</script>

<AppBar style="position: sticky; top: 0; z-index: 20;">
	{#snippet leading()}
		<TextButton style="color: var(--color-text-info)" onclick={() => history.back()}>
			Back
		</TextButton>
	{/snippet}

	{#snippet title()}
		Components
	{/snippet}

	{#snippet actions()}
		<TextButton style="color: var(--color-text-info)">Settings</TextButton>
	{/snippet}
</AppBar>

<Container sm>
	<Breadcrumb>
		<a href="/">Home</a>
		<a href="/components">Components</a>
	</Breadcrumb>
	<Gap />

	<Buttons /><Gap />
	<Inputs /><Gap />
	<Avatar /><Gap />
	<Spinners /><Gap />
	<Overlay /><Gap />
</Container>
