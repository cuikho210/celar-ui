<script lang="ts">
	import {
		RadioGroup as BitRadioGroup,
		type RadioGroupRootProps,
		type WithoutChildren
	} from 'bits-ui';
	import type { Snippet } from 'svelte';

	export type RadioGroupProps = WithoutChildren<RadioGroupRootProps> & {
		children?: Snippet;
	};
	let { value = $bindable(''), children, ...rest }: RadioGroupProps = $props();
</script>

<BitRadioGroup.Root {...rest} bind:value>
	{@render children?.()}
</BitRadioGroup.Root>

<style lang="scss">
	:global([data-radio-group-root]) {
		position: relative;
	}
</style>
