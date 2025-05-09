<script lang="ts">
	import './styles/base_button.scss';

	import { Button, type ButtonRootProps } from 'bits-ui';

	export type BaseButtonProps = ButtonRootProps & {
		loading?: boolean;
		active?: boolean;
	};

	let { children, active = false, ...rest }: BaseButtonProps = $props();
</script>

<Button.Root {...rest} data-active={active}>
	{#if children}
		{@render children()}
	{/if}
</Button.Root>
