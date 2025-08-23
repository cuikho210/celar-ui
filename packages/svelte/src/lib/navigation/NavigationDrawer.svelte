<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { Dialog as BitDialog, type DialogRootProps } from 'bits-ui';
	import type { Snippet } from 'svelte';
	import IconButton from '$lib/buttons/IconButton.svelte';

	export interface NavigationDrawerProps extends DialogRootProps {
		header?: Snippet;
		footer?: Snippet;
		close?: Snippet;
		position?: 'left' | 'right';
		width?: string;
	}

	let {
		open = $bindable(false),
		header,
		footer,
		close,
		children,
		position = 'left',
		width = '280px',
		...rest
	}: NavigationDrawerProps = $props();

	let duration = 200;
</script>

<BitDialog.Root {...rest} bind:open>
	<BitDialog.Portal>
		<BitDialog.Overlay forceMount>
			{#snippet child({ props, open })}
				{#if open}
					<div {...props} data-navigation-drawer-backdrop transition:fade={{ duration }}></div>
				{/if}
			{/snippet}
		</BitDialog.Overlay>
		<BitDialog.Content forceMount data-position={position}>
			{#snippet child({ props, open })}
				{#if open}
					<aside
						{...props}
						data-navigation-drawer
						style:width
						transition:fly={{
							duration,
							x: position === 'left' ? '-' + width : width,
							opacity: 0
						}}
						aria-label="Navigation drawer"
					>
						{#if header}
							<div data-navigation-drawer-header>
								{@render header()}
								{#if close}
									<BitDialog.Close>
										{#snippet child({ props })}
											<IconButton {...props} data-navigation-drawer-close>
												{@render close()}
											</IconButton>
										{/snippet}
									</BitDialog.Close>
								{/if}
							</div>
						{/if}

						<div data-navigation-drawer-content>
							{@render children?.()}
						</div>

						{#if footer}
							<div data-navigation-drawer-footer>
								{@render footer()}
							</div>
						{/if}
					</aside>
				{/if}
			{/snippet}
		</BitDialog.Content>
	</BitDialog.Portal>
</BitDialog.Root>

<style lang="scss">
	:global([data-navigation-drawer-backdrop]) {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		backdrop-filter: blur(var(--blur-length));
		background-color: rgba(var(--color-onBackground--rgb), 0.2);
		z-index: 100;
	}

	:global([data-navigation-drawer]) {
		box-sizing: border-box;
		display: flex;
		position: fixed;
		top: 0;
		z-index: 100;
		flex-direction: column;
		background-color: var(--color-surface);
		height: 100dvh;
		overflow-y: auto;
		box-shadow: 0 var(--gap--xs) var(--gap--half) var(--color-shadow--md);
		max-width: 85%;

		&[data-position='left'] {
			left: 0;
			border-top-right-radius: var(--radius);
			border-bottom-right-radius: var(--radius);
		}

		&[data-position='right'] {
			right: 0;
			border-top-left-radius: var(--radius);
			border-bottom-left-radius: var(--radius);
		}

		[data-navigation-drawer-header] {
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-bottom: 1px solid var(--color-border);
			padding: var(--gap);
			flex-shrink: 0;

			[data-navigation-drawer-close] {
				margin-left: auto;
			}
		}

		[data-navigation-drawer-content] {
			flex: 1;
			overflow-y: auto;
			padding: var(--gap--half);
		}

		[data-navigation-drawer-footer] {
			border-top: 1px solid var(--color-border);
			padding: var(--gap);
			flex-shrink: 0;
		}
	}

	/* Scrollbar styling */
	:global([data-navigation-drawer]) {
		scrollbar-width: thin;
		scrollbar-color: var(--color-border) transparent;

		&::-webkit-scrollbar {
			width: 6px;
		}

		&::-webkit-scrollbar-track {
			background: transparent;
		}

		&::-webkit-scrollbar-thumb {
			border-radius: 3px;
			background-color: var(--color-border);
		}

		&::-webkit-scrollbar-thumb:hover {
			background-color: var(--color-primaryContainer);
		}
	}

	/* Focus management */
	:global([data-navigation-drawer]:focus-visible) {
		outline: 2px solid var(--color-primary);
		outline-offset: -2px;
	}
</style>
