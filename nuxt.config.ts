// https://v3.nuxtjs.org/api/configuration/nuxt.config
import vuetify from 'vite-plugin-vuetify';

export default defineNuxtConfig({
  modules: [
    async (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig',
      (config) => {
        config.plugins.push(vuetify());
      });
    }
  ],
  css: ["vuetify/lib/styles/main.sass", "@mdi/font/css/materialdesignicons.min.css"],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
});
