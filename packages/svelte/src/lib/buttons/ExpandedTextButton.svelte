<script lang="ts">
	import './styles/expanded_text_button.scss';
	import TextBaseButton from './TextBaseButton.svelte';
	import type { TextBaseButtonProps } from './TextBaseButton.svelte';

	let { gap = 'var(--gap)', ...rest }: TextBaseButtonProps = $props();
</script>

<TextBaseButton {...rest} {gap} data-button-text-expanded />
