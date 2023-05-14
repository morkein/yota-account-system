// https://nuxt.com/docs/api/configuration/nuxt-config

import vuetify from "vite-plugin-vuetify";

export default defineNuxtConfig({
    css: ['vuetify/styles', '@mdi/font/css/materialdesignicons.min.css'],
    build: {
        transpile: ['vuetify', '@vuepic/vue-datepicker']
    },
    vite: {
        ssr: {
            noExternal: ['vuetify'],
        }
    },
    modules: [
        async (options, nuxt) => {
          nuxt.hooks.hook('vite:extendConfig', config => config.plugins.push(vuetify()))
        },
        '@pinia/nuxt'
    ]
})
