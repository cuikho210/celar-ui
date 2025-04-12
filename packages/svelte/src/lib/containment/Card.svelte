<script lang="ts">
	import Container from './Container.svelte';
	import type { ContainerProps } from './Container.svelte';

	let props: ContainerProps = $props();
</script>

<Container {...props} data-card />

<style lang="scss">
	:global([data-card]) {
		box-shadow: 0 var(--gap--sm) var(--gap) var(--color-shadow--md);
		background-color: var(--color-bg);
	}
</style>
