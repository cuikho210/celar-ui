<script lang="ts">
	import Spacer from '$lib/containment/Spacer.svelte';
	import { Card, Gap, SurfaceContainer } from '$lib/index.js';
</script>

<Card>
	<h3>SurfaceContainers</h3>
	<Gap />
	<Spacer direction="column">
		<SurfaceContainer fluid>Default 0</SurfaceContainer>
		<SurfaceContainer fluid elevated={1}>Elevated 1</SurfaceContainer>
		<SurfaceContainer fluid elevated={2}>Elevated 2</SurfaceContainer>
		<SurfaceContainer fluid elevated={3}>Elevated 3</SurfaceContainer>
		<SurfaceContainer fluid elevated={4}>Elevated 4</SurfaceContainer>
		<SurfaceContainer fluid elevated={5}>Elevated 5</SurfaceContainer>
	</Spacer>
</Card>
