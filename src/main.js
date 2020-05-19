/* animation tools */
import 'intersection-observer'
import scrollama from 'scrollama'
import Vue from 'vue'
import App from './App.vue'
/* animation tools */
import './customized-theme.sass'
import './registerServiceWorker'
import router from './router'
import store from './store'

window.scrollama = scrollama

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
