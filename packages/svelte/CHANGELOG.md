# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
