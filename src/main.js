import Vue from 'vue'
import App from './App.vue'
import { setRem } from './utils/rem'
import { createRouter } from './router'
import linaUi from './index'

setRem(document, window)

/* router & 历史栈 */
let router = createRouter()

console.log(linaUi)

Vue.use(linaUi)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
