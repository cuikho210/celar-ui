<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	let props: HTMLAttributes<HTMLDivElement> = $props();
</script>

<div {...props} data-linear-progress-indicator>
	<div data-linear-progress-indicator-line></div>
</div>

<style lang="scss">
	[data-linear-progress-indicator] {
		--line-height: var(--gap--sm);
		--anim-duration: 1.7s;

		display: block;
		position: relative;
		background-color: var(--color-surfaceDim);
		width: 100%;
		height: var(--line-height);
		overflow: hidden;

		[data-linear-progress-indicator-line] {
			position: absolute;
			top: 0;
			left: 0;
			animation: linear-progress-animation var(--anim-duration) linear infinite;
			background-color: var(--color-primary);
			width: 0;
			height: 100%;
		}

		@keyframes linear-progress-animation {
			0% {
				left: -8%;
				width: 8%;
			}
			100% {
				left: 100%;
				width: 100%;
			}
		}
	}
</style>
