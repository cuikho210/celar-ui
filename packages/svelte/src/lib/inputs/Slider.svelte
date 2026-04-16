<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';

	let { value = $bindable(), min, max, step, ...rest }: HTMLInputAttributes = $props();
</script>

<div data-slider>
	<input
		type="range"
		bind:value
		{min}
		{max}
		{step}
		style:--val={value || 0}
		style:--min={min || 0}
		style:--max={max || 100}
		{...rest}
	/>
</div>

<style lang="postcss">
	@reference 'tailwindcss';
	@reference '@celar-ui/svelte/styles/index.css';

	@utility track {
		@apply box-border h-2 w-full rounded-2xl border-none;
		background: var(--color-surfaceDim);
	}
	@utility track-fill {
		@apply track;
		background: linear-gradient(var(--color-primary), var(--color-primary)) 0 / var(--sx) 100%
			no-repeat var(--color-surfaceDim);
	}
	@utility fill {
		@apply bg-primary h-2 rounded-2xl;
	}
	@utility thumb {
		@apply bg-primary box-border h-6 w-6 rounded-[50%] border-none;
	}

	@layer base {
		[data-slider] {
			position: relative;
			padding: 0 --spacing(4);
			width: 100%;
			box-sizing: border-box;

			& > input {
				--range: calc(var(--max) - var(--min));
				--ratio: calc((var(--val) - var(--min)) / var(--range));
				--sx: calc(0.5 * --spacing(4) + var(--ratio) * (100% - --spacing(4)));
				margin: 0;
				background: transparent;
				padding: 0;
				width: 100%;
				height: --spacing(4);

				&,
				&::-webkit-slider-thumb {
					appearance: none;
				}

				&::-webkit-slider-runnable-track {
					@apply track-fill;
				}
				&::-moz-range-track {
					@apply track;
				}
				&::-ms-track {
					@apply track;
				}

				&::-moz-range-progress {
					@apply fill;
				}
				&::-ms-fill-lower {
					@apply fill;
				}

				&::-webkit-slider-thumb {
					margin-top: calc(0.5 * --spacing(-4));
					@apply thumb;
				}
				&::-moz-range-thumb {
					@apply thumb;
				}
				&::-ms-thumb {
					margin-top: 0;
					@apply thumb;
				}

				&::-ms-tooltip {
					display: none;
				}
			}
		}
	}
</style>
