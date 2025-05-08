<script lang="ts">
	import './styles/icon_button.scss';
	import DotSpinner from '$lib/misc/DotSpinner.svelte';
	import BaseButton from './BaseButton.svelte';
	import type { BaseButtonProps } from './BaseButton.svelte';

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
			<DotSpinner size="24px" color="var(--color-primary--text)" />
		</div>
	{/if}
{/snippet}

<BaseButton {...rest} children={baseChildren} data-button-icon />

