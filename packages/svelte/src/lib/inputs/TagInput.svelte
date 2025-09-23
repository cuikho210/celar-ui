<script lang="ts">
	import Badge from '$lib/misc/Badge.svelte';
	import type { HTMLInputAttributes } from 'svelte/elements';

	interface TagInputProps extends Omit<HTMLInputAttributes, 'value'> {
		tags?: string[];
		placeholder?: string;
		maxTags?: number;
		allowDuplicates?: boolean;
		onTagAdd?: (tag: string) => void;
		onTagRemove?: (tag: string, index: number) => void;
	}

	let {
		tags = $bindable([]),
		placeholder = 'Add tags...',
		maxTags,
		allowDuplicates = false,
		onTagAdd,
		onTagRemove,
		...rest
	}: TagInputProps = $props();

	let inputValue = $state('');

	let inputElement: HTMLInputElement;

	const addTag = (tag: string) => {
		const trimmedTag = tag.trim();
		if (!trimmedTag) return;

		if (maxTags && tags.length >= maxTags) return;
		if (!allowDuplicates && tags.includes(trimmedTag)) return;

		tags.push(trimmedTag);
		onTagAdd?.(trimmedTag);
		inputValue = '';
	};

	const removeTag = (index: number) => {
		const removedTag = tags[index];
		tags.splice(index, 1);
		onTagRemove?.(removedTag, index);
	};

	const handleKeydown = (event: KeyboardEvent) => {
		if (event.key === 'Enter' || event.key === ',') {
			event.preventDefault();
			addTag(inputValue);
		} else if (event.key === 'Backspace' && !inputValue && tags.length > 0) {
			removeTag(tags.length - 1);
		}
	};

	const handleInputBlur = () => {
		if (inputValue) {
			addTag(inputValue);
		}
	};

	const focusInputElement = () => {
		inputElement?.focus();
	};
</script>

<div
	data-tag-input
	onclick={focusInputElement}
	onkeyup={focusInputElement}
	role="button"
	tabindex="0"
>
	{#each tags as tag, index (tag)}
		<Badge size="large">
			{tag}

			<button
				type="button"
				data-tag-remove
				onclick={() => removeTag(index)}
				aria-label="Remove {tag}"
			>
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
					<path
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M18 6L6 18M6 6l12 12"
					/>
				</svg>
			</button>
		</Badge>
	{/each}

	<input
		{...rest}
		bind:this={inputElement}
		bind:value={inputValue}
		{placeholder}
		onkeydown={handleKeydown}
		onblur={handleInputBlur}
		disabled={maxTags !== undefined && tags.length >= maxTags}
	/>
</div>

<style lang="scss">
	$color-text-placeholder: rgba(var(--color-onSurface--rgb), 0.7);

	[data-tag-input] {
		--color-background: transparent;

		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: var(--gap--sm);
		position: relative;
		width: 100%;
		box-sizing: border-box;
		transition-duration: var(--transition-dur);
		transition-property: border-color;
		transition-timing-function: ease-in-out;
		border: 1px solid var(--color-border);
		border-radius: var(--radius);
		background-color: var(--color-background);
		padding: var(--gap--md);
		cursor: text;

		&:focus-within {
			border: 1px solid var(--color-primary);
		}

		input {
			flex: 1;
			border: none;
			outline: none;
			background: transparent;
			font-size: inherit;
			font-family: inherit;
			color: inherit;

			&::placeholder {
				opacity: 1;
				color: $color-text-placeholder;
			}

			&:disabled {
				opacity: 0.5;
				cursor: not-allowed;
			}
		}

		[data-tag-remove] {
			display: inline-flex;
			justify-content: center;
			align-items: center;
			background-color: transparent;
			border: none;
			color: inherit;
			cursor: pointer;
			padding: var(--gap--xs);
			border-radius: 50%;
			aspect-ratio: 1;
			transition-duration: var(--transition-dur);
			transition-property: background-color;
			transition-timing-function: ease-in-out;
			margin-left: var(--gap--sm);

			&:hover {
				background-color: var(--color-surfaceContainer);
			}

			&:focus {
				outline: 1px solid var(--color-border);
			}

			svg {
				width: var(--gap);
			}
		}
	}
</style>
