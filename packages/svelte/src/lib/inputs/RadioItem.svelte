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

<style lang="postcss">
	@reference '$style/index.css';

	@layer components {
		[data-radio-item] {
			@apply transition-all;
			box-sizing: border-box;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			padding: --spacing(1) 0;
			padding-right: --spacing(4);
			width: 100%;
			user-select: none;

			[data-radio-item-icon] {
				width: --spacing(14);
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}

		:global([data-radio-group-item]) {
			@apply transition-all;
			background-color: transparent;
			outline: 1px solid var(--color-primary);
			border: 4px solid var(--color-surface);
			width: 24px;
			height: 24px;
			border-radius: 50%;
		}

		:global([data-radio-group-item][data-state='checked']) {
			background-color: var(--color-primary);
		}
	}
</style>
