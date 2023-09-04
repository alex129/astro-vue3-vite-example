/// <reference types="vitest" />
import { getViteConfig } from 'astro/config';

export default getViteConfig({
  test: {
    /* for example, use global to avoid globals imports (describe, test, expect): */
    // globals: true,
  },
  resolve: {
    alias: {
      '@': '/src/pages',
      '@components': '/src/components',
      '@assets': '/src/shared/assets',
      '@stores': '/src/shared/stores',
    },
  },
});
