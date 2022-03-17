import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// External Import

/**
 * ## SweetAlert2
 * ## https://sweetalert2.github.io/#download
 * ## lib, css
 */
import VueSweetAlert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.all'

const vueApp = createApp(App)
vueApp.use(store)
vueApp.use(router)
vueApp.use(VueSweetAlert2)
vueApp.mount('#app')
