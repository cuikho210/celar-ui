<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLInputAttributes } from 'svelte/elements';

	interface TextInputProps extends HTMLInputAttributes {
		icon?: Snippet;
	}

	let { icon, value = $bindable(), placeholder, ...rest }: TextInputProps = $props();
</script>

<label data-text-input>
	<input {...rest} bind:value {placeholder} />

	<div data-text-input-icon>
		{@render icon?.()}
	</div>

	<div data-text-input-placeholder>{placeholder}</div>
</label>

<style lang="scss">
	$icon-width: 48px;
	$color-text-placeholder: rgba(var(--color-text--rgb), 0.4);

	[data-text-input] {
		margin: 0;
		padding: 0;
		display: block;
		position: relative;
		width: 100%;

		input {
			box-sizing: border-box;
			transition-duration: var(--transition-dur);
			transition-property: border-color;
			border: 1px solid var(--color-border);
			border-radius: var(--radius);
			background-color: transparent;
			padding: var(--gap--md) var(--gap);
			padding-left: $icon-width;
			width: 100%;
			font-size: inherit;
			font-family: inherit;

			&:focus {
				outline: none;
				border: 1px solid var(--color-primary);

				+ [data-text-input-icon] {
					color: var(--color-primary--dark);
				}
			}

			&:is(:placeholder-shown) ~ [data-text-input-placeholder] {
				top: var(--gap--md);
				right: calc(100% - $icon-width);
				translate: 100%;
				visibility: hidden;
				opacity: 0;
			}

			&::placeholder {
				opacity: 1;
				color: $color-text-placeholder;
			}
		}

		[data-text-input-icon] {
			display: flex;
			position: absolute;
			top: 0;
			left: 0;
			justify-content: center;
			align-items: center;
			transition-duration: var(--transition-dur);
			transition-property: color;
			width: $icon-width;
			height: 100%;
			pointer-events: none;
		}

		[data-text-input-placeholder] {
			position: absolute;
			transition-duration: var(--transition-dur);
			transition-property: visibility, opacity, top, right, translate;
			pointer-events: none;
			color: $color-text-placeholder;
			font-size: smaller;
			top: 0;
			right: var(--gap);
			translate: 0;
			visibility: visible;
			opacity: 1;
		}
	}
</style>
