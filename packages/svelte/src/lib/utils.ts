/**
 * Apply the chosen color scheme by traversing stylesheet rules and adjusting prefers-color-scheme media queries.
 */
export function applyPreferredColorScheme(scheme: 'light' | 'dark' | 'auto') {
	for (const styleSheet of Array.from(document.styleSheets) as CSSStyleSheet[]) {
		// Some stylesheets may be subject to CORS
		let rules: CSSRuleList;
		try {
			rules = styleSheet.cssRules;
		} catch {
			continue;
		}

		for (const rule of Array.from(rules)) {
			if (rule instanceof CSSMediaRule && rule.media.mediaText.includes('prefers-color-scheme')) {
				switch (scheme) {
					case 'light':
						rule.media.appendMedium('original-prefers-color-scheme');
						if (rule.media.mediaText.includes('light'))
							rule.media.deleteMedium('(prefers-color-scheme: light)');
						if (rule.media.mediaText.includes('dark'))
							rule.media.deleteMedium('(prefers-color-scheme: dark)');
						break;

					case 'dark':
						rule.media.appendMedium('(prefers-color-scheme: light)');
						rule.media.appendMedium('(prefers-color-scheme: dark)');
						if (rule.media.mediaText.includes('original'))
							rule.media.deleteMedium('original-prefers-color-scheme');
						break;

					default: // auto
						rule.media.appendMedium('(prefers-color-scheme: dark)');
						if (rule.media.mediaText.includes('light'))
							rule.media.deleteMedium('(prefers-color-scheme: light)');
						if (rule.media.mediaText.includes('original'))
							rule.media.deleteMedium('original-prefers-color-scheme');
						break;
				}
			}
		}
	}
}
