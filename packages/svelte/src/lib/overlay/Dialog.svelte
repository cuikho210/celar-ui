<script lang="ts">
	import './styles/dialog.scss';
	import { fade, fly } from 'svelte/transition';
	import { Dialog as BitDialog, type DialogContentProps } from 'bits-ui';
	import type { Snippet } from 'svelte';
	import IconButton from '$lib/buttons/IconButton.svelte';

	export type DialogProps = Omit<DialogContentProps, 'title'> & {
		open?: boolean;
		trigger?: Snippet<[{ props: Record<string, unknown> }]>;
		title?: Snippet;
		close?: Snippet;
		xs?: boolean;
		sm?: boolean;
		md?: boolean;
		fluid?: boolean;
		transitionDuration?: number;
	};

	let {
		open = $bindable(false),
		trigger,
		title,
		close,
		children,
		xs,
		sm,
		md,
		fluid,
		transitionDuration = 200,
		...rest
	}: DialogProps = $props();
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
						<div data-dialog-header>
							<BitDialog.Title children={title} data-celar-dialog-title />
							<BitDialog.Close>
								{#snippet child({ props })}
									<IconButton {...props}>
										{@render close?.()}
									</IconButton>
								{/snippet}
							</BitDialog.Close>
						</div>

						<div data-dialog-body>
							{@render children?.()}
						</div>
					</div>
				{/if}
			{/snippet}
		</BitDialog.Content>
	</BitDialog.Portal>
</BitDialog.Root>
