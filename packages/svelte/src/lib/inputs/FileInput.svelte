<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLInputAttributes } from 'svelte/elements';

	interface FileInputProps extends HTMLInputAttributes {
		icon?: Snippet;
		files?: FileList;
	}

	let { icon, files = $bindable(), placeholder, ...rest }: FileInputProps = $props();
	let firstFileName = $derived(files?.[0]?.name);
</script>

<label data-file-input>
	<input {...rest} type="file" bind:files {placeholder} />

	<div data-file-input-icon>
		{@render icon?.()}
	</div>

	<div data-file-input-placeholder>
		{firstFileName ?? placeholder}
	</div>
</label>

<style lang="postcss">
	@reference '$style/index.css';

	@layer components {
		[data-file-input] {
			@apply border-onBackground/20 border border-solid;
			display: flex;
			position: relative;
			justify-content: flex-start;
			align-items: center;
			border-radius: var(--radius-2xl);
			padding: --spacing(1.5) 0;
			width: 100%;

			input {
				display: none;
			}

			[data-file-input-icon] {
				display: flex;
				flex-shrink: 0;
				justify-content: center;
				align-items: center;
				width: --spacing(14);
				height: 100%;
				line-height: 1rem;
			}

			[data-file-input-placeholder] {
				@apply text-onBackground/70;
				padding-right: --spacing(4);
				max-width: 100%;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
		}
	}
</style>
