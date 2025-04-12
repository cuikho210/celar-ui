<script lang="ts">
	import TextBaseButton from './TextBaseButton.svelte';
	import type { TextBaseButtonProps } from './TextBaseButton.svelte';

	let props: TextBaseButtonProps = $props();
</script>

<TextBaseButton {...props} data-button-filled />

<style lang="scss">
	:global([data-button-filled]) {
		transition-duration: var(--transition-dur);
		transition-property: background-color, box-shadow, opacity;
		background-color: var(--color-primary);

		&:not(:disabled, [data-active='true']):hover {
			background-color: var(--color-primary--dark);
			box-shadow: 0 2px 4px var(--color-shadow--strong);
		}

		&:not(:disabled):active {
			box-shadow: 0 2px 2px var(--color-shadow--strong);
		}
	}

	:global([data-button-elevated][data-active='true']) {
		box-shadow: 0 2px 2px var(--color-shadow--strong);
		background-color: var(--vuuui-color-alt--darker);
		color: var(--vuuui-color-bg);
	}
</style>
