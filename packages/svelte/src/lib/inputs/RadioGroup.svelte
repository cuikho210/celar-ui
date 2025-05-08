<script lang="ts">
	import {
		RadioGroup as BitRadioGroup,
		type RadioGroupRootProps as BitRadioGroupRootProps,
		type WithoutChildrenOrChild
	} from 'bits-ui';
	import type { Snippet } from 'svelte';

	export type RadioGroupProps = WithoutChildrenOrChild<BitRadioGroupRootProps> & {
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
