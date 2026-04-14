<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	let { children, ...rest }: HTMLAttributes<HTMLElement> = $props();
</script>

<section {...rest} data-navigation-bar>
	{@render children?.()}
</section>

<style lang="postcss">
	@reference '$style/index.css';

	[data-navigation-bar] {
		box-sizing: border-box;
		display: flex;
		position: relative;
		justify-content: space-evenly;
		border-top-right-radius: var(--radius-2xl);
		border-top-left-radius: var(--radius-2xl);
		background-color: var(--color-surfaceContainerLow);
		width: 100%;
		height: auto;

		@variant sm {
			flex-direction: column;
			justify-content: flex-start;
			border-top-left-radius: 0;
			border-bottom-right-radius: var(--radius);
			padding: 0 --spacing(2);
			width: min-content;
			height: 100%;
		}
	}
</style>
