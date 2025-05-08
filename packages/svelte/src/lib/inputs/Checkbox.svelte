<script lang="ts">
	import { Checkbox as BitCheckbox, type CheckboxRootProps, type WithoutChildren } from 'bits-ui';
	import type { Snippet } from 'svelte';

	type CheckboxProps = WithoutChildren<CheckboxRootProps> & {
		children?: Snippet;
	};

	let { children, ...rest }: CheckboxProps = $props();
</script>

{#snippet iconTick()}
	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
		<path
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="1.5"
			d="M5 14.5s1.5 0 3.5 3.5c0 0 5.559-9.167 10.5-11"
			color="currentColor"
		/>
	</svg>
{/snippet}

{#snippet iconMinus()}
	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
		<path
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="1.5"
			d="M20 12H4"
			color="currentColor"
		/>
	</svg>
{/snippet}

<label data-checkbox>
	<div data-checkbox-icon>
		<BitCheckbox.Root {...rest}>
			{#snippet children({ checked, indeterminate })}
				{#if checked}
					{@render iconTick()}
				{/if}
				{#if indeterminate}
					{@render iconMinus()}
				{/if}
			{/snippet}
		</BitCheckbox.Root>
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
