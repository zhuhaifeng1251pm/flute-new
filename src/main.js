import Vue from "vue";
import App from "./App.vue";
import "./rem/rem";
import "./assets/global.scss";
import router from "./router";
import store from "./store/";
import { Button ,Spin,Icon } from "iview";
import 'iview/dist/styles/iview.css';
import moment from 'moment'//导入文件
import '../node_modules/moment/locale/zh-cn'
Vue.prototype.$moment = moment;//赋值使用
Vue.component("Button", Button);
Vue.component("Spin", Spin);
Vue.component("Icon",Icon)


Vue.config.productionTip = false;
new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");
