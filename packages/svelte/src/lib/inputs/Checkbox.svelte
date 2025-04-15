<script lang="ts">
	import { Checkbox, type CheckboxRootProps, type WithoutChildren } from 'bits-ui';
	import IconTick from '~icons/hugeicons/tick-01';
	import IconMinus from '~icons/hugeicons/minus-sign';
	import type { Snippet } from 'svelte';

	type CheckboxProps = WithoutChildren<CheckboxRootProps> & {
		children?: Snippet;
	};

	let { children, ...rest }: CheckboxProps = $props();
</script>

<label data-checkbox>
	<div data-checkbox-icon>
		<Checkbox.Root {...rest}>
			{#snippet children({ checked, indeterminate })}
				{#if checked}
					<IconTick font-size="20px" />
				{/if}
				{#if indeterminate}
					<IconMinus />
				{/if}
			{/snippet}
		</Checkbox.Root>
	</div>

	{@render children?.()}
</label>

<style lang="scss">
	$icon-width: 48px;

	[data-checkbox] {
		position: relative;
		box-sizing: border-box;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		transition-property: background-color;
		cursor: pointer;
		-webkit-tap-highlight-color: transparent;
		border-radius: var(--radius--half);
		padding: var(--gap--sm) 0;
		padding-right: var(--gap);
		width: 100%;

		&:hover {
			background-color: var(--color-primary--lighter);
		}

		[data-checkbox-icon] {
			display: flex;
			flex-shrink: 0;
			justify-content: center;
			align-items: center;
			width: $icon-width;
		}
	}

	:global([data-checkbox-root]) {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 24px;
		width: 32px;
		background-color: transparent;
		outline: none;
		border: 1px solid var(--color-primary--dark);
		border-radius: var(--radius--half);
	}

	:global([data-checkbox-root][data-state='checked']) {
		background-color: var(--color-primary);
	}
</style>
