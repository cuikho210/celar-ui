<script lang="ts">
	// List of color keys from scheme.scss and colors.scss
	const schemeColors = [
		'color-primary',
		'color-onPrimary',
		'color-primaryContainer',
		'color-onPrimaryContainer',
		'color-secondary',
		'color-onSecondary',
		'color-secondaryContainer',
		'color-onSecondaryContainer',
		'color-tertiary',
		'color-onTertiary',
		'color-tertiaryContainer',
		'color-onTertiaryContainer',
		'color-error',
		'color-onError',
		'color-errorContainer',
		'color-onErrorContainer',
		'color-background',
		'color-onBackground',
		'color-surface',
		'color-onSurface',
		'color-surfaceVariant',
		'color-onSurfaceVariant',
		'color-outline',
		'color-outlineVariant',
		'color-shadow',
		'color-scrim',
		'color-inverseSurface',
		'color-inverseOnSurface',
		'color-inversePrimary',
		'color-surfaceDim',
		'color-surfaceBright',
		'color-surfaceContainerLowest',
		'color-surfaceContainerLow',
		'color-surfaceContainer',
		'color-surfaceContainerHigh',
		'color-surfaceContainerHighest'
	];

	const extColors = [
		'color-info',
		'color-onInfo',
		'color-success',
		'color-onSuccess',
		'color-warning',
		'color-onWarning'
	];

	const miscColors = [
		'color-shadow--soft',
		'color-shadow--md',
		'color-shadow--strong',
		'color-border',
		'color-border--strong',
		'color-wrapper'
	];

	const allColors = [
		{ group: 'Scheme Colors', keys: schemeColors },
		{ group: 'Extended Colors', keys: extColors },
		{ group: 'Misc Colors', keys: miscColors }
	];

	// Prefix from config.scss (default is empty string, change if needed)
	const prefix = ''; // If you use a prefix, set it here (e.g., "myapp-")
</script>

{#each allColors as { group, keys }, index (index)}
	<div class="palette-group">
		<div class="palette-title">{group}</div>
		<div class="palette-grid">
			{#each keys as key (key)}
				<div class="palette-item">
					<div class="palette-swatch" style="background: var(--{prefix}{key});" title={key}></div>
					<div>
						<div class="palette-label">{prefix}{key}</div>
						<div class="palette-value">
							<code>var(--{prefix}{key})</code>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
{/each}

<style>
	.palette-group {
		margin-bottom: 2rem;
	}
	.palette-title {
		font-weight: bold;
		margin-bottom: 0.5rem;
	}
	.palette-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
		gap: 1rem;
	}
	.palette-item {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 0.5rem;
		border-radius: 6px;
		background: var(--color-surfaceContainer, #f8ebe9);
		box-shadow: 0 1px 4px var(--color-shadow--soft, rgba(0, 0, 0, 0.08));
	}
	.palette-swatch {
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 4px;
		border: 1px solid var(--color-border, #ccc);
		box-sizing: border-box;
		flex-shrink: 0;
	}
	.palette-label {
		font-size: 0.95em;
		word-break: break-all;
	}
	.palette-value {
		font-size: 0.85em;
		color: #666;
	}
	:root[data-theme='dark'] .palette-item {
		background: var(--color-surfaceContainer, #251e1d);
	}
</style>
