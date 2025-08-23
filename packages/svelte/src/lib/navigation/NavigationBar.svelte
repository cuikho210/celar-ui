<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	let { children, ...rest }: HTMLAttributes<HTMLElement> = $props();
</script>

<section {...rest} data-navigation-bar>
	{@render children?.()}
</section>

<style lang="scss">
	@use 'sass:map';
	@use '../../styles/spacing.scss';

	[data-navigation-bar] {
		box-sizing: border-box;
		display: flex;
		position: relative;
		justify-content: space-evenly;
		border-top-right-radius: var(--radius);
		border-top-left-radius: var(--radius);
		background-color: var(--color-surfaceContainerLow);
		width: 100%;
		height: auto;

		@media screen and (min-width: map.get(spacing.$breaking, break--xs)) {
			flex-direction: column;
			justify-content: flex-start;
			border-top-left-radius: 0;
			border-bottom-right-radius: var(--radius);
			padding: 0 var(--gap--half);
			width: min-content;
			height: 100%;
		}
	}
</style>
