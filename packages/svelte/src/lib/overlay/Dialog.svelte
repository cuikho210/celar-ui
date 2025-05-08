<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { Dialog as BitDialog, type DialogRootProps } from 'bits-ui';
	import type { Snippet } from 'svelte';
	import IconButton from '$lib/buttons/IconButton.svelte';

	type DialogProps = DialogRootProps & {
		trigger?: Snippet<[{ props: Record<string, unknown> }]>;
		title?: Snippet;
		close?: Snippet;
		xs?: boolean;
		sm?: boolean;
		md?: boolean;
		fluid?: boolean;
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
		...rest
	}: DialogProps = $props();

	let duration = 200;
</script>

<BitDialog.Root {...rest} bind:open>
	<BitDialog.Trigger>
		{#snippet child({ props })}
			{@render trigger?.({ props })}
		{/snippet}
	</BitDialog.Trigger>
	<BitDialog.Portal>
		<BitDialog.Overlay forceMount>
			{#snippet child({ props, open })}
				{#if open}
					<div {...props} transition:fade={{ duration }}></div>
				{/if}
			{/snippet}
		</BitDialog.Overlay>
		<BitDialog.Content forceMount data-xs={xs} data-sm={sm} data-md={md} data-fluid={fluid}>
			{#snippet child({ props, open })}
				{#if open}
					<div {...props} transition:fly={{ duration, y: 50 }}>
						<div data-dialog-header>
							<BitDialog.Title children={title} />
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

<style lang="scss">
	$gap: var(--gap);
	$gap--x2: var(--gap--x2);
	$d-max-w: calc(100% - $gap--x2);
	$d-max-h: calc(100dvh - $gap--x2);
	$header-h: 48px;
	$body-max-h: calc($d-max-h - $header-h);

	:global([data-dialog-overlay]) {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		backdrop-filter: blur(var(--blur-length));
		background-color: var(--color-border--strong);
		z-index: 100;
	}

	:global([data-dialog-content]) {
		box-sizing: border-box;
		position: fixed;
		top: calc(50dvh - $gap);
		left: calc(50lvw - $gap);
		transform: translate(-50%, -50%);
		max-width: $d-max-w;
		max-height: $d-max-h;
		margin: $gap;
		background-color: var(--color-bg);
		box-shadow: 0 4px 1rem var(--color-shadow);
		border-radius: var(--radius);
		overflow: hidden;
		z-index: 100;

		&[data-xs='true'] {
			max-width: min($d-max-w, var(--break--xs));
		}
		&[data-sm='true'] {
			max-width: min($d-max-w, var(--break--sm));
		}
		&[data-md='true'] {
			max-width: min($d-max-w, var(--break--md));
		}
		&[data-fluid='true'] {
			width: 100%;
		}
	}

	:global([data-dialog-header]) {
		height: $header-h;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-left: var(--gap);
		padding-right: var(--gap--sm);
		overflow: hidden;
	}

	:global([data-dialog-title]) {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	:global([data-dialog-body]) {
		box-sizing: border-box;
		max-height: $body-max-h;
		overflow-y: auto;
		padding: var(--gap);
	}
</style>
