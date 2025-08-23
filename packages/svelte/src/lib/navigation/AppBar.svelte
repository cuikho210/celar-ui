<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';

	export interface AppBarProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
		leading?: Snippet;
		title?: Snippet;
		actions?: Snippet;
	}

	let { leading, title, actions, ...rest }: AppBarProps = $props();
</script>

<section data-app-bar {...rest}>
	<div data-app-bar-left>
		<div data-app-bar-leading>
			{@render leading?.()}
		</div>

		<div data-app-bar-title>
			{@render title?.()}
		</div>
	</div>

	<div data-app-bar-actions>
		{@render actions?.()}
	</div>
</section>

<style lang="scss">
	[data-app-bar] {
		box-sizing: border-box;
		display: flex;
		position: relative;
		justify-content: space-between;
		align-items: center;
		gap: var(--gap--half);
		backdrop-filter: blur(var(--blur-length--x2));
		background-color: rgba(var(--color-background--rgb), 0.88);
		padding: 0 var(--gap--half);
		min-height: var(--gap--x3);

		[data-app-bar-left] {
			display: flex;
			align-items: center;
			gap: var(--gap--half);
			overflow: hidden;

			[data-app-bar-title] {
				flex: 1;
				overflow: hidden;
				font-weight: bold;
				font-size: 1.1rem;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
		}

		[data-app-bar-actions] {
			display: flex;
			align-items: center;
			gap: var(--gap--sm);
		}
	}
</style>
