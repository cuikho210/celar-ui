<script lang="ts">
	import { RadioGroup, type RadioGroupItemProps, type WithoutChildren } from 'bits-ui';
	import type { Snippet } from 'svelte';

	export type RadioItemProps = WithoutChildren<RadioGroupItemProps> & {
		children?: Snippet;
	};
	let { children, ...rest }: RadioItemProps = $props();
</script>

<label data-radio-item>
	<div data-radio-item-icon>
		<RadioGroup.Item {...rest} />
	</div>
	{@render children?.()}
</label>

<style lang="scss">
	$icon-width: 48px;

	[data-radio-item] {
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

		[data-radio-item-icon] {
			width: $icon-width;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		&:hover {
			background-color: var(--color-primary--lighter);
		}
	}

	:global([data-radio-group-item]) {
		background-color: transparent;
		outline: 1px solid var(--color-primary--dark);
		border: 4px solid var(--color-bg);
		width: 24px;
		height: 24px;
		border-radius: 50%;
	}

	:global([data-radio-group-item][data-state='checked']) {
		background-color: var(--color-primary--dark);
	}
</style>
