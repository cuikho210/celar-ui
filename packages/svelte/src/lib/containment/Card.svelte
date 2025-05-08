<script lang="ts">
	import './styles/card.scss';
	import Container from './Container.svelte';
	import type { ContainerProps } from './Container.svelte';

	let props: ContainerProps = $props();
</script>

<Container {...props} data-card />
