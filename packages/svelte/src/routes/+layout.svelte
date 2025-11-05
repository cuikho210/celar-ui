<script lang="ts">
	import '$style/spacing.scss';
	import '$style/colors.scss';
	import '$style/misc.scss';
	import './style.scss';

	let { children } = $props();
</script>

{@render children()}
