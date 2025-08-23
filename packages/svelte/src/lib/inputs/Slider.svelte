<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';

	let { value = $bindable(), min, max, ...rest }: HTMLInputAttributes = $props();
</script>

<div data-slider>
	<input
		type="range"
		bind:value
		style:--val={value || 0}
		style:--min={min || 0}
		style:--max={max || 100}
		{...rest}
	/>
</div>

<style lang="scss">
	$track-w: 100%;
	$track-h: var(--gap--half);
	$thumb-d: 24px;
	$track-c: var(--color-surfaceDim);
	$filll-c: var(--color-primary);
	$thumb-c: var(--color-primary);

	@mixin track($fill: 0) {
		box-sizing: border-box;
		border: none;
		border-radius: var(--radius);
		background: $track-c;
		width: $track-w;
		height: $track-h;

		@if $fill == 1 {
			& {
				background: linear-gradient($filll-c, $filll-c) 0 / var(--sx) 100% no-repeat $track-c;
			}
		}
	}

	@mixin fill() {
		border-radius: var(--radius);
		background: $filll-c;
		height: $track-h;
	}

	@mixin thumb() {
		box-sizing: border-box;
		border: none;
		border-radius: 50%;
		background: $thumb-c;
		width: $thumb-d;
		height: $thumb-d;
	}

	[data-slider] {
		position: relative;
		padding: 0 var(--gap);

		& > input {
			--range: calc(var(--max) - var(--min));
			--ratio: calc((var(--val) - var(--min)) / var(--range));
			--sx: calc(0.5 *#{$thumb-d} + var(--ratio) * (100% - #{$thumb-d}));
			margin: 0;
			background: transparent;
			padding: 0;
			width: $track-w;
			height: $thumb-d;

			&,
			&::-webkit-slider-thumb {
				appearance: none;
			}

			&::-webkit-slider-runnable-track {
				@include track(1);
			}
			&::-moz-range-track {
				@include track;
			}
			&::-ms-track {
				@include track;
			}

			&::-moz-range-progress {
				@include fill;
			}
			&::-ms-fill-lower {
				@include fill;
			}

			&::-webkit-slider-thumb {
				margin-top: calc(0.5 * ($track-h - $thumb-d));
				@include thumb;
			}
			&::-moz-range-thumb {
				@include thumb;
			}
			&::-ms-thumb {
				margin-top: 0;
				@include thumb;
			}

			&::-ms-tooltip {
				display: none;
			}
		}
	}
</style>
