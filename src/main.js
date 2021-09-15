import Vue from 'vue'
import App from './App.vue'
// Realizamos la importacion de las rutas del vue-router
import router from '@/router'

Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
