<script lang="ts">
	import {
		Container,
		Breadcrumb,
		Gap,
		Spacer,
		OutlinedButton,
		NavigationBar,
		NavigationBarButton
	} from '$lib/index.js';
	import IconHome from '~icons/hugeicons/home-01';
	import IconComponents from '~icons/hugeicons/dashboard-square-03';
	import IconInfo from '~icons/hugeicons/information-diamond';
</script>

<div class="app-navigation">
	<NavigationBar>
		<NavigationBarButton href="/" active>
			{#snippet icon()}
				<IconHome font-size="20px" />
			{/snippet}
			Home
		</NavigationBarButton>

		<NavigationBarButton href="/components">
			{#snippet icon()}
				<IconComponents font-size="20px" />
			{/snippet}
			Components
		</NavigationBarButton>

		<NavigationBarButton href="/about">
			{#snippet icon()}
				<IconInfo font-size="20px" />
			{/snippet}
			About
		</NavigationBarButton>
	</NavigationBar>
</div>

<div class="app-body">
	<Container sm>
		<Breadcrumb>
			<a href="/">Home</a>
		</Breadcrumb>
		<Gap />

		<h2>Celar UI</h2>
		<Gap />

		<Spacer>
			<OutlinedButton href="/components">Components</OutlinedButton>
		</Spacer>
	</Container>
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
