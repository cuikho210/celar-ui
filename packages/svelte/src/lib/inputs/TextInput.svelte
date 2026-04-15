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

<style lang="postcss">
	@reference '@celar-ui/svelte/styles/index.css';

	@layer components {
		[data-text-input] {
			margin: 0;
			padding: 0;
			display: block;
			position: relative;
			width: 100%;
			pointer-events: all;

			input {
				@apply border-onBackground/20 rounded-2xl border border-solid transition-all;
				box-sizing: border-box;
				background-color: transparent;
				padding: --spacing(2) --spacing(4);
				padding-left: --spacing(14);
				width: 100%;
				font-size: inherit;
				font-family: inherit;
				color: inherit;

				&:focus {
					@apply border-primary;
					outline: none;
					caret-color: var(--color-primary);

					+ [data-text-input-icon] {
						color: var(--color-primary);
					}
				}

				&:is(:placeholder-shown) ~ [data-text-input-placeholder] {
					transform: translateY(50%);
					visibility: hidden;
					opacity: 0;
				}

				&::placeholder {
					@apply text-onBackground/70;
					opacity: 1;
				}
			}

			[data-text-input-icon] {
				@apply transition-all;
				display: flex;
				position: absolute;
				top: 0;
				left: 0;
				justify-content: center;
				align-items: center;
				width: --spacing(14);
				height: 100%;
				pointer-events: none;
			}

			[data-text-input-placeholder] {
				@apply text-onBackground/70 transition-all;
				position: absolute;
				pointer-events: none;
				font-size: 0.8em;
				top: 0;
				right: --spacing(4);
				transform: translateY(0);
				visibility: visible;
				opacity: 1;
			}
		}
	}
</style>
