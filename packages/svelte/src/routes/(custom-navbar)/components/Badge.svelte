<script lang="ts">
	import IconButton from '$lib/buttons/IconButton.svelte';
	import Spacer from '$lib/containment/Spacer.svelte';
	import { Badge, Card, Gap } from '$lib/index.js';
	import IconCancel from '~icons/hugeicons/cancel-01';
</script>

<Card>
	<h5>Small</h5>
	<Gap size=".5rem" />
	<Spacer>
		<Badge>Badge</Badge>
		<Badge color="info">0</Badge>
		<Badge color="success">1</Badge>
		<Badge color="warning">2</Badge>
		<Badge color="error">3</Badge>
	</Spacer>
	<Gap />

	<h5>Medium</h5>
	<Gap size=".5rem" />
	<Spacer>
		<Badge size="medium" color="info">Badge</Badge>
		<Badge size="medium" color="warning">Badge</Badge>
		<Badge size="medium" color="error">4</Badge>
	</Spacer>
	<Gap />

	<h5>Large</h5>
	<Gap size=".5rem" />
	<Spacer>
		<Badge size="large" color="info">Badge</Badge>
		<Badge size="large" color="warning">Badge</Badge>
		<Badge size="large" color="error">4</Badge>
		<Badge size="large" color="surface">
			<span>Item item</span>
			<IconButton style="margin-left: var(--gap--sm);">
				<IconCancel />
			</IconButton>
		</Badge>
	</Spacer>
	<Gap />
</Card>
