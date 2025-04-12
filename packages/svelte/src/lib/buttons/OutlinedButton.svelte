<script lang="ts">
	import TextBaseButton from './TextBaseButton.svelte';
	import type { TextBaseButtonProps } from './TextBaseButton.svelte';

	let props: TextBaseButtonProps = $props();
</script>

<TextBaseButton {...props} data-button-outlined />

<style lang="scss">
	:global([data-button-outlined]) {
		transition-duration: var(--transition-dur);
		transition-property: background-color, border-color;
		background-color: transparent;
		border: 1px solid var(--color-primary--light);

		&:not(:disabled, [data-active='true']):hover {
			background-color: var(--color-primary--light);
			border-color: var(--color-primary);
		}
	}

	:global([data-button-text][data-active='true']) {
		background-color: var(--color-alt);
		border-color: var(--color-primary);
	}
</style>
