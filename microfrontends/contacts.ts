import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from '~/app/App.vue'

import Contact from '~/pages/contacts/index.vue'
import ContactAdd from '~/pages/contacts/add.vue'

const router = createRouter({
    history: createWebHistory('/contacts/'),
    routes: [
        { path: '/', component: Contact },
        { path: '/add', component: ContactAdd }
    ]
})

const mount = () => {
    const el = document.getElementById('contacts')
    if (el) {
        const app = createApp(App)
        app.use(router)
        app.mount(el)
    }
}

if (document.readyState !== 'loading') {
    mount()
} else {
    document.addEventListener('DOMContentLoaded', mount)
}
