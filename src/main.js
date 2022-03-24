import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/global.css'
import './assets/fonts/iconfont.css'

import axios from 'axios'
Vue.prototype.$http=axios
// 配置请求的根路径
axios.defaults.baseURL = 'http://schoolsys.wzhyuming.top'
Vue.config.productionTip = false
Vue.use(ElementUI);
// axios.defaults.baseURL = ''

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
