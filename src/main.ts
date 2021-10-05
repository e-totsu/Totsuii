import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import * as PIXI from 'pixi.js'

Vue.config.productionTip = false

Vue.prototype.$pixi = PIXI

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
