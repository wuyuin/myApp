import Vue from 'vue'
import App from './App.vue'
import router from "./router"

/* import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import {Message} from "element-ui" */
import "@/element.js"
import '@/assets/css/global.css'
import axios from "axios"
Vue.prototype.$axios=axios
// 配置请求的根路径
axios.defaults.baseURL=' https://lianghj.top:8888/api/private/v1/'
Vue.config.productionTip = false
// Vue.prototype.$message=Message
// Vue.use(ElementUI);
Vue.use(router)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
