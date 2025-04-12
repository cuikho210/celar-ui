<script lang="ts">
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

<style lang="scss">
	:global([data-button-root]) {
		display: inline-block;
		position: relative;
		box-sizing: border-box;
		padding: 0;
		margin: 0;
		transition-duration: var(--transition-dur);
		transition-property: opacity;
		cursor: pointer;
		border: none;
		width: fit-content;
		height: fit-content;
		color: inherit;
		font-size: inherit;
		font-family: inherit;
		user-select: none;
		text-decoration: none;
		-webkit-tap-highlight-color: transparent;

		&:not(:disabled):active {
			top: 1px;
		}

		&:not([data-active='true']):disabled {
			opacity: 0.5;
		}

		&:disabled {
			cursor: default;
		}
	}
</style>
