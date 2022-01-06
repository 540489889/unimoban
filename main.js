import App from './App'
import Vue from 'vue'
Vue.config.productionTip = false
// import ApiUrl from '@/common/http/env.js'
import request from './utils/request.js'
Vue.prototype.$H = request;
// 挂载Vuex
import store from './store';  
Vue.prototype.$store = store;
// config配置文件
import config from './utils/config.js';  
Vue.prototype.$c = config;
// 公共方法
import fun from './utils/function.js';  
Vue.prototype.$f = fun;

App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// main.js
import uView from "uview-ui";
Vue.use(uView);
import { createSSRApp } from 'vue'

// http接口API抽离，免于写url或者一些固定的参数
import httpApi from './utils/api.js'
Vue.use(httpApi, app)
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
