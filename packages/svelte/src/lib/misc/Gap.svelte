<script lang="ts">
	interface Props {
		size?: string;
	}

	let { size }: Props = $props();
</script>

<div data-gap style:width={size}></div>

<style lang="scss">
	[data-gap] {
		display: block;
		aspect-ratio: 1;
		width: 1rem;
		height: auto;
	}
</style>
