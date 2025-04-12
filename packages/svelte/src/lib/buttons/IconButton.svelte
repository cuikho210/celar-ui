<script lang="ts">
	import BaseButton from './BaseButton.svelte';
	import type { BaseButtonProps } from './BaseButton.svelte';
	import { DuckSpinner } from '../index.js';

	let { children, ...rest }: BaseButtonProps = $props();
</script>

{#snippet baseChildren()}
	<div class="button-body" style:visibility={rest.loading ? 'hidden' : 'initial'}>
		{#if children}
			{@render children()}
		{/if}
	</div>

	{#if rest.loading}
		<div class="button-spinner">
			<DuckSpinner />
		</div>
	{/if}
{/snippet}

<BaseButton {...rest} children={baseChildren} data-button-icon />

<style lang="scss">
	:global([data-button-icon]) {
		flex-grow: 0;
		flex-shrink: 0;
		transition-duration: var(--transition-dur);
		transition-property: background-color, opacity, color;
		border-radius: 50%;
		background-color: transparent;
		padding: var(--gap--half);
		aspect-ratio: 1/1;
		line-height: 1;

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

		.button-body {
			line-height: 0;
		}

		&:not(:disabled, [data-active='true']):hover {
			background-color: var(--color-primary--light);
		}
	}

	:global([data-button-icon][data-active='true']) {
		background-color: var(--color-alt);
		color: var(--color-primary--text);
	}
</style>
