import { URL } from "../assets/URL";
import axios from "axios";
const state = {
  goodslists: [
    {
    "img": "http://pf9cvp4yn.bkt.clouddn.com/goods-pic_03.png",
    "name": "美国lungflute 正品 “肺笛®” 正式进入中国",
    "count": 1,
    "price": "2888",
    "create_time": "2018-09-20T08:57:08.346Z",
    "type": "completed",
    "id": 1
  },
  {
    "img": "http://pf9cvp4yn.bkt.clouddn.com/goods-pic_03.png",
    "name": "美国lungflute 正品 “肺笛®” 正式进入中国",
    "count": 1,
    "price": "2888",
    "create_time": "2018-09-20T08:58:23.150Z",
    "type": "completed",
    "id": 2
  },
  {
    "img": "http://pf9cvp4yn.bkt.clouddn.com/goods-pic_03.png",
    "name": "美国lungflute 正品 “肺笛®” 正式进入中国",
    "count": 1,
    "price": "2888",
    "create_time": "2018-09-20T08:59:38.817Z",
    "type": "isPay",
    "id": 3
  },
  {
    "img": "http://pf9cvp4yn.bkt.clouddn.com/goods-pic_03.png",
    "name": "美国lungflute 正品 “肺笛®” 正式进入中国",
    "count": 1,
    "price": "2888",
    "create_time": "2018-09-20T08:59:38.973Z",
    "type": "isPay",
    "id": 4
  },
  {
    "img": "http://pf9cvp4yn.bkt.clouddn.com/goods-pic_03.png",
    "name": "美国lungflute 正品 “肺笛®” 正式进入中国",
    "count": 1,
    "price": "2888",
    "create_time": "2018-09-20T08:59:39.146Z",
    "type": "isSend",
    "id": 5
  },
  {
    "img": "http://pf9cvp4yn.bkt.clouddn.com/goods-pic_03.png",
    "name": "美国lungflute 正品 “肺笛®” 正式进入中国",
    "count": 1,
    "price": "2888",
    "create_time": "2018-09-20T08:59:39.320Z",
    "type": "isSend",
    "id": 6
  },
  {
    "img": "http://pf9cvp4yn.bkt.clouddn.com/goods-pic_03.png",
    "name": "美国lungflute 正品 “肺笛®” 正式进入中国",
    "count": 1,
    "price": "2888",
    "create_time": "2018-09-20T08:59:39.457Z",
    "type": "isReceive",
    "id": 7
  },
  {
    "img": "http://pf9cvp4yn.bkt.clouddn.com/goods-pic_03.png",
    "name": "美国lungflute 正品 “肺笛®” 正式进入中国",
    "count": 1,
    "price": "2888",
    "create_time": "2018-09-20T08:59:39.619Z",
    "type": "isReceive",
    "id": 8
  },
  {
    "img": "http://pf9cvp4yn.bkt.clouddn.com/goods-pic_03.png",
    "name": "美国lungflute 正品 “肺笛®” 正式进入中国",
    "count": 1,
    "price": "2888",
    "create_time": "2018-09-20T08:59:42.868Z",
    "type": "isPay",
    "id": 9
  },
  {
    "img": "http://pf9cvp4yn.bkt.clouddn.com/goods-pic_03.png",
    "name": "美国lungflute 正品 “肺笛®” 正式进入中国",
    "count": 1,
    "price": "2888",
    "create_time": "2018-09-20T08:59:43.075Z",
    "type": "isSend",
    "id": 10
  },
  {
    "img": "http://pf9cvp4yn.bkt.clouddn.com/goods-pic_03.png",
    "name": "美国lungflute 正品 “肺笛®” 正式进入中国",
    "count": 1,
    "price": "2888",
    "create_time": "2018-09-20T08:59:43.271Z",
    "type": "isReceive",
    "id": 11
    },
    {
      "img": "http://pf9cvp4yn.bkt.clouddn.com/goods-pic_03.png",
      "name": "美国lungflute 正品 “肺笛®” 正式进入中国",
      "count": 1,
      "price": "2888",
      "create_time": "2018-09-20T08:59:43.271Z",
      "type": "completed",
      "id": 12
      }
  ]
};
const mutations = {
  // getData(state) {

  // },
  addShoppingCar(state, newGoods) {
    state.goodslists.push(newGoods);
  },
  confirmGoods(state, id) {
    state.goodslists.find(t => t.id === id).type = "completed";
  },
  addShopcart(state, id) {
    state.goodslists.find(t => t.id === id).count++;
  }
};

// const actions = {
//   addShoppingCar({ commit }, newGoods) {
//     axios
//       .post(URL, newGoods)
//       .then(res => {
//         commit("addShoppingCar", res.data);
//       })
//       .catch(err => {});
//   },
//   confirmGoods({ commit }, id) {
//     axios
//       .patch(`${URL}/${id.id}`, { type: "completed" })
//       .then(res => {
//         commit("confirmGoods", res.data.id);
//       })
//       .catch(err => {});
//   }
  // increaseCount({ commit }, id) {
  //   axios
  //     .patch(`${URL}/${id.id}`, { count: 2})
  //     .then(res => {
  //       commit("confirmGoods", id);
  //     })
  //     .catch(err => {});
  // }
// };

const getters = {
  showGoods(state) {
    return type => {
      switch (type) {
        case "isPay":
          return state.goodslists.filter((t => t.type === "isPay"));
        case "isSend":
          return state.goodslists.filter((t => t.type === "isSend"));
        case "isReceive":
          return state.goodslists.filter((t => t.type === "isReceive"));
        case "completed":
          return state.goodslists.filter((t => t.type === "completed"));
        default:
          return state.goodslists
      }
    };
  }
};

const goodslists = {
  state,
  mutations,
  getters
};
export default goodslists;
