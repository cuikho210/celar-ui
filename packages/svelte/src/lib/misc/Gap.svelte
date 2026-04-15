<script lang="ts">
	interface Props {
		size?: string;
	}

	let { size }: Props = $props();
</script>

<div data-gap style:width={size}></div>

<style lang="postcss">
	@reference '@celar-ui/svelte/styles/index.css';

	@layer components {
		[data-gap] {
			display: block;
			aspect-ratio: 1;
			width: 1rem;
			height: auto;
		}
	}
</style>
