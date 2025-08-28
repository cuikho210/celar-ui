<script lang="ts">
	import './styles/container.scss';
	import type { HTMLAttributes } from 'svelte/elements';

	export interface ContainerProps extends HTMLAttributes<HTMLElement> {
		xs?: boolean;
		sm?: boolean;
		md?: boolean;
		fluid?: boolean;
	}

	let { children, xs, sm, md, fluid, ...rest }: ContainerProps = $props();
</script>

<section {...rest} data-container data-xs={xs} data-sm={sm} data-md={md} data-fluid={fluid}>
	{#if children}
		{@render children()}
	{/if}
</section>
