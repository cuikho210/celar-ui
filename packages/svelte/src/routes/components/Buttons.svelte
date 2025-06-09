<script lang="ts">
	import {
		Card,
		ElevatedButton,
		FilledButton,
		Gap,
		IconButton,
		OutlinedButton,
		Spacer,
		TextButton
	} from '$lib/index.js';
	import HugeiconsInLove from '~icons/hugeicons/in-love';
</script>

<Card>
	<h3>Buttons</h3>
	<Gap />

	<p><i>Normal</i></p>
	<Gap size=".5rem" />
	<Spacer>
		<ElevatedButton>Elevated</ElevatedButton>
		<FilledButton>Filled</FilledButton>
		<OutlinedButton>Outlined</OutlinedButton>
		<TextButton>Text</TextButton>
		<IconButton><HugeiconsInLove font-size="20px" /></IconButton>
	</Spacer>
	<Gap />

	<p><i>Disabled</i></p>
	<Gap size=".5rem" />
	<Spacer>
		<ElevatedButton disabled href="#">Elevated</ElevatedButton>
		<FilledButton disabled>Filled</FilledButton>
		<OutlinedButton disabled>Outlined</OutlinedButton>
		<TextButton disabled>Text</TextButton>
		<IconButton disabled><HugeiconsInLove font-size="20px" /></IconButton>
	</Spacer>
	<Gap />

	<p><i>Loading</i></p>
	<Gap size=".5rem" />
	<Spacer>
		<ElevatedButton disabled loading>Elevated</ElevatedButton>
		<FilledButton disabled loading>Filled</FilledButton>
		<OutlinedButton disabled loading>Outlined</OutlinedButton>
		<TextButton disabled loading>Text</TextButton>
		<IconButton disabled loading><HugeiconsInLove font-size="20px" /></IconButton>
	</Spacer>
	<Gap />

	<p><i>Active</i></p>
	<Gap size=".5rem" />
	<Spacer>
		<ElevatedButton disabled active>Elevated</ElevatedButton>
		<FilledButton disabled active>Filled</FilledButton>
		<OutlinedButton disabled active>Outlined</OutlinedButton>
		<TextButton disabled active>Text</TextButton>
		<IconButton disabled active><HugeiconsInLove font-size="20px" /></IconButton>
	</Spacer>
	<Gap />

	<p><i>With icons</i></p>
	<Gap size=".5rem" />
	<Spacer>
		<ElevatedButton>
			{#snippet icon()}
				<HugeiconsInLove font-size="20px" />
			{/snippet}
			Elevated
		</ElevatedButton>
		<FilledButton>
			{#snippet icon()}
				<HugeiconsInLove font-size="20px" />
			{/snippet}
			Filled
		</FilledButton>
		<OutlinedButton>
			{#snippet icon()}
				<HugeiconsInLove font-size="20px" />
			{/snippet}
			Outlined
		</OutlinedButton>
		<TextButton>
			{#snippet icon()}
				<HugeiconsInLove font-size="20px" />
			{/snippet}
			Text
		</TextButton>
	</Spacer>
</Card>
