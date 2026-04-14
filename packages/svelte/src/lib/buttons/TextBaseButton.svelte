<script lang="ts">
	import BaseButton from './BaseButton.svelte';
	import DotSpinner from '../misc/DotSpinner.svelte';
	import type { BaseButtonProps } from './BaseButton.svelte';
	import type { Snippet } from 'svelte';

	export type TextBaseButtonProps = BaseButtonProps & {
		icon?: Snippet;
		gap?: string;
	};

	let {
		children,
		loading,
		icon,
		active = false,
		gap = 'calc(var(--spacing) * 2)',
		...rest
	}: TextBaseButtonProps = $props();
	let visibility = $derived(loading ? 'hidden' : 'initial');
</script>

<BaseButton {...rest} {loading} {active} data-button-base-text style="--body-gap: {gap}">
	{#if icon}
		<span class="button-icon" style:visibility>
			{@render icon()}
		</span>
	{/if}

	<span class="button-content" style:visibility>
		{#if children}
			{@render children()}
		{/if}
	</span>

	{#if loading}
		<div class="flex justify-center items-center w-full h-full absolute top-0 left-0">
			<DotSpinner size="24px" />
		</div>
	{/if}
</BaseButton>
