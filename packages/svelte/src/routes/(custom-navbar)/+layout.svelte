<script lang="ts">
	import { NavigationBar, NavigationBarButton } from '$lib/index.js';
	import IconHome from '~icons/hugeicons/home-01';
	import IconComponents from '~icons/hugeicons/dashboard-square-03';
	import IconInfo from '~icons/hugeicons/information-diamond';
	import { layout } from './state.svelte.js';

	let { children } = $props();

	const navbarItems = [
		{
			icon: IconHome,
			name: 'home',
			title: 'Home',
			path: '/'
		},
		{
			icon: IconComponents,
			name: 'components',
			title: 'Components',
			path: '/components'
		},
		{
			icon: IconInfo,
			name: 'about',
			title: 'About',
			path: '/about'
		}
	];
</script>

<div class="fixed bottom-0 left-0 z-50 block h-auto w-screen sm:h-full sm:w-auto">
	<NavigationBar class="h-18 sm:h-full sm:w-24">
		{#each navbarItems as item (item.name)}
			<NavigationBarButton href={item.path} active={layout.activedNavbar == item.name}>
				{#snippet icon()}
					<item.icon font-size="20px" />
				{/snippet}
				{item.title}
			</NavigationBarButton>
		{/each}
	</NavigationBar>
</div>

<div class="mb-18 sm:mb-0 sm:ml-24">
	{@render children()}
</div>
