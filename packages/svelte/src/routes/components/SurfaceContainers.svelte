<script lang="ts">
	import { Card, Gap, SurfaceContainer } from '$lib/index.js';
</script>

<Card>
	<h3>SurfaceContainers</h3>
	<Gap />
	<SurfaceContainer>Default 0</SurfaceContainer>
	<Gap size=".5rem" />
	<SurfaceContainer elevated={1}>Elevated 1</SurfaceContainer>
	<Gap size=".5rem" />
	<SurfaceContainer elevated={2}>Elevated 2</SurfaceContainer>
	<Gap size=".5rem" />
	<SurfaceContainer elevated={3}>Elevated 3</SurfaceContainer>
	<Gap size=".5rem" />
	<SurfaceContainer elevated={4}>Elevated 4</SurfaceContainer>
</Card>
