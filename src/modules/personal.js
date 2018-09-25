const state = {
  personal: {
    id: "taotao",
    img: "http://pcgnine5c.bkt.clouddn.com/timg.jpg",
    name: "可爱的桃桃",
    sex: "女",
    birthday: "1993.09.08",
    native_place: "河北省保定市区徐水县西村",
    email: "18701239847@163.com",
    pathogeny: "咳嗽",
    integral: 2008,
    useIntegral:0,
    coupon: [
      {
        id: "qweq",
        isdead: false,
        img: "http://pcgnine5c.bkt.clouddn.com/timg.jpg",
        isselected: false
      }
    ],
    concession_code: [
      {
        id: "479284IVNEknvs324912",
        isdead: true,
        img: "http://pcgnine5c.bkt.clouddn.com/timg.jpg",
        isselected: false
      },
      {
        id: "479284IVNEknvs324921",
        isdead: false,
        img: "http://pcgnine5c.bkt.clouddn.com/timg.jpg",
        isselected: false
      }
    ]
  }
};
const mutations = {
  subIntegral(state) {
    state.personal.integral--;
  },
  delCoupon(state) {
    for (let i = 0; i < state.personal.coupon.length; i++) {
      if ((state.personal.coupon[i].isselected = true)) {
        state.personal.coupon.splice(
          state.personal.coupon.findIndex(
            t => t.id === state.personal.coupon[i].id
          ),
          1
        );
      }
    }
  },
  delconcession(state) {
    for (let i = 0; i < state.personal.concession_code.length; i++) {
      if ((state.personal.concession_code[i].isselected = true)) {
        state.personal.concession_code.splice(
          state.personal.concession_code.findIndex(
            t => t.id === state.personal.concession_code.id
          ),
          1
        );
      }
    }
  },
  useCoupon(state, id) {
    state.personal.coupon.find(
      t => t.id === id
    ).isselected = !state.personal.coupon.find(t => t.id === id).isselected;
  },
  useConcession(state, id) {
    state.personal.concession_code.find(
      t => t.id === id
    ).isselected = !state.personal.concession_code.find(t => t.id === id)
      .isselected;
  },
  newPassword(state,newpassword) {
    state.personal.password=newpassword
  },
  useIntegral(state,num) {
    state.personal.useIntegral=num
    
  }, lastIntegral(state) {
    state.personal.integral = state.personal.integral - state.personal.useIntegral
    state.personal.useIntegral=0
  }
  ,
  allCoupon(state) {
    for (let i = 0; i < state.personal.coupon.length; i++){
      state.personal.coupon[i].isselected=false
    }
  },
  allConcession(state) {
    for (let i = 0; i < state.personal.concession_code.length; i++){
      state.personal.concession_code[i].isselected=false
    }
  }
};

const getters = {
  showCanUse(state) {
    return state.personal.concession_code.filter(t => t.isdead === false);
  },
  showNoUse(state) {
    return state.personal.concession_code.filter(t => t.isdead === true);
  },
  showCanUseCou(state) {
    return state.personal.coupon.filter(t => t.isdead === false);
  },
  showNoUseCou(state) {
    return state.personal.coupon.filter(t => t.isdead === true);
  }
};

const personal = {
  state,
  mutations,
  getters
};
export default personal;
