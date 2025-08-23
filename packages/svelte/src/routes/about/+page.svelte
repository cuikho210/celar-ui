<script lang="ts">
	import Container from '$lib/containment/Container.svelte';
	import { onMount } from 'svelte';
	import { layout } from '../state.svelte.js';

	onMount(() => {
		layout.activedNavbar = 'about';
	});
</script>

<Container xs>
	<h1>Celar UI</h1>
</Container>
