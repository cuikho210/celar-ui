<script lang="ts">
	import {
		Container,
		DuckSpinner,
		TextButton,
		ElevatedButton,
		FilledButton,
		OutlinedButton
	} from '$lib/index.js';
</script>

<Container sm>
	<h3>Buttons</h3>
	<TextButton>Text</TextButton>
	<ElevatedButton>Elevated</ElevatedButton>
	<FilledButton>Filled</FilledButton>
	<OutlinedButton>Outlined</OutlinedButton>
</Container>

<Container sm>
	<h3>Misc</h3>
	<DuckSpinner size="24" />
	<DuckSpinner size="48" thin />
</Container>
