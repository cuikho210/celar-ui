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

<style lang="postcss">
	@reference '$style/index.css';

	@layer components {
		[data-badge] {
			box-sizing: border-box;
			border-radius: var(--radius-2xl);
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
				padding: --spacing(1.5) --spacing(2);
			}
			&[data-size='medium'] {
				font-size: 0.9em;
				padding: --spacing(1.5) --spacing(2);
			}
			&[data-size='large'] {
				font-size: 1em;
				padding: --spacing(1.5) --spacing(3);
			}
		}
	}
</style>
