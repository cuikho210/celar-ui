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
	<Spacer>
		<TextButton>Text</TextButton>
		<ElevatedButton>Elevated</ElevatedButton>
		<FilledButton>Filled</FilledButton>
		<OutlinedButton>Outlined</OutlinedButton>
		<IconButton><HugeiconsInLove font-size="20px" /></IconButton>
	</Spacer>
</Card>
