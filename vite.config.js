// plugins
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';

// utilities
import { defineConfig, loadEnv } from 'vite';
import { fileURLToPath, URL } from 'node:url';

export default ({ mode }) => {
    const config = {
        plugins: [
            vue(),
            // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
            vuetify({
                autoImport: true,
            }),
        ],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url))
            },
            extensions: [
                '.js',
                '.json',
                '.jsx',
                '.mjs',
                '.ts',
                '.tsx',
                '.vue',
            ],
        },
        server: {
            port: 3000,
        },
    };

    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
    const SKIP_BASE_PATH = process.env.VITE_SKIP_BASE_BATH;
    if (SKIP_BASE_PATH === undefined || SKIP_BASE_PATH === 'false')
        config.base = '/portfolio/';

    return defineConfig(config);
}
