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

<style lang="scss">
	[data-file-input] {
		$icon-width: 48px;
		$color-text-placeholder: rgba(var(--color-text--rgb), 0.4);
		display: flex;

		position: relative;
		justify-content: flex-start;
		align-items: center;
		border: 1px solid var(--color-border);
		border-radius: var(--radius);
		padding: var(--gap--md) 0;
		width: 100%;

		input {
			display: none;
		}

		[data-file-input-icon] {
			display: flex;
			flex-shrink: 0;
			justify-content: center;
			align-items: center;
			width: $icon-width;
			height: 100%;
			line-height: 1rem;
		}

		[data-file-input-placeholder] {
			padding-right: var(--gap);
			max-width: 100%;
			overflow: hidden;
			color: $color-text-placeholder;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	}
</style>
