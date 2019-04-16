import Vue from 'vue'
import App from './App.vue'
import { setRem } from './utils/rem'
import linaUi from './index'

setRem(document, window)

console.log(linaUi)

Vue.use(linaUi)

new Vue({
  el: '#app',
  render: h => h(App)
})
