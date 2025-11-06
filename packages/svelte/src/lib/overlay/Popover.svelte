<script lang="ts">
	import type { Snippet } from 'svelte';
	import './styles/popover.scss';
	import { scale } from 'svelte/transition';
	import { Popover as BitsPopover, type PopoverContentProps } from 'bits-ui';

	type PopoverProps = PopoverContentProps & {
		open?: boolean;
		trigger?: Snippet<[{ props: Record<string, unknown> }]>;
		transitionDuration?: number;
	};

	let {
		open = $bindable(false),
		trigger,
		children,
		transitionDuration = 200,
		...rest
	}: PopoverProps = $props();
</script>

<BitsPopover.Root bind:open>
	<BitsPopover.Trigger child={trigger} />
	<BitsPopover.Portal>
		<BitsPopover.Content {...rest} forceMount>
			{#snippet child({ wrapperProps, props, open })}
				{#if open}
					<div {...wrapperProps}>
						<div {...props} transition:scale={{ duration: transitionDuration }}>
							{@render children?.()}
						</div>
					</div>
				{/if}
			{/snippet}
		</BitsPopover.Content>
	</BitsPopover.Portal>
</BitsPopover.Root>
