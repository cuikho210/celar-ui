<script lang="ts">
	import './styles/container.css';
	import type { HTMLAttributes } from 'svelte/elements';

	export interface ContainerProps extends HTMLAttributes<HTMLElement> {
		xs?: boolean;
		sm?: boolean;
		md?: boolean;
		lg?: boolean;
		xl?: boolean;
		x2xl?: boolean;
		fluid?: boolean;
	}

	let { children, xs, sm, md, lg, xl, x2xl, fluid, ...rest }: ContainerProps = $props();
</script>

<section
	{...rest}
	data-container
	data-xs={xs}
	data-sm={sm}
	data-md={md}
	data-lg={lg}
	data-xl={xl}
	data-2xl={x2xl}
	data-fluid={fluid}
>
	{#if children}
		{@render children()}
	{/if}
</section>
