<script lang="ts">
	import Spacer from '$lib/containment/Spacer.svelte';
	import { Card, Gap, SurfaceContainer } from '$lib/index.js';
</script>

<Card>
	<h3>SurfaceContainers</h3>
	<Gap />
	<Spacer direction="column">
		<SurfaceContainer fluid>Default 0</SurfaceContainer>

		{#each [1, 2, 3, 4, 5] as level (level)}
			<SurfaceContainer fluid elevated={level as 0}>Elevated {level}</SurfaceContainer>
		{/each}
	</Spacer>
</Card>
