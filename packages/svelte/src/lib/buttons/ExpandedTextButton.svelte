<script lang="ts">
	import './styles/expanded_text_button.css';
	import TextBaseButton from './TextBaseButton.svelte';
	import type { TextBaseButtonProps } from './TextBaseButton.svelte';

	let { gap = 'calc(var(--spacing) * 4)', ...rest }: TextBaseButtonProps = $props();
</script>

<TextBaseButton {...rest} {gap} data-button-text-expanded />
