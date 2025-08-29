<script lang="ts">
	import './styles/surface-container.scss';
	import Container, { type ContainerProps } from './Container.svelte';

	export interface SurfaceContainerProps extends ContainerProps {
		elevated?: 0 | 1 | 2 | 3 | 4 | 5;
	}

	let { elevated = 0, ...rest }: SurfaceContainerProps = $props();
</script>

<Container {...rest} data-surface-container data-elevated={elevated} />
