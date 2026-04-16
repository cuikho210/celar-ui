# Celar UI for Svelte

A component library for Svelte, powered by Bits-ui and Tailwind CSS 4.

## Quick Start

### 1. Install

```bash
bun add @celar-ui/svelte
```

### 2. Configure CSS

In your root CSS file:

```css
@import '@celar-ui/svelte/styles/index.css';
@source 'path/to/node_modules/@celar-ui/svelte/dist';
```

### 3. Use Components

```svelte
<script>
	import { FilledButton, TextInput } from '@celar-ui/svelte';
</script>

<FilledButton>Click me</FilledButton>
<TextInput placeholder="Enter text" />
```

## Custom Theme

Generate a custom theme with your brand color:

```bash
npx @celar-ui/svelte -c #aabbcc -o ./theme.css
```

Then update your root CSS:

```css
@import '@celar-ui/svelte/styles/index.css';
@import 'path/to/theme.css';
@source 'path/to/node_modules/@celar-ui/svelte/dist';
```

## Available Components

- **Buttons**: FilledButton, ElevatedButton, OutlinedButton, TextButton, IconButton, ExpandedTextButton
- **Inputs**: TextInput, Checkbox, RadioGroup, Switch, Slider, ColorInput, FileInput, TagInput
- **Containment**: Container, Card, Avatar, Breadcrumb, Spacer, Gap, SurfaceContainer
- **Navigation**: AppBar, NavigationBar, NavigationBarButton, AdaptiveSidebar, NavigationDrawer
- **Overlay**: Dialog, CommandDialog, MinimalDialog, MinimalSurfaceDialog, Popover
- **Misc**: Badge, DotSpinner, DuckSpinner, LinearProgressIndicator

## License

MIT
