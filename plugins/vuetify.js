import {createVuetify} from 'vuetify';
import {defineNuxtPlugin} from "nuxt/app";

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
    });

    nuxtApp.vueApp.use(vuetify);
})