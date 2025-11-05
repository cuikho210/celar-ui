<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	interface AdaptiveSidebarProps extends HTMLAttributes<HTMLElement> {
		open?: boolean;
		collapsedSize?: string;
		expandedSize?: string;
	}

	let {
		open = $bindable(false),
		collapsedSize = '80px',
		expandedSize = '300px',
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
		style:--collapsed={collapsedSize}
		style:--expanded={expandedSize}
		style:--width={open ? expandedSize : collapsedSize}
	>
		{@render children?.()}
	</aside>
</div>

<style lang="scss">
	@use 'sass:map';
	@use '../../styles/spacing.scss';

	[data-adaptive-sidebar-backdrop] {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		backdrop-filter: blur(var(--blur-length));
		background-color: rgba(var(--color-onBackground--rgb), 0.2);
		z-index: 100;
		visibility: hidden;
		opacity: 0;
		transition-property: opacity, visibility;
		transition-timing-function: ease-in;
		transition-duration: var(--transition-dur);
	}

	[data-adaptive-sidebar] {
		box-sizing: border-box;
		z-index: 100;
		position: relative;
		height: 100vh;
		width: var(--expanded);
		background-color: var(--color-surface);
		padding: var(--gap);
		border-top-right-radius: var(--gap--x2);
		border-bottom-right-radius: var(--gap--x2);
		max-width: 80vw;
		overflow: hidden;
		transition-property: transform, width, opacity, visibility;
		transition-timing-function: ease-in-out;
		transition-duration: var(--transition-dur);
	}

	[data-adaptive-sidebar-state] {
		display: none;
	}

	@media screen and (max-width: map.get(spacing.$breaking, break--xs)) {
		[data-adaptive-sidebar] {
			position: fixed;
			top: 0;
			left: 0;
			box-shadow: 0 0rem var(--gap) var(--color-shadow--md);
			transform: translateX(-100%);
			opacity: 0;
			visibility: hidden;
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
		}
	}

	@media screen and (min-width: calc(map.get(spacing.$breaking, break--xs) + 1px)) {
		[data-adaptive-sidebar] {
			width: var(--width);
		}
	}
</style>
