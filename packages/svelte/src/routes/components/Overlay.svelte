<script lang="ts">
	import { Card, Gap, Spacer, Dialog, ElevatedButton } from '$lib/index.js';
	import IconCancel from '~icons/hugeicons/cancel-01';

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
	</Spacer>
</Card>
