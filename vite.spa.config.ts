import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
    plugins: [vue()],
    define: {
        'process.env': {},          // Vide, ou { NODE_ENV: '"production"' } si besoin
        'process': {},              // Ajoute aussi un process vide si nécessaire
    },
    build: {
        lib: {
            entry: path.resolve(__dirname, 'microfrontends/my-spa.ts'),
            name: 'MySpa',
            formats: ['es'],
            fileName: () => 'my-spa.js'
        },
        rollupOptions: {
            // Inclure Vue dans le bundle si pas déjà présent dans Joomla
            external: [],
            output: {
                globals: {
                    vue: 'Vue'
                }
            }
        },
        outDir: 'public/spa' // ou /dist si tu préfères
    },
    resolve: {
        alias: {
            '~': path.resolve(__dirname)
        }
    }
})
