<script lang="ts">
	import './styles/base_button.scss';

	import { Button, type ButtonRootProps } from 'bits-ui';

	export type BaseButtonProps = ButtonRootProps & {
		loading?: boolean;
	};

	let { children, ...rest }: BaseButtonProps = $props();
</script>

<Button.Root {...rest}>
	{#if children}
		{@render children()}
	{/if}
</Button.Root>
