import preprocess from 'svelte-preprocess';
import vercel from '@sveltejs/adapter-vercel';
import { imagetools } from 'vite-imagetools';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: vercel({
			// if true, will deploy the app using edge functions
			// (https://vercel.com/docs/concepts/functions/edge-functions)
			// rather than serverless functions
			edge: false,
	  
			// an array of dependencies that esbuild should treat
			// as external when bundling functions
			external: [],
	  
			// if true, will split your app into multiple functions
			// instead of creating a single one for the entire app
			split: false
		  })
	},
	vite: {
		define: {
		  'process.env.VITE_BUILD_TIME': JSON.stringify(new Date().toISOString()),
		},
		plugins: [imagetools({ force: true })],
	  }
};

export default config;
