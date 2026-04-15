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

<style lang="postcss">
	@reference '@celar-ui/svelte/styles/index.css';

	@layer components {
		[data-color-input] {
			@apply border-onBackground/20 border border-solid;
			display: flex;
			position: relative;
			justify-content: flex-start;
			align-items: center;
			border-radius: var(--radius-2xl);
			padding: --spacing(1.5) 0;
			width: 100%;

			> input {
				position: absolute;
				top: 0;
				right: 0;
				appearance: none;
				outline: none;
				border: none;
				border-radius: var(--radius-2xl);
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
					border-radius: var(--radius-2xl);
				}
			}

			[data-color-input-icon] {
				display: flex;
				flex-shrink: 0;
				justify-content: center;
				align-items: center;
				width: --spacing(14);
				height: 100%;
				line-height: 1rem;
			}

			[data-color-input-placeholder] {
				@apply text-onBackground/70;
				margin-right: 4rem;
				padding-right: --spacing(2);
				max-width: 100%;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
		}
	}
</style>
