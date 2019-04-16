import Vue from 'vue'
import App from './App.vue'
import { setRem } from './utils/rem'
import qmUi from './index'

setRem(document, window)

console.log(qmUi)

Vue.use(qmUi)

new Vue({
  el: '#app',
  render: h => h(App)
})
