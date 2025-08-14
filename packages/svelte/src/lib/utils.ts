export function applyPreferredColorScheme(scheme: 'light' | 'dark' | 'auto') {
	if (scheme === 'auto') {
		scheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	}

	const enableAnimation = disableAnimation();

	document.documentElement.setAttribute('data-theme', scheme);

	// color-scheme tells browser how to render built-in elements like forms, scrollbars, etc.
	// if color-scheme is null, this will remove the property
	document.documentElement.style.setProperty('color-scheme', scheme);

	enableAnimation();
}

// https://github.com/beynar/svelte-themes/blob/18427800b19a7f866f26770dc5bf2c42227e14e3/src/lib/helpers.ts#L14-L32
export function disableAnimation() {
	const css = document.createElement('style');
	css.appendChild(
		document.createTextNode(
			`*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}`
		)
	);
	document.head.appendChild(css);

	return () => {
		// Force restyle
		(() => window.getComputedStyle(document.body))();

		// Wait for next tick before removing
		setTimeout(() => {
			document.head.removeChild(css);
		}, 1);
	};
}
