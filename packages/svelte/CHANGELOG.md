# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.2.0] - 2026-04-17

### Changed

- **PostCSS layers**: Migrated all component styles from `@layer components` to `@layer base` for Tailwind 4 compatibility
- **@reference directives**: Added `@reference 'tailwindcss'` to all component stylesheets

### Fixed

- **Demo styles**: Moved `@import 'tailwindcss'` from styles/index.css to demo's style.css

### ⚠️ Breaking Changes

- **Cascade precedence**: Components now have lower cascade precedence due to migration from `@layer components` to `@layer base`

---

## [2.1.0] - 2026-04-16

### Changed

- **Container**: Added `lg`, `xl`, `x2xl` breakpoint props for larger container sizes
- **Dialog components**: Added `lg`, `xl`, `x2xl` breakpoint props (CommandDialog, Dialog, MinimalDialog)
- **Input padding**: Unified padding from `--spacing(1.5)` to `--spacing(2)` (TextInput, ColorInput, FileInput)
- **Slider thumb**: Reduced thumb size from 8 to 6 units; simplified margin calculation

### Added

- **container-sizing utility**: Extracted container breakpoint styles to reusable utility in theme
- **elevated utility**: Extracted surface elevation styles to reusable utility for SurfaceContainer

### Fixed

- **Container**: Migrated breakpoint styles to `@apply container-sizing` utility
- **SurfaceContainer**: Migrated elevation styles to `@apply elevated` utility

---

## [2.0.2] - 2026-04-16

### Changed

- **Build script**: Removed `gen-theme` from build script (now runs separately)
- **Package exports**: Changed CSS style exports to explicit file mappings for better package resolution
- **@reference paths**: Updated all component styles to use absolute package reference (`@celar-ui/svelte/styles/index.css`)

### Added

- **CLI tool**: Added `gen-theme.ts` as a bin command for theme generation

---

## [2.0.1] - 2026-04-15

### Fixed

- **TextBaseButton**: Added `style` prop for custom inline styles
- **Container**: Fixed breakpoint variable names (`--breakpoint--sm` → `--breakpoint-sm`)
- **Checkbox**: Added focus-visible outline for accessibility
- **DuckSpinner**: Fixed CSS nesting issues and animation keyframes placement
- **LinearProgressIndicator**: Fixed keyframes placement
- **AdaptiveSidebar**: Changed `blur-md` to `backdrop-blur` for Tailwind 4 compatibility
- **AppBar**: Fixed gap variable syntax (`gap: var(--gap--half)` → `gap: --spacing(2)`)
- **CommandDialog**: Fixed transition syntax in postcss layer
- **Dialog**: Fixed box-sizing and breakpoint variable names
- **Navigation layout**: Reduced sidebar width from 32 to 24 units
- **ColorPalette**: Updated to use standard CSS variable naming (no prefix)
- **Demos**: Replaced remaining SCSS with Tailwind classes

### Changed

- **Build script**: Added `gen-theme` as pre-build step for theme generation
- **Demo styles**: Renamed `style.scss` to `style.css`
- **vite.config**: Removed unused autoprefixer plugin

### Dependencies Removed

- `sass` (replaced by Tailwind CSS 4)
- `autoprefixer` (not needed with Tailwind CSS 4)

---

## [2.0.0] - 2026-04-15

### 🚀 Major Features

#### Migration from SCSS to Tailwind CSS 4

- **Build system upgrade**: Migrated from SCSS to Tailwind CSS 4 with `@tailwindcss/vite` plugin
- **Theme generation refactored**: Replaced `scripts/gen-colors.ts` with `src/bin/gen-theme.ts` to generate CSS custom properties instead of SCSS maps
- **Centralized styling**: Added `src/styles/index.css` and `src/styles/theme.css` for theme management
- **SCSS removal**: Removed all remaining `.scss` files (colors.scss, config.scss, misc.scss, scheme.scss, spacing.scss, utils.scss)

### 🎨 Style

#### Component Styling Migration

All components have been migrated from SCSS to PostCSS/Tailwind:

- **Buttons**: ElevatedButton, ExpandedTextButton, FilledButton, IconButton, OutlinedButton, TextButton, TextBaseButton
- **Containment**: Avatar, Breadcrumb, Card, Container, Spacer, SurfaceContainer
- **Inputs**: Checkbox, ColorInput, FileInput, RadioGroup, RadioItem, Slider, Switch, TagInput, TextInput
- **Misc**: Badge, DotSpinner, DuckSpinner, Gap, LinearProgressIndicator
- **Navigation**: AdaptiveSidebar, AppBar, NavigationBar, NavigationBarButton, NavigationDrawer
- **Overlay**: CommandDialog, Dialog, MinimalDialog, MinimalSurfaceDialog, Popover

