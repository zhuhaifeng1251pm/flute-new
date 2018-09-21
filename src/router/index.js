import VueRouter from "vue-router"; //导入vue-router包
import Home from "../components/Home"; //导入相应的组件
import Login from "../components/Login"; //导入相应的组件
import AgentInfo from "../components/AgentInfo"; //导入相应的组件
import NewsInfo from "../components/NewsInfo"; //导入相应的组件
import Attract from "../components/Attract"; //导入相应的组件
import MyOrder from "../components/MyOrder"; //导入相应的组件
import FluteInfo from "../components/FluteInfo"; //导入相应的组件
import Personal from "../components/Personal";
import Register from "../components/Register";
import PhoneLogin from "../components/PhoneLogin";
import Tracking from "../components/Tracking";
import TrackInfo from "../components/TrackInfo";
import TrackDone from "../components/TrackDone";
import ShoppingCart from "../components/ShoppingCart";
import CartLists from "../components/CartLists";
import ConfirmOrder from "../components/ConfirmOrder";
import Invoices from '../components/Invoices'
import EditAddress from '../components/EditAddress'
import Vue from "vue"; //导入vue
Vue.use(VueRouter);
const routes = [
  { path: "/", component: Login },
  { path: "/home", component: Home },
  { path: "/agentinfo", component: AgentInfo },
  { path: "/fluteinfo", component: FluteInfo },
  { path: "/attract", component: Attract },
  { path: "/newsinfo", component: NewsInfo },
  { path: "/myorder", component: MyOrder },
  { path: "/personal", component: Personal },
  { path: "/register", component: Register },
  { path: "/phonelogin", component: PhoneLogin },
  { path: "/invoices", component: Invoices },
  {path:'/editaddress',component:EditAddress},
  {
    path: "/shoppingcart",
    component: ShoppingCart,
    children: [
      { path: "cartlists", component: CartLists },
      { path: "confirmorder", component: ConfirmOrder }
    ]
  },
  {
    path: "/tracking",
    component: Tracking,
    children: [
      { path: "trackinfo", component: TrackInfo },
      { path: "trackdone", component: TrackDone }
    ]
  }
];
const router = new VueRouter({
  mode: "history", //去掉模拟的/#/
  routes
});
export default router;
