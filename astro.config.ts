import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import { createPinia } from 'pinia';
import tailwind from "@astrojs/tailwind";
const pinia = createPinia();


// https://astro.build/config
export default defineConfig({
  integrations: [vue({
    appEntrypoint: '/src/app'
  }), tailwind()]
});