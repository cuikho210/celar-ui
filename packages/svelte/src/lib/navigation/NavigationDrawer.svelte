<script lang="ts">
	import './styles/navigation_drawer.css';
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
