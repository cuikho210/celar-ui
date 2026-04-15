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
	<Spacer align="center">
		<ElevatedButton onclick={toggleDrawer}>Open Drawer</ElevatedButton>
		<label>
			Position:
			<select
				bind:value={drawerPosition}
				class="rounded-rounded-2xl border-onBackground/20 bg-bg-surface text-onSurface border border-solid px-2 py-1"
			>
				<option value="left">Left</option>
				<option value="right">Right</option>
			</select>
		</label>
	</Spacer>

	<NavigationDrawer bind:open={openDrawer} position={drawerPosition} width="320px">
		{#snippet close()}
			<IconCancel font-size="20px" />
		{/snippet}

		{#snippet header()}
			<h4>Drawer Header</h4>
		{/snippet}

		{#snippet footer()}
			<div class="p-2">
				<p>Drawer Footer</p>
			</div>
		{/snippet}

		<div class="p-2">
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
