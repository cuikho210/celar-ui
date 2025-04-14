<script lang="ts">
	import { Card, Gap, TextInput, FileInput, ColorInput } from '$lib/index.js';
	import IconSignature from '~icons/hugeicons/signature';
	import IconFileAttachment from '~icons/hugeicons/file-attachment';
</script>

<Card>
	<h3>Inputs</h3>
	<Gap />

	<TextInput placeholder="Text Input">
		{#snippet icon()}
			<IconSignature />
		{/snippet}
	</TextInput>
	<Gap size=".5rem" />

	<FileInput placeholder="File Input">
		{#snippet icon()}
			<IconFileAttachment />
		{/snippet}
	</FileInput>
	<Gap size=".5rem" />

	<ColorInput placeholder="Color input">
		{#snippet icon()}
			<IconFileAttachment />
		{/snippet}
	</ColorInput>
	<Gap size=".5rem" />
</Card>
