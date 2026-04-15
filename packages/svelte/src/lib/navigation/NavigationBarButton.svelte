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

<style lang="postcss">
	@reference '@celar-ui/svelte/styles/index.css';

	@layer components {
		[data-navigation-bar-button] {
			box-sizing: border-box;
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: center;
			gap: --spacing(1);
			background-color: transparent;
			padding: --spacing(2) 0;
			width: 100%;
			color: var(--color-onSurface);
			text-align: center;
			font-size: 0.8rem;
			text-decoration: none;
			-webkit-tap-highlight-color: transparent;

			&:not(:disabled):active {
				top: 0;
			}

			&:hover {
				& > [data-navigation-bar-button-icon] {
					background-color: var(--color-primaryContainer);
				}
			}

			&[data-active='true'] {
				& > [data-navigation-bar-button-icon] {
					background-color: var(--color-inversePrimary);
				}
			}

			& > [data-navigation-bar-button-icon] {
				@apply rounded-2xl bg-transparent px-4 py-1 transition-all;
			}
		}
	}
</style>
