<script lang="ts">
	import { Container, Breadcrumb, Gap } from '$lib/index.js';
	import Avatar from './Avatar.svelte';
	import Buttons from './Buttons.svelte';
	import Spinners from './Spinners.svelte';
	import Overlay from './Overlay.svelte';
	import Inputs from './Inputs.svelte';
</script>

<Container sm>
	<Breadcrumb>
		<a href="/">Home</a>
		<a href="/components">Components</a>
	</Breadcrumb>
	<Gap />

	<h2>Components</h2>
	<Gap />

	<Buttons /><Gap />
	<Inputs /><Gap />
	<Avatar /><Gap />
	<Spinners /><Gap />
	<Overlay /><Gap />
</Container>
