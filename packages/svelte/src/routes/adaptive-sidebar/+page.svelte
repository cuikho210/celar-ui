<script lang="ts">
	import { Card, Gap, Spacer, ElevatedButton, AdaptiveSidebar } from '$lib/index.js';
	import IconHome from '~icons/hugeicons/home-03';
	import IconUser from '~icons/hugeicons/user';
	import IconSettings from '~icons/hugeicons/settings-03';
	import IconSearch from '~icons/hugeicons/search-01';
	import IconFavorite from '~icons/hugeicons/favourite';
	import IconMenu from '~icons/hugeicons/menu-01';
	import Container from '$lib/containment/Container.svelte';
	import ExpandedTextButton from '$lib/buttons/ExpandedTextButton.svelte';

	let openSidebar = $state(false);

	function toggleSidebar() {
		openSidebar = !openSidebar;
	}

	const collapsedSize = '82px';
	const expandedSize = '300px';
</script>

<main style:--sidebar-width={openSidebar ? expandedSize : collapsedSize}>
	<section class="sidebar">
		<AdaptiveSidebar bind:open={openSidebar} {collapsedSize} {expandedSize}>
			<ExpandedTextButton onclick={toggleSidebar}>
				{#snippet icon()}
					<IconMenu />
				{/snippet}
				Toggle
			</ExpandedTextButton>
			<Gap />

			<ExpandedTextButton href="#" active={true}>
				{#snippet icon()}
					<IconHome />
				{/snippet}
				Home
			</ExpandedTextButton>
			<ExpandedTextButton href="#">
				{#snippet icon()}
					<IconUser />
				{/snippet}
				Profile
			</ExpandedTextButton>
			<ExpandedTextButton href="#">
				{#snippet icon()}
					<IconSettings />
				{/snippet}
				Settings
			</ExpandedTextButton>
			<ExpandedTextButton href="#">
				{#snippet icon()}
					<IconSearch />
				{/snippet}
				Search
			</ExpandedTextButton>
			<ExpandedTextButton href="#">
				{#snippet icon()}
					<IconFavorite />
				{/snippet}
				Favorites
			</ExpandedTextButton>
		</AdaptiveSidebar>
	</section>

	<section class="body">
		<Container>
			<Card>
				<h3>Adaptive Sidebar</h3>
				<p>
					This sidebar adapts to screen size: drawer on small screens, rail on medium screens, and
					expanded on large screens.
				</p>
				<Gap />
				<Spacer align="center">
					<ElevatedButton onclick={toggleSidebar}>Toggle Sidebar</ElevatedButton>
				</Spacer>
			</Card>
		</Container>
	</section>
</main>

<style lang="scss">
	@use 'sass:map';
	@use '../../styles/spacing.scss';

	main {
		.sidebar {
			position: fixed;
			left: 0;
			top: 0;
			z-index: 100;
		}

		.body {
			margin-left: 0;
			transition-property: margin-left;
			transition-timing-function: ease-in-out;
			transition-duration: var(--transition-dur);
		}

		@media screen and (min-width: calc(map.get(spacing.$breaking, break--xs) + 1px)) {
			.body {
				margin-left: var(--sidebar-width);
			}
		}
	}
</style>
