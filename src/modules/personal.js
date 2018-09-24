const state = {
    personal: {
        id: "taotao",
        img: "http://pcgnine5c.bkt.clouddn.com/timg.jpg",
        name: "可爱的桃桃",
        sex: "nv",
        birthday: "1993.09.08",
        native_place: "河北省保定市区徐水县西村",
        email: "18701239847@163.com",
        pathogeny: "咳嗽",
        integral: "2008",
        coupon: [
            {
                id: "qweq",
                isdead: true,
                img: "http://pcgnine5c.bkt.clouddn.com/timg.jpg"
            }
        ],
        concession_code: [
            {
                id: "479284IVNEknvs324912",
                isdead: true,
                img: "http://pcgnine5c.bkt.clouddn.com/timg.jpg"
            },
            {
                id: "479284IVNEknvs324921",
                isdead: false,
                img: "http://pcgnine5c.bkt.clouddn.com/timg.jpg"
            }
        ]
    }
};
const mutations = {
    subIntegral(state) {
        state.personal.integral--;
    },
    delCoupon(state, id) {
        state.personal.coupon.splice(
            state.personal.coupon.findIndex(t => t.id === id),
            1
        );
    },
    delconcession(state, id) {
        state.personal.concession_code.splice(
            state.personal.concession_code.findIndex(t => t.id === id),
            1
        );
    }
};

const getters = {
    showCanUse(state) {
        return state.personal.concession_code.filter(t => t.isdead === true);
    },
    showNoUse(state) {
        return state.personal.concession_code.filter(t => t.isdead === false);
    },
    showCanUseCou(state) {
        return state.personal.coupon.filter(t => t.isdead === true);
    },
    showNoUseCou(state) {
        return state.personal.coupon.filter(t => t.isdead === false);
    }
};

const personal = {
    state,
    mutations,
    getters
};
export default personal;
