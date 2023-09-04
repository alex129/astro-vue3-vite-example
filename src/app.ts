// src/pages/_app.ts
import type { App } from 'vue';
import { createPinia } from 'pinia';

export default (app: App) => {
  console.log(app);
  const pinia = createPinia();
  app.use(pinia);
};
