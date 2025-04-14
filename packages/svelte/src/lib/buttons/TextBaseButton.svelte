<script lang="ts">
	import BaseButton from './BaseButton.svelte';
	import DotSpinner from '../misc/DotSpinner.svelte';
	import type { BaseButtonProps } from './BaseButton.svelte';
	import type { Snippet } from 'svelte';

	export type TextBaseButtonProps = BaseButtonProps & {
		icon?: Snippet;
	};

	let { children, loading, icon, ...rest }: TextBaseButtonProps = $props();
</script>

{#snippet baseChildren()}
	<div class="button-body" style:visibility={loading ? 'hidden' : 'initial'}>
		{#if icon}
			<span class="button-icon">
				{@render icon()}
			</span>
		{/if}

		<span class="button-content">
			{#if children}
				{@render children()}
			{/if}
		</span>
	</div>

	{#if loading}
		<div class="button-spinner">
			<DotSpinner size="24px" color="var(--color-primary--text)" />
		</div>
	{/if}
{/snippet}

<BaseButton {...rest} children={baseChildren} {loading} data-button-base-text />

<style lang="scss">
	:global([data-button-base-text]) {
		border-radius: var(--radius);
	}

	.button-body {
		display: flex;
		align-items: center;
		gap: var(--gap--half);
		padding: 0 var(--gap);

		.button-content {
			padding: var(--gap--half) 0;
		}

		.button-icon {
			line-height: 0;
		}
	}

	.button-spinner {
		display: flex;
		position: absolute;
		top: 0;
		left: 0;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
	}
</style>
