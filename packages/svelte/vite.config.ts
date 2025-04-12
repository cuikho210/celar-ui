import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer';

export default defineConfig({
	plugins: [sveltekit()],
	css: {
		postcss: {
			plugins: [autoprefixer({})]
		}
	},
	server: {
		allowedHosts: true
	}
});
