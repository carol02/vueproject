import Vue from 'vue'
import fastClick from 'fastclick'
import App from './App'
import router from './router'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
