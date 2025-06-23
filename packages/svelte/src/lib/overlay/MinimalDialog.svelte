<script lang="ts">
	import './styles/dialog.scss';
	import { fade, fly } from 'svelte/transition';
	import { Dialog as BitDialog, type DialogContentProps } from 'bits-ui';
	import type { Snippet } from 'svelte';

	export type MinimalDialogProps = DialogContentProps & {
		open?: boolean;
		trigger?: Snippet<[{ props: Record<string, unknown> }]>;
		xs?: boolean;
		sm?: boolean;
		md?: boolean;
		fluid?: boolean;
		transitionDuration?: number;
	};

	let {
		open = $bindable(false),
		trigger,
		children,
		xs,
		sm,
		md,
		fluid,
		transitionDuration = 200,
		...rest
	}: MinimalDialogProps = $props();
</script>

<BitDialog.Root bind:open>
	<BitDialog.Trigger>
		{#snippet child({ props })}
			{@render trigger?.({ props })}
		{/snippet}
	</BitDialog.Trigger>
	<BitDialog.Portal>
		<BitDialog.Overlay forceMount data-celar-dialog-overlay>
			{#snippet child({ props, open })}
				{#if open}
					<div {...props} transition:fade={{ duration: transitionDuration }}></div>
				{/if}
			{/snippet}
		</BitDialog.Overlay>
		<BitDialog.Content
			{...rest}
			forceMount
			data-xs={xs}
			data-sm={sm}
			data-md={md}
			data-fluid={fluid}
			data-celar-dialog-content
		>
			{#snippet child({ props, open })}
				{#if open}
					<div {...props} transition:fly={{ duration: transitionDuration, y: 50 }}>
						<div data-dialog-body>
							{@render children?.()}
						</div>
					</div>
				{/if}
			{/snippet}
		</BitDialog.Content>
	</BitDialog.Portal>
</BitDialog.Root>
