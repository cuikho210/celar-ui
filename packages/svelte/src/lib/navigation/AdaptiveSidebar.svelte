<script lang="ts">
	import '../containment/styles/surface-container.css';
	import type { HTMLAttributes } from 'svelte/elements';

	interface AdaptiveSidebarProps extends HTMLAttributes<HTMLElement> {
		open?: boolean;
		collapsedSize?: string;
		expandedSize?: string;
		elevated?: 0 | 1 | 2 | 3 | 4 | 5;
	}

	let {
		open = $bindable(false),
		collapsedSize = '80px',
		expandedSize = '300px',
		elevated = 3,
		children,
		...rest
	}: AdaptiveSidebarProps = $props();
</script>

<div>
	<input data-adaptive-sidebar-state type="checkbox" aria-hidden="true" checked={open} />

	<div
		data-adaptive-sidebar-backdrop
		onclick={() => (open = false)}
		onkeyup={(e) => {
			if (e.key == 'Escape') open = false;
		}}
		aria-label="close adaptive sidebar"
		role="button"
		tabindex="0"
	></div>

	<aside
		{...rest}
		data-adaptive-sidebar
		data-surface-container
		style:--collapsed={collapsedSize}
		style:--expanded={expandedSize}
		style:--width={open ? expandedSize : collapsedSize}
		data-elevated={elevated}
	>
		{@render children?.()}
	</aside>
</div>

<style lang="postcss">
	@reference '@celar-ui/svelte/styles/index.css';

	@layer components {
		[data-adaptive-sidebar-backdrop] {
			@apply bg-onBackground/20 backdrop-blur transition-all;
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: 100;
			visibility: hidden;
			opacity: 0;
		}

		[data-adaptive-sidebar] {
			@apply shadow-lg transition-all;
			box-sizing: border-box;
			z-index: 100;
			height: 100vh;
			width: var(--expanded);
			padding: --spacing(4);
			border-radius: 0 --spacing(8) --spacing(8) 0;
			max-width: 80vw;
			overflow: hidden;
			position: fixed;
			top: 0;
			left: 0;
			transform: translateX(-100%);
			opacity: 0;
			visibility: hidden;

			@variant sm {
				position: relative;
				opacity: 1;
				visibility: visible;
				width: var(--width);
				transform: initial;
			}
		}

		[data-adaptive-sidebar-state] {
			display: none;
		}

		[data-adaptive-sidebar-state]:checked {
			~ [data-adaptive-sidebar-backdrop] {
				opacity: 1;
				visibility: visible;
			}

			~ [data-adaptive-sidebar] {
				transform: translateX(0);
				opacity: 1;
				visibility: visible;
			}

			@variant sm {
				~ [data-adaptive-sidebar-backdrop] {
					opacity: 0;
					visibility: hidden;
				}
			}
		}
	}
</style>
