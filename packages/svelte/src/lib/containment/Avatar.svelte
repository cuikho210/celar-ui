<script lang="ts">
	import { Avatar as BitAvatar, type AvatarRootProps } from 'bits-ui';
	import type { Snippet } from 'svelte';

	export type AvatarProps = AvatarRootProps & {
		src: string;
		size?: string;
		alt?: string;
		fallback?: Snippet;
	};

	let { size = '64px', src, alt, fallback, ...rest }: AvatarProps = $props();
</script>

<BitAvatar.Root {...rest} style="--size: {size}">
	<BitAvatar.Image {src} {alt} />
	<BitAvatar.Fallback>
		{#if fallback}
			{@render fallback()}
		{/if}
	</BitAvatar.Fallback>
</BitAvatar.Root>

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
