<script lang="ts">
	import { Switch as BitSwitch, type SwitchRootProps, type WithoutChildren } from 'bits-ui';
	import type { Snippet } from 'svelte';

	export type SwitchProps = WithoutChildren<SwitchRootProps> & {
		children?: Snippet;
	};

	let { checked = $bindable(false), children, ...rest }: SwitchProps = $props();
</script>

<label data-switch>
	<BitSwitch.Root {...rest} bind:checked>
		<BitSwitch.Thumb />
	</BitSwitch.Root>

	{@render children?.()}
</label>

<style lang="scss">
	@use 'sass:math';

	$s-width: 38px;
	$s-height: 24px;

	$t-gap: 2px;
	$t-size: $s-height - ($t-gap * 2);
	$t-translate: $s-width - $t-size - ($t-gap * 2);

	$i-width: 48px;
	$s-margin-x: math.div($i-width - $s-width, 2);

	[data-switch] {
		position: relative;
		box-sizing: border-box;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		transition-property: background-color;
		transition-duration: var(--transition-dur);
		border-radius: var(--radius--half);
		padding: var(--gap--sm) 0;
		padding-right: var(--gap);
		width: 100%;

		&:hover {
			background-color: var(--color-primary--lighter);
		}
	}

	:global([data-switch-root]) {
		position: relative;
		display: block;
		width: $s-width;
		height: $s-height;
		border-radius: $s-height;
		background-color: var(--color-bg);
		outline: 1px solid var(--color-primary--dark);
		border: none;
		transition-property: background-color;
		transition-duration: var(--transition-dur);
		margin: 0 $s-margin-x;
	}

	:global([data-switch-thumb]) {
		position: absolute;
		top: $t-gap;
		left: $t-gap;
		display: block;
		width: $t-size;
		height: $t-size;
		border-radius: $t-size;
		box-sizing: border-box;
		background-color: var(--color-primary--dark);
		transition-property: background-color, transform, outline-color;
		transition-duration: var(--transition-dur);
	}

	:global([data-switch-root][data-state='checked']) {
		background-color: var(--color-primary--dark);
		outline-color: var(--color-primary--darker);
	}

	:global([data-switch-thumb][data-state='checked']) {
		background-color: var(--color-primary--lighter);
		transform: translateX($t-translate);
	}
</style>
