<script lang="ts">
	import Spacer from '$lib/containment/Spacer.svelte';
	import { Command, type CommandItemProps as BitCommandItemProps } from 'bits-ui';
	import type { Snippet } from 'svelte';

	type CommandItemProps = BitCommandItemProps & {
		icon?: Snippet;
		shortcut?: string;
	};

	let { children, icon, shortcut, ...rest }: CommandItemProps = $props();
</script>

<Command.Item {...rest}>
	<Spacer wrap="nowrap" align="center">
		{@render icon?.()}

		<div data-command-item-content>
			{@render children?.()}
		</div>
	</Spacer>

	{#if shortcut}
		<div data-command-item-shortcut>{shortcut}</div>
	{/if}
</Command.Item>
