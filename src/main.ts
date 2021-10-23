import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import * as PIXI from 'pixi.js'
import i18n from '@/libs/i18n'

Vue.config.productionTip = false

Vue.prototype.$pixi = PIXI

new Vue({
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')
