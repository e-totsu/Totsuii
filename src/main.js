import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import * as PIXI from 'pixi.js'
import i18n from '@/libs/i18n'
import VueRouter from 'vue-router'
import router from './router'

Vue.config.productionTip = false

Vue.prototype.$pixi = PIXI

Vue.use(VueRouter)

new Vue({
  router,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')

// router.isReady().then((){
//   app.mount('#app')
// })
