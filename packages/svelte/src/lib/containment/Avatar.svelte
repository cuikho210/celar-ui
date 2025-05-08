<script lang="ts">
	import './styles/avatar.scss';
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


