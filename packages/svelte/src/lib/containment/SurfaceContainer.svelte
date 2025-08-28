<script lang="ts">
	import './styles/surface-container.scss';
	import Container, { type ContainerProps } from './Container.svelte';

	export interface SurfaceContainerProps extends ContainerProps {
		elevated?: number;
	}

	let { elevated = 0, ...rest }: SurfaceContainerProps = $props();
</script>

<Container {...rest} data-surface-container data-elevated={elevated} />
