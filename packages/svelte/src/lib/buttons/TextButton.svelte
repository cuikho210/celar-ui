<script lang="ts">
	import TextBaseButton from './TextBaseButton.svelte';
	import type { TextBaseButtonProps } from './TextBaseButton.svelte';

	let props: TextBaseButtonProps = $props();
</script>

<TextBaseButton {...props} data-button-text />

<style lang="scss">
	:global([data-button-text]) {
		transition-duration: var(--transition-dur);
		transition-property: background-color;
		background-color: transparent;

		&:not(:disabled, [data-active='true']):hover {
			background-color: var(--color-primary--light);
		}
	}

	:global([data-button-text][data-active='true']) {
		background-color: var(--color-alt);
	}
</style>
