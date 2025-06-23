<script lang="ts">
	import { Card, Gap, Spacer, Dialog, ElevatedButton } from '$lib/index.js';
	import CommandDialog from '$lib/overlay/CommandDialog.svelte';
	import CommandGroupItems from '$lib/overlay/CommandGroupItems.svelte';
	import CommandItem from '$lib/overlay/CommandItem.svelte';
	import MinimalDialog from '$lib/overlay/MinimalDialog.svelte';
	import IconCancel from '~icons/hugeicons/cancel-01';
	import IconPlay from '~icons/hugeicons/play';
	import IconPause from '~icons/hugeicons/pause';
	import IconStop from '~icons/hugeicons/stop';

	let openDialog1 = $state(false);
</script>

<Card>
	<h3>Overlay</h3>
	<Gap />
	<Spacer align="center">
		<Dialog bind:open={openDialog1} xs fluid>
			{#snippet trigger({ props })}
				<ElevatedButton {...props}>Open Dialog</ElevatedButton>
			{/snippet}
			{#snippet title()}
				Title
			{/snippet}
			{#snippet close()}
				<IconCancel font-size="20px" />
			{/snippet}

			<p>Ahihi</p>
			<br />

			<Dialog xs>
				{#snippet trigger({ props })}
					<ElevatedButton {...props}>Open Dialog 2</ElevatedButton>
				{/snippet}
				{#snippet title()}
					<b>
						Long long title Long long title Long long title Long long title Long long title Long
						long
					</b>
				{/snippet}
				{#snippet close()}
					<IconCancel font-size="20px" />
				{/snippet}

				{#each Array(50) as undefinedValue, i (i)}
					<p>Content {undefinedValue} {i}</p>
				{/each}
			</Dialog>
		</Dialog>

		<MinimalDialog xs fluid>
			{#snippet trigger({ props })}
				<ElevatedButton {...props}>Open MinimalDialog</ElevatedButton>
			{/snippet}

			Ahihi do ngok!
		</MinimalDialog>

		<CommandDialog xs fluid>
			{#snippet trigger({ props })}
				<ElevatedButton {...props}>Open CommandDialog</ElevatedButton>
			{/snippet}

			<CommandGroupItems>
				{#snippet heading()}
					Actions
				{/snippet}

				<CommandItem shortcut="Alt+A">
					{#snippet icon()}
						<IconPlay />
					{/snippet}
					Start
				</CommandItem>
				<CommandItem>
					{#snippet icon()}
						<IconStop />
					{/snippet}
					Stop
				</CommandItem>
				<CommandItem>
					{#snippet icon()}
						<IconPause />
					{/snippet}
					Pause
				</CommandItem>
				<CommandItem>
					{#snippet icon()}
						<IconPlay />
					{/snippet}
					Resume
				</CommandItem>
			</CommandGroupItems>

			<CommandItem>Do ngok 1</CommandItem>
			<CommandItem>Do ngok 2</CommandItem>
			<CommandItem>Do ngok 3</CommandItem>
			<CommandItem>Do ngok 4</CommandItem>
		</CommandDialog>
	</Spacer>
</Card>
