import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
	server: {
		proxy: {
			'/api': {
				target: 'http://localhost:8000',
				changeOrigin: true,
			},
			'/ws': {
				target: 'http://localhost:8000',
				changeOrigin: true,
				ws: true,
			},
			'/ollama': {
				target: 'http://localhost:8000',
				changeOrigin: true,
			},
			'/openai': {
				target: 'http://localhost:8000',
				changeOrigin: true,
			},
			'/static': {
				target: 'http://localhost:8000',
				changeOrigin: true,
			},
		},
	},
	plugins: [
		sveltekit(),
		viteStaticCopy({
			targets: [
				{
					src: 'node_modules/onnxruntime-web/dist/*.jsep.*',

					dest: 'wasm'
				}
			]
		})
	],
	define: {
		APP_VERSION: JSON.stringify(process.env.npm_package_version),
		APP_BUILD_HASH: JSON.stringify(process.env.APP_BUILD_HASH || 'dev-build'),
		'PUBLIC_API_URL': JSON.stringify('')
	},
	build: {
		sourcemap: false,
		minify: false
	},
	worker: {
		format: 'es'
	},
	esbuild: {
		pure: process.env.ENV === 'dev' ? [] : ['console.log', 'console.debug', 'console.error']
	}
});
