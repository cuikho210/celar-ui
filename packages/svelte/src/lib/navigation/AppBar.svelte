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

<style lang="postcss">
	@reference 'tailwindcss';
	@reference '@celar-ui/svelte/styles/index.css';

	@layer base {
		[data-app-bar] {
			@apply bg-background/88 backdrop-blur;
			box-sizing: border-box;
			display: flex;
			position: relative;
			justify-content: space-between;
			align-items: center;
			gap: --spacing(2);
			padding: 0 --spacing(2);
			min-height: --spacing(12);

			[data-app-bar-left] {
				display: flex;
				align-items: center;
				gap: --spacing(2);
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
				gap: --spacing(1.5);
			}
		}
	}
</style>
