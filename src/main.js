import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

/* animation tools */
import 'intersection-observer'
import scrollama from 'scrollama'
window.scrollama = scrollama
/* animation tools */

import './customized-theme.sass'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
