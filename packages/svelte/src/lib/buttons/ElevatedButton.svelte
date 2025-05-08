<script lang="ts">
	import './styles/elevated_button.scss';
	import TextBaseButton from './TextBaseButton.svelte';
	import type { TextBaseButtonProps } from './TextBaseButton.svelte';

	let props: TextBaseButtonProps = $props();
</script>

<TextBaseButton {...props} data-button-elevated />


