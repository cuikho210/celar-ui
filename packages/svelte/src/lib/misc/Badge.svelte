<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
		color?: 'success' | 'info' | 'warning' | 'error' | 'surface';
		size?: 'small' | 'medium' | 'large';
	}

	let { children, color = 'surface', size = 'small', ...rest }: BadgeProps = $props();
</script>

<span {...rest} data-badge data-color={color} data-size={size}>
	{@render children?.()}
</span>

<style lang="scss">
	[data-badge] {
		box-sizing: border-box;
		border-radius: var(--gap);
		line-height: 1;
		display: inline-flex;
		align-items: center;
		justify-content: center;

		&[data-color='surface'] {
			background-color: var(--color-surfaceContainerHighest);
			color: var(--color-onSurface);
		}
		&[data-color='info'] {
			background-color: var(--color-info);
			color: var(--color-onInfo);
		}
		&[data-color='success'] {
			background-color: var(--color-success);
			color: var(--color-onSuccess);
		}
		&[data-color='warning'] {
			background-color: var(--color-warning);
			color: var(--color-onWarning);
		}
		&[data-color='error'] {
			background-color: var(--color-error);
			color: var(--color-onError);
		}

		&[data-size='small'] {
			font-size: 0.8em;
			padding: var(--gap--sm) var(--gap--half);
		}
		&[data-size='medium'] {
			font-size: 0.9em;
			padding: var(--gap--sm) var(--gap--half);
		}
		&[data-size='large'] {
			font-size: 1em;
			padding: var(--gap--sm) var(--gap--md);
		}
	}
</style>
