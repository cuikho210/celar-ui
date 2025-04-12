<script lang="ts">
	import { Avatar, type AvatarRootProps } from 'bits-ui';
	import type { Snippet } from 'svelte';

	export type AvatarProps = AvatarRootProps & {
		src: string;
		size?: string;
		alt?: string;
		fallback?: Snippet;
	};

	let { size = '64px', src, alt, fallback, ...rest }: AvatarProps = $props();
</script>

<Avatar.Root {...rest} style="--size: {size}">
	<Avatar.Image {src} {alt} />
	<Avatar.Fallback>
		{#if fallback}
			{@render fallback()}
		{/if}
	</Avatar.Fallback>
</Avatar.Root>

<style lang="scss">
	:global([data-avatar-root]) {
		display: block;
		position: relative;
		background-color: var(--vuuui-color-bg-info);
		aspect-ratio: 1;
		width: var(--size);
	}

	:global([data-avatar-image], [data-avatar-fallback]) {
		object-fit: cover;
		border-radius: 50%;
		width: 100%;
		height: 100%;
	}
</style>
