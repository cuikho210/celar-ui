<script lang="ts">
	import type { Property } from 'csstype';
	import type { HTMLAttributes } from 'svelte/elements';

	export interface SpacerProps extends HTMLAttributes<HTMLDivElement> {
		gap?: Property.Gap;
		wrap?: Property.FlexWrap;
		justify?: Property.JustifyContent;
		align?: Property.AlignItems;
		direction?: Property.FlexDirection;
	}

	let { children, gap, wrap, justify, align, direction, ...rest }: SpacerProps = $props();
</script>

<div
	{...rest}
	data-spacer
	style:gap
	style:flex-wrap={wrap}
	style:justify-content={justify}
	style:align-items={align}
	style:flex-direction={direction}
>
	{#if children}
		{@render children()}
	{/if}
</div>

<style lang="scss">
	[data-spacer] {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
		display: flex;
		position: relative;
		flex-wrap: wrap;
		justify-content: flex-start;
		align-items: flex-start;
		gap: var(--gap--half);
	}
</style>
