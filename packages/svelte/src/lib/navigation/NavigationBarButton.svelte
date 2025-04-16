<script lang="ts">
	import type { HTMLAnchorAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';

	interface NavigationBarButtonProps extends HTMLAnchorAttributes {
		icon: Snippet;
		iconActive?: Snippet;
		active?: boolean;
	}

	let { active, icon, iconActive, children, ...rest }: NavigationBarButtonProps = $props();
</script>

<a {...rest} data-navigation-bar-button data-active={active}>
	<div data-navigation-bar-button-icon>
		{#if active}
			{@render (iconActive || icon)()}
		{:else}
			{@render icon()}
		{/if}
	</div>

	{@render children?.()}
</a>

<style lang="scss">
	[data-navigation-bar-button] {
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		gap: var(--gap--xs);
		background-color: transparent;
		padding: var(--gap--half) 0;
		width: 100%;
		color: var(--color-text);
		text-align: center;
		font-size: 0.8rem;
		text-decoration: none;
		-webkit-tap-highlight-color: transparent;

		&:not(:disabled):active {
			top: 0;
		}

		&:hover {
			& > [data-navigation-bar-button-icon] {
				background-color: var(--color-primary--light);
			}
		}

		&[data-active='true'] {
			& > [data-navigation-bar-button-icon] {
				background-color: var(--color-primary);
				color: var(--color-primary--text);
			}
		}

		& > [data-navigation-bar-button-icon] {
			transition-duration: var(--transition-dur);
			transition-property: color, background-color;
			border-radius: var(--radius);
			background-color: var(--color-primary--lighter);
			padding: var(--gap--xs) var(--gap);
		}
	}
</style>
