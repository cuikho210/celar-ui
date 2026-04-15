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

<style lang="postcss">
	@reference '@celar-ui/svelte/styles/index.css';

	@layer components {
		[data-switch] {
			@apply rounded-lg py-1.5 pr-4 transition-all;
			position: relative;
			box-sizing: border-box;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			width: 100%;
			user-select: none;
		}

		:global([data-switch-root]) {
			@apply transition-all;
			position: relative;
			display: block;
			width: --spacing(9.5);
			height: --spacing(6);
			border-radius: --spacing(8);
			background-color: transparent;
			outline: 1px solid var(--color-primary);
			border: none;
			margin: 0 --spacing(2.25);
		}

		:global([data-switch-thumb]) {
			@apply transition-all;
			position: absolute;
			top: --spacing(0.2);
			left: --spacing(0.2);
			display: block;
			width: --spacing(5.6);
			height: --spacing(5.6);
			border-radius: 50%;
			box-sizing: border-box;
			background-color: var(--color-primary);
		}

		:global([data-switch-root][data-state='checked']) {
			background-color: var(--color-primary);
		}

		:global([data-switch-thumb][data-state='checked']) {
			background-color: var(--color-primaryContainer);
			transform: translateX(--spacing(3.5));
		}
	}
</style>
