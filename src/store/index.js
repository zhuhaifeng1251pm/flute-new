import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);

import type from "../modules/type";
import login from "../modules/login";
import goodsType from "../modules/goodsType";
import goodslists from "../modules/goodslists";
import start from "../modules/start";
import address from "../modules/address";
import id from "../modules/id";
import personal from '../modules/personal'
import myorder from '../modules/myorder'

const store = new Vuex.Store({
    modules: {
        type: type,
        login: login,
        goodsType: goodsType,
        goodslists: goodslists,
        start: start,
        address: address,
        id: id,
        personal: personal,
        myorder:myorder
    }
});

export default store;
