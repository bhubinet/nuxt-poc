// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    compatibilityDate: '2025-05-15',
    devtools: {enabled: true},
    modules: [
        '@nuxt/eslint'
    ],
    app: {
        baseURL: '/nuxt-spa/', // Si hébergé sous ce chemin
    },
    vite: {
        plugins: [tailwindcss()],
        build: {
            lib: {
                entry: 'microfrontends/my-spa.ts',
                name: 'MySpa',
                formats: ['es'],
                fileName: () => 'my-spa.js'
            }
        }
    },
    css: ['~/assets/css/main.css'],
    ssr: false
})