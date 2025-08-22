<script lang="ts">
	import '$style/spacing.scss';
	import '$style/colors.scss';
	import '$style/misc.scss';
	import './style.scss';

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

<div class="app-navigation">
	<NavigationBar>
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

<div class="app-body">
	{@render children()}
</div>

<style lang="scss">
	@use 'sass:map';
	@use '../styles/spacing.scss';

	$navbar-mobile-height: 72px;
	$navbar-desktop-width: 88px;

	.app-navigation {
		display: block;
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 50;
		width: 100%;
		height: auto;
	}

	:global(.app-navigation > [data-navigation-bar]) {
		height: $navbar-mobile-height;
	}

	.app-body {
		margin-bottom: $navbar-mobile-height;
	}

	@media screen and (min-width: map.get(spacing.$breaking, break--xs)) {
		.app-navigation {
			width: auto;
			height: 100%;
		}

		:global(.app-navigation > [data-navigation-bar]) {
			width: $navbar-desktop-width;
			height: 100%;
		}

		.app-body {
			margin-bottom: 0;
			margin-left: $navbar-desktop-width;
		}
	}
</style>
