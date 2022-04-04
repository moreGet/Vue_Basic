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

/**
 * custom import
 */
import mixins from './mixins'
import i18nPlugin from './plugins/i18n'

const i18nStrings = {
  en: {
    hi: 'Hello',
    save: 'Save'
  },
  ko: {
    hi: '안녕하세요!',
    save: '저장'
  }
}

const vueApp = createApp(App)
vueApp.use(store)
vueApp.use(router)
vueApp.use(VueSweetAlert2)
vueApp.use(i18nPlugin, i18nStrings)
vueApp.directive('focus', {
  mounted (el) {
    el.focus()
  }
})

// 커스텀 임포트 (글로벌 등록)
// 글로벌 등록시 매 vue컴포넌트 마다 로딩 하기 때문에 무분별하게 사용하면 안된다.
vueApp.mixin(mixins)

vueApp.mount('#app')
