import Vue from 'vue'
import App from './App.vue'

import router from './router'
import request from './utils/request'
import store from './store'

// Element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import lodash from 'lodash'

Vue.config.productionTip = false

//Vue.prototype.$axios= axios
Vue.prototype.$lodash= lodash
Vue.prototype.request= request

// Element
Vue.use(ElementUI)


new Vue({
  router, // 注入路由：router/index.js
  store,
  render: h => h(App),
}).$mount('#app')
