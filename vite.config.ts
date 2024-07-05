import { purgeCss } from 'vite-plugin-tailwind-purgecss';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit'

export default defineConfig({
	plugins: [sveltekit(),
	purgeCss(),
	SvelteKitPWA({
		manifest: {
			name: 'متتبع المهام',
			short_name: 'متتبع المهام',

		}
	})
	]
});