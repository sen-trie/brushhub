import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { importAssets } from 'svelte-preprocess-import-assets';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter({
            fallback: '404.html'
        }),
        paths: {
            base: process.env.NODE_ENV === 'production' ? '/brushhub' : ''
        },
        prerender: {
            handleHttpError: 'ignore'
        }
    },
    relative: true,
    preprocess: [importAssets(), vitePreprocess()]
};

export default config;
