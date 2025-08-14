export function applyPreferredColorScheme(scheme: 'light' | 'dark' | 'auto') {
	if (scheme === 'auto') {
		scheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	}

	document.documentElement.setAttribute('data-theme', scheme);
}
