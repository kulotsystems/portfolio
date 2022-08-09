import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';
import { VuetifyResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // https://stackoverflow.com/questions/71243239/add-vuetify-2-to-vite-project
    createVuePlugin(/* options */),
    Components({
      resolvers: [
        // Vuetify
        VuetifyResolver(),
      ],
    }),
  ],
  base: '/portfolio/'
})
