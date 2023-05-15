// https://nuxt.com/docs/api/configuration/nuxt-config

import vuetify from "vite-plugin-vuetify";

export default defineNuxtConfig({
    // server cfg
    runtimeConfig: {
        MONGO_URI: process.env.MONGO_URI,
    },
    css: ['vuetify/styles', '@mdi/font/css/materialdesignicons.min.css'],
    vite: {
        ssr: {
            noExternal: ['vuetify'],
        }
    },
    //nitro plugin to init db/index.ts
    nitro: {
        plugins: ["@/server/db/index.ts"],
    },
    build: {
        transpile: ['vuetify', '@vuepic/vue-datepicker']
    },
    modules: [
        async (options, nuxt) => {
          nuxt.hooks.hook('vite:extendConfig', config => config.plugins.push(vuetify()))
        },
        '@pinia/nuxt'
    ],
})