### ⚠️ Breaking Changes

- **Styling migration**: All `.scss` style files have been replaced with `.css` equivalents using Tailwind 4 features
- **Version bump**: Major version increased to 2.0.0 to reflect styling system migration

---

## [1.4.0] - 2025-09-23

### Added

- Introduced the TagInput component.

## [1.3.0] - 2025-09-23

### Added

- Added a Badge component (small/medium/large, color variants) and added it to the components gallery.

### Style

- Swapped light/dark color palettes to adjust theme appearance.
- Adjusted breadcrumb color token usage for consistent rendering.

### Chores

- Bumped package version and upgraded Svelte, Vite, TypeScript, Prettier, and related tooling.
- Migrated ESLint config format and added a Svelte navigation safety rule.

## [1.2.2] - 2025-08-29

### Added

- ✨ Introduce `elevated=5` and refine surface elevation scale
- Elevation-to-surface mapping:
  - 0 → `--color-surfaceContainerLowest`
  - 1 → `--color-surface`
  - 2 → `--color-surfaceContainerLow`
  - 3 → `--color-surfaceContainer`
  - 4 → `--color-surfaceContainerHigh`
  - 5 → `--color-surfaceContainerHighest`

### Changed

- `MinimalSurfaceDialog`: `open` now defaults to `false` (previously unspecified via `$bindable()`).
- `SurfaceContainer`: default `elevated` is now `1` (previously `0`).
- `MinimalSurfaceDialog`: default `elevated` is `1`.

## [1.2.1] - 2025-08-28

### Added

- `MinimalSurfaceDialog` component,
- `SurfaceContainer` component,

## [1.0.1] - 2025-08-23

### Changed

- Updated border color of OutlinedButton
- Lightened color-border and color-border--strong

## [1.0.0] - 2025-08-23

### 🚀 Major Features

#### Dynamic Material 3 Color Scheme Generation

- **New color generation system**: Introduced dynamic Material 3 color scheme generation using `material-dynamic-colors` library
- **Color generation script**: Added `gen-colors.ts` script for generating SCSS theme maps from Material Dynamic Colors
- **Automatic SCSS generation**: Colors can now be generated dynamically from a source color (default: `#ff907f`)

#### Complete Theming System Overhaul

- **Scheme-based theming**: Replaced legacy color maps (`$colors-theme`, `$colors-theme-dark`) with new scheme-based approach
- **New color tokens**: Updated all components to use Material 3 color tokens (e.g., `color-primary`, `color-onPrimary`, `color-primaryContainer`)
- **Extended color support**: Added support for semantic colors (info, success, warning) with light/dark variants
- **Dynamic theme switching**: Enhanced theme switching with proper Material 3 color semantics

#### Component Style Updates

All components have been updated with new Material 3 color tokens:

- **Buttons**: Updated all button variants (filled, elevated, outlined, text, icon) with new color scheme
- **Inputs**: Enhanced styling for TextInput, Checkbox, RadioItem, Switch, Slider, ColorInput, FileInput
- **Navigation**: Updated AppBar, NavigationDrawer, NavigationBarButton styling
- **Containment**: Refreshed Card, Avatar, Breadcrumb component colors
- **Overlays**: Updated Dialog and Command palette styling
- **Misc Components**: Enhanced DuckSpinner and LinearProgressIndicator

### 🔧 Technical Improvements

#### Build & Development

- **New build script**: Added `gen-colors` script for dynamic color generation
- **Updated dependencies**: Added `@types/bun` and `material-dynamic-colors` as dev dependencies

#### Code Quality

- **Consistent theming**: Standardized color token usage across all components
- **Improved transitions**: Enhanced animation timing and easing functions
- **Better accessibility**: Improved color contrast and semantic color usage

### ⚠️ Breaking Changes

#### Color Token Migration

- **Removed legacy tokens**: `$colors-theme` and `$colors-theme-dark` maps removed
- **New color system**: All color references updated to Material 3 tokens
- **Token naming**: Color tokens now follow Material 3 naming convention

#### Component API Changes

- **Version bump**: Major version increase to 1.0.0 indicates breaking changes
- **Styling dependencies**: Components now require new color scheme setup

### 🛠️ Migration Guide

For users upgrading from 0.3.x:

1. **Update color references**: Replace old color tokens with new Material 3 equivalents
2. **Review custom styles**: Update any custom CSS that references old color variables

### 📦 Dependencies

#### Added

- `@types/bun@^1.2.20` (devDependency)
- `material-dynamic-colors@^1.1.2` (devDependency)

---

This release represents a major evolution of Celar UI with a complete transition to Material 3 design principles and dynamic color generation capabilities.
