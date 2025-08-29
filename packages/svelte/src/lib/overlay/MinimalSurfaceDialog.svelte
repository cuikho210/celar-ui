<script lang="ts">
	import './styles/dialog.scss';
	import '../containment/styles/surface-container.scss';
	import './styles/surface-dialog.scss';

	import MinimalDialog, { type MinimalDialogProps } from './MinimalDialog.svelte';
	import type { Snippet } from 'svelte';

	type MinimalSurfaceDialogProps = MinimalDialogProps & {
		header?: Snippet;
		footer?: Snippet;
		elevated?: 0 | 1 | 2 | 3 | 4 | 5;
	};

	let {
		open = $bindable(false),
		elevated,
		children,
		header,
		footer,
		...rest
	}: MinimalSurfaceDialogProps = $props();
</script>

<MinimalDialog
	{...rest}
	bind:open
	data-surface-container
	data-minimal-surface-dialog
	data-elevated={elevated}
>
	{#if header}
		<div data-surface-dialog-header>
			{@render header()}
		</div>
	{/if}

	<div data-surface-dialog-body>
		{@render children?.()}
	</div>

	{#if footer}
		<div data-surface-dialog-footer>
			{@render footer()}
		</div>
	{/if}
</MinimalDialog>
