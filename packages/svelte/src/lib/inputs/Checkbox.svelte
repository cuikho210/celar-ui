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

<style lang="postcss">
	@reference 'tailwindcss';
	@reference '@celar-ui/svelte/styles/index.css';

	@layer base {
		[data-checkbox] {
			position: relative;
			box-sizing: border-box;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			padding: --spacing(1) 0;
			padding-right: --spacing(4);
			width: 100%;
			user-select: none;

			[data-checkbox-icon] {
				display: flex;
				flex-shrink: 0;
				justify-content: center;
				align-items: center;
				width: --spacing(14);
			}
		}

		:global([data-checkbox-root]) {
			@apply rounded-xl transition-all;
			display: flex;
			justify-content: center;
			align-items: center;
			height: --spacing(6);
			width: --spacing(8);
			background-color: transparent;
			color: var(--color-onPrimary);
			outline: none;
			border: 1px solid var(--color-primary);
			border-radius: --spacing(2);
		}

		:global([data-checkbox-root]:not([data-state='unchecked'])) {
			background-color: var(--color-primary);
		}

		:global([data-checkbox-root]:focus-visible) {
			@apply outline-primary outline outline-solid;
		}
	}
</style>
