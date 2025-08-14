<script lang="ts">
	import {
		Container,
		Breadcrumb,
		Gap,
		Spacer,
		NavigationBar,
		NavigationBarButton,
		applyPreferredColorScheme
	} from '$lib/index.js';
	import IconHome from '~icons/hugeicons/home-01';
	import IconComponents from '~icons/hugeicons/dashboard-square-03';
	import IconInfo from '~icons/hugeicons/information-diamond';
	import ElevatedButton from '$lib/buttons/ElevatedButton.svelte';
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
			<ElevatedButton onclick={() => applyPreferredColorScheme('auto')}>Auto</ElevatedButton>
			<ElevatedButton onclick={() => applyPreferredColorScheme('light')}>Light</ElevatedButton>
			<ElevatedButton onclick={() => applyPreferredColorScheme('dark')}>Dark</ElevatedButton>
		</Spacer>

		<!-- Color Palette Section -->
		<Gap />
		<h3>Color Palette</h3>
		<div class="color-palette">
			{#each [{ name: 'Primary Text', var: '--color-primary--text' }, { name: 'Primary Darker', var: '--color-primary--darker' }, { name: 'Primary Dark', var: '--color-primary--dark' }, { name: 'Primary', var: '--color-primary' }, { name: 'Primary Light', var: '--color-primary--light' }, { name: 'Primary Lighter', var: '--color-primary--lighter' }, { name: 'Alt Text', var: '--color-alt--text' }, { name: 'Alt Darker', var: '--color-alt--darker' }, { name: 'Alt Dark', var: '--color-alt--dark' }, { name: 'Alt', var: '--color-alt' }, { name: 'Alt Light', var: '--color-alt--light' }, { name: 'Alt Lighter', var: '--color-alt--lighter' }, { name: 'Text', var: '--color-text' }, { name: 'Text Info', var: '--color-text-info' }, { name: 'Text Success', var: '--color-text-success' }, { name: 'Text Warning', var: '--color-text-warning' }, { name: 'Text Danger', var: '--color-text-danger' }, { name: 'Background', var: '--color-bg' }, { name: 'Background Info', var: '--color-bg-info' }, { name: 'Background Success', var: '--color-bg-success' }, { name: 'Background Warning', var: '--color-bg-warning' }, { name: 'Background Danger', var: '--color-bg-danger' }] as color (color)}
				<div class="color-swatch">
					<div class="swatch" style="background: var({color.var});" title={color.var}></div>
					<div class="color-label">{color.name}</div>
					<div class="color-var">{color.var}</div>
				</div>
			{/each}
		</div>
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
	.color-palette {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
		gap: 1rem;
		margin-top: 1rem;
	}

	.color-swatch {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 0.5rem;
		border-radius: 8px;
		background: var(--color-bg-info);
		box-shadow: 0 1px 4px var(--color-shadow--soft);
	}

	.swatch {
		width: 48px;
		height: 48px;
		border-radius: 6px;
		border: 1px solid var(--color-border);
		margin-bottom: 0.5rem;
	}

	.color-label {
		font-size: 0.95em;
		font-weight: 500;
		margin-bottom: 0.25rem;
		color: var(--color-text);
		text-align: center;
	}

	.color-var {
		font-size: 0.8em;
		color: var(--color-text-info);
		text-align: center;
		word-break: break-all;
	}
</style>
