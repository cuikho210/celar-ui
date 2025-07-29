<script lang="ts">
	import './styles/command.scss';
	import { Command } from 'bits-ui';
	import { default as MinimalDialog, type MinimalDialogProps } from './MinimalDialog.svelte';
	import type { Snippet } from 'svelte';

	type CommandDialogProps = MinimalDialogProps & {
		trigger?: Snippet<[{ props: Record<string, unknown> }]>;
		xs?: boolean;
		sm?: boolean;
		md?: boolean;
		fluid?: boolean;
		transitionDuration?: number;
		placeholder?: string;
		emptyText?: string;
		shouldFilter?: boolean;
		value?: string;
		onValueChange?: (value: string) => void;
		filter?: (value: string, search: string, keywords?: string[]) => number;
		loop?: boolean;
		disablePointerSelection?: boolean;
		vimBindings?: boolean;
	};

	let {
		value = $bindable(''),
		children,
		placeholder = 'Type a command or search...',
		emptyText = 'No results found.',
		shouldFilter = true,
		onValueChange,
		filter,
		loop = false,
		disablePointerSelection = false,
		vimBindings = true,
		open = $bindable(false),
		...rest
	}: CommandDialogProps = $props();

	let searchValue = $state('');
</script>

<MinimalDialog {...rest} bind:open data-command-dialog>
	<Command.Root
		bind:value
		{onValueChange}
		{shouldFilter}
		{filter}
		{loop}
		{disablePointerSelection}
		{vimBindings}
	>
		<Command.Input bind:value={searchValue} {placeholder} />
		<Command.List>
			<Command.Viewport>
				<Command.Empty>
					{emptyText}
				</Command.Empty>
				{@render children?.()}
			</Command.Viewport>
		</Command.List>
	</Command.Root>
</MinimalDialog>
