<script lang="ts">
	import { Card, Gap, TextInput, FileInput, ColorInput, Checkbox } from '$lib/index.js';
	import IconSignature from '~icons/hugeicons/signature';
	import IconFileAttachment from '~icons/hugeicons/file-attachment';
	import RadioGroup from '$lib/inputs/RadioGroup.svelte';
	import RadioItem from '$lib/inputs/RadioItem.svelte';
	import Switch from '$lib/inputs/Switch.svelte';
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
	<Gap />

	<Checkbox indeterminate>Checkbox 1</Checkbox>
	<Checkbox>Checkbox 2</Checkbox>
	<Gap />

	<RadioGroup>
		<RadioItem value="ahihi">Ahihi</RadioItem>
		<RadioItem value="ahuhu">Ahuhu</RadioItem>
		<RadioItem value="ahaha">Ahaha</RadioItem>
	</RadioGroup>
	<Gap />

	<Switch>Switch</Switch>
</Card>
