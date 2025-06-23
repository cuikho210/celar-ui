<script lang="ts">
	import { Command } from 'bits-ui';
	import type { Snippet } from 'svelte';

	type CommandGroupItemsProps = {
		heading?: Snippet;
		value?: string;
		forceMount?: boolean;
		children?: Snippet;
	};

	let { heading, value, forceMount = false, children }: CommandGroupItemsProps = $props();
</script>

<Command.Group {value} {forceMount}>
	<Command.GroupHeading>
		{@render heading?.()}
	</Command.GroupHeading>
	<Command.GroupItems>
		{@render children?.()}
	</Command.GroupItems>
</Command.Group>
