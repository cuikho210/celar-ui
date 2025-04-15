<script lang="ts">
	import { RadioGroup, type RadioGroupRootProps, type WithoutChildren } from 'bits-ui';
	import type { Snippet } from 'svelte';

	export type RadioGroupProps = WithoutChildren<RadioGroupRootProps> & {
		children?: Snippet;
	};
	let { value = $bindable(''), children, ...rest }: RadioGroupProps = $props();
</script>

<RadioGroup.Root {...rest} bind:value>
	{@render children?.()}
</RadioGroup.Root>

<style lang="scss">
	:global([data-radio-group-root]) {
		position: relative;
	}
</style>
