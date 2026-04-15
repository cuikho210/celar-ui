<script lang="ts">
	import './styles/card.css';
	import type { SurfaceContainerProps } from './SurfaceContainer.svelte';
	import SurfaceContainer from './SurfaceContainer.svelte';

	let props: SurfaceContainerProps = $props();
</script>

<SurfaceContainer {...props} data-card />
