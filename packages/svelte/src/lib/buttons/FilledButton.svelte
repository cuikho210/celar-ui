<script lang="ts">
	import './styles/filled_button.scss';
	import TextBaseButton from './TextBaseButton.svelte';
	import type { TextBaseButtonProps } from './TextBaseButton.svelte';

	let props: TextBaseButtonProps = $props();
</script>

<TextBaseButton {...props} data-button-filled />

