<script lang="ts">
	import { Card, Gap, Spacer, ElevatedButton, NavigationDrawer } from '$lib/index.js';
	import IconCancel from '~icons/hugeicons/cancel-01';

	let openDrawer = $state(false);
	let drawerPosition: 'left' | 'right' = $state('left');

	function toggleDrawer() {
		openDrawer = !openDrawer;
	}
</script>

<Card>
	<h3>Navigation Drawer</h3>
	<Gap />
	<Spacer align="start">
		<div style="display: flex; gap: var(--gap-half); align-items: center;">
			<ElevatedButton onclick={toggleDrawer}>Open Drawer</ElevatedButton>
			<label>
				Position:
				<select bind:value={drawerPosition}>
					<option value="left">Left</option>
					<option value="right">Right</option>
				</select>
			</label>
		</div>
	</Spacer>

	<NavigationDrawer bind:open={openDrawer} position={drawerPosition} width="320px">
		{#snippet close()}
			<IconCancel font-size="20px" />
		{/snippet}

		{#snippet header()}
			<h4>Drawer Header</h4>
		{/snippet}

		{#snippet footer()}
			<div style="padding: var(--gap-half);">
				<p>Drawer Footer</p>
			</div>
		{/snippet}

		<div style="padding: var(--gap-half);">
			<p>This is the main content of the navigation drawer.</p>
			<p>You can place any content here.</p>
			<ul>
				<li>Item 1</li>
				<li>Item 2</li>
				<li>Item 3</li>
			</ul>
			<p>Scrollable content area.</p>
			<p>Scrollable content area.</p>
			<p>Scrollable content area.</p>
			<p>Scrollable content area.</p>
			<p>Scrollable content area.</p>
			<p>Scrollable content area.</p>
			<p>Scrollable content area.</p>
			<p>Scrollable content area.</p>
			<p>Scrollable content area.</p>
			<p>Scrollable content area.</p>
			<p>Scrollable content area.</p>
			<p>Scrollable content area.</p>
			<p>Scrollable content area.</p>
			<p>Scrollable content area.</p>
			<p>Scrollable content area.</p>
			<p>Scrollable content area.</p>
			<p>Scrollable content area.</p>
			<p>Scrollable content area.</p>
			<p>Scrollable content area.</p>
			<p>Scrollable content area.</p>
			<p>Scrollable content area.</p>
			<p>Scrollable content area.</p>
			<p>Scrollable content area.</p>
		</div>
	</NavigationDrawer>
</Card>

<style lang="scss">
	select {
		padding: var(--gap-xs) var(--gap-half);
		border-radius: var(--radius);
		border: 1px solid var(--color-border);
		background-color: var(--color-bg);
		font-size: 1rem;
		color: var(--color-onSurface);
	}
</style>
