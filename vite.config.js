import { defineConfig, loadEnv } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';
import { VuetifyResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';

export default ({ mode }) => {
  const config = {
    plugins: [
      // https://stackoverflow.com/questions/71243239/add-vuetify-2-to-vite-project
      createVuePlugin(/* options */),
      Components({
        resolvers: [
          // Vuetify
          VuetifyResolver(),
        ],
      }),
    ]
  };

  process.env = {...process.env, ...loadEnv(mode, process.cwd())};
  const SKIP_BASE_PATH = process.env.VITE_SKIP_BASE_BATH;
  if(SKIP_BASE_PATH === undefined || SKIP_BASE_PATH === 'false')
    config.base = '/portfolio/';

  return defineConfig(config);
}
