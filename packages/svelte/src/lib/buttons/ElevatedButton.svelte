<script lang="ts">
	import TextBaseButton from './TextBaseButton.svelte';
	import type { TextBaseButtonProps } from './TextBaseButton.svelte';

	let props: TextBaseButtonProps = $props();
</script>

<TextBaseButton {...props} data-button-elevated />

<style lang="scss">
	:global([data-button-elevated]) {
		transition-duration: var(--transition-dur);
		transition-property: background-color, box-shadow, opacity;
		box-shadow: 0 2px 2px var(--color-shadow);
		background-color: var(--color-primary--lighter);

		&:not(:disabled, [data-active='true']):hover {
			box-shadow: 0 2px 4px var(--color-shadow--strong);
			background-color: var(--color-primary--light);
		}

		&:not(:disabled):active {
			box-shadow: 0 2px 2px var(--color-shadow--strong);
		}
	}

	:global([data-button-elevated][data-active='true']) {
		box-shadow: 0 2px 2px var(--color-shadow--strong);
		background-color: var(--color-alt);
	}
</style>
