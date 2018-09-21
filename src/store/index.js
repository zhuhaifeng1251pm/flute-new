import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);

import type from '../modules/type'
import login from '../modules/login'
import goodsType from '../modules/goodsType'
import goodslists from '../modules/goodslists'
import start from '../modules/start'
const store = new Vuex.Store({
    modules: {
        type: type,
        login: login,
        goodsType: goodsType,
        goodslists: goodslists,
        start:start
  }
});

export default store