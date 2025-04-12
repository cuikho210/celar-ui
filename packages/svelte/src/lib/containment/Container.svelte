<script lang="ts">
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

<style lang="scss">
	[data-container] {
		position: relative;
		margin: 0 auto;
		border-radius: var(--radius);
		padding: var(--gap);

		&[data-xs='true'] {
			max-width: var(--break--xs);
		}

		&[data-sm='true'] {
			max-width: var(--break--sm);
		}

		&[data-md='true'] {
			max-width: var(--break--md);
		}

		&[data-fluid='true'] {
			width: 100%;
		}
	}
</style>
