import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import MySpaApp from '~/app/MySpaApp.vue'

import Home from '~/pages/index.vue'
import Contact from '~/pages/contact.vue'

const router = createRouter({
    history: createWebHistory('/nuxt-spa/'), // Le base path peut être vide si nécessaire
    routes: [
        { path: '/', component: Home },
        { path: '/contact', component: Contact }
    ]
})

const mount = () => {
    const el = document.getElementById('nuxt-spa')
    if (el) {
        const app = createApp(MySpaApp)
        app.use(router)
        app.mount(el)
    }
}

if (document.readyState !== 'loading') {
    mount()
} else {
    document.addEventListener('DOMContentLoaded', mount)
}
