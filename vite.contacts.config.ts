import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
    plugins: [vue()],
    define: {
        'process.env': {},
        'process': {},
    },
    build: {
        lib: {
            entry: path.resolve(__dirname, 'microfrontends/contacts.ts'),
            name: 'App',
            formats: ['es'],
            fileName: () => 'contacts.js'
        },
        rollupOptions: {
            external: [],
            output: {
                globals: {
                    vue: 'Vue'
                }
            }
        },
        outDir: 'public/contacts'
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '.'),
            '~': path.resolve(__dirname)
        }
    }
})
