<script lang="ts">
	import './styles/radio_group.scss';
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

