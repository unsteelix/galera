import adapter from '@sveltejs/adapter-node';

import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			resolve: {
				alias: {
					$utils: path.resolve('./src/lib/utils'),
					$comp: path.resolve('./src/components/site'),
					$compAdmin: path.resolve('./src/components/admin'),
					$lib: path.resolve('./src/lib')
				}
			}
		}
	}
};

export default config;
