<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLInputAttributes } from 'svelte/elements';

	interface ColorInputProps extends HTMLInputAttributes {
		icon?: Snippet;
	}

	let { value = $bindable(), placeholder, icon, ...rest }: ColorInputProps = $props();
</script>

<label data-color-input>
	<input {...rest} type="color" bind:value {placeholder} />

	<div data-color-input-icon>
		{@render icon?.()}
	</div>
	<div data-color-input-placeholder>{placeholder}</div>
</label>

<style lang="scss">
	[data-color-input] {
		$icon-width: 48px;
		$color-text-placeholder: rgba(var(--color-onSurface--rgb), 0.7);
		display: flex;

		position: relative;
		justify-content: flex-start;
		align-items: center;
		border: 1px solid var(--color-border);
		border-radius: var(--radius);
		padding: var(--gap--md) 0;
		width: 100%;

		> input {
			position: absolute;
			top: 0;
			right: 0;
			appearance: none;
			outline: none;
			border: none;
			border-radius: var(--radius);
			width: 64px;
			height: 100%;

			&::-moz-color-swatch {
				border: none;
			}

			&::-webkit-color-swatch-wrapper {
				padding: 0;
			}

			&::-webkit-color-swatch {
				border: none;
				border-radius: var(--radius);
			}
		}

		[data-color-input-icon] {
			display: flex;
			flex-shrink: 0;
			justify-content: center;
			align-items: center;
			width: $icon-width;
			height: 100%;
			line-height: 1rem;
		}

		[data-color-input-placeholder] {
			margin-right: 4rem;
			padding-right: var(--gap--half);
			max-width: 100%;
			overflow: hidden;
			color: $color-text-placeholder;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	}
</style>
