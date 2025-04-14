<script lang="ts">
	import { Card, Gap, TextInput } from '$lib/index.js';
	import IconSignature from '~icons/hugeicons/signature';
</script>

<Card>
	<h3>Inputs</h3>
	<Gap />

	<TextInput placeholder="Placeholder">
		{#snippet icon()}
			<IconSignature />
		{/snippet}
	</TextInput>
</Card>
