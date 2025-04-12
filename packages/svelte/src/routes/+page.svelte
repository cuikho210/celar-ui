<script lang="ts">
	import IconButton from '$lib/buttons/IconButton.svelte';
	import {
		Container,
		DuckSpinner,
		TextButton,
		ElevatedButton,
		FilledButton,
		OutlinedButton
	} from '$lib/index.js';
	import HugeiconsInLove from '~icons/hugeicons/in-love';
</script>

<Container sm>
	<h3>Buttons</h3>
	<TextButton>Text</TextButton>
	<ElevatedButton>Elevated</ElevatedButton>
	<FilledButton>Filled</FilledButton>
	<OutlinedButton>Outlined</OutlinedButton>
	<IconButton><HugeiconsInLove font-size="20px" /></IconButton>
</Container>

<Container sm>
	<h3>Misc</h3>
	<DuckSpinner size="24" />
	<DuckSpinner size="48" thin />
</Container>
