// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);
import {
  post,
  fetch,
  patch,
  put,
  del
} from './server/http'

//定义全局变量
Vue.prototype.$post = post;
Vue.prototype.$fetch = fetch;
Vue.prototype.$patch = patch;
Vue.prototype.$put = put;
Vue.prototype.$del = del;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#vapp',
  router,
  components: { App },
  template: '<App/>'
});
