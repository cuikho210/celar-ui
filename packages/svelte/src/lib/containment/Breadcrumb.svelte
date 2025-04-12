<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	let { children, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
</script>

<div {...rest} data-breadcrumb>
	{#if children}
		{@render children()}
	{/if}
</div>

<style lang="scss">
	:global([data-breadcrumb]) {
		position: relative;
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	:global([data-breadcrumb] > a) {
		padding: 0;
		margin: 0;
		color: var(--color-text-info);
		text-decoration: none;

		&:not(:last-child)::after {
			content: '/';
			color: var(--color-text);
			padding: 0 var(--gap--half);
		}

		&:last-child {
			pointer-events: none;
			color: var(--color-primary--dark);
		}
	}
</style>
