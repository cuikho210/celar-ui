<script lang="ts">
	import './styles/breadcrumb.css';
	import type { HTMLAttributes } from 'svelte/elements';

	let { children, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
</script>

<div {...rest} data-breadcrumb>
	{#if children}
		{@render children()}
	{/if}
</div>
