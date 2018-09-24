const state = {
    address: [
        {
            id: "123123",
            name: "清风",
            tellphone: "18701239847",
            area: "北京市大兴区亦庄经济开发区",
            detailed_address: "中和街14号B座301",
            setdefault: true
        },
        {
            id: "12323",
            name: "清风",
            tellphone: "1870112239847",
            area: "北京市大兴区亦庄经济开发区",
            detailed_address: "中和街14号B座301",
            setdefault: false
        }
    ]
};

const mutations = {
    addAddress(state, newAddress) {
        if (newAddress.setdefault) {
            for (let i = 0; i < state.address.length; i++) {
                state.address[i].setdefault = false;
            }
            state.address.push(newAddress);
        } else {
            state.address.push(newAddress);
        }
    },
    setDefault(state, id) {
        for (let i = 0; i < state.address.length; i++) {
            state.address[i].setdefault = false;
        }
        state.address.find(t => t.id === id).setdefault = true;
    },
    // selectAdress(state, id) {
    //     for (let i = 0; i < state.address.length; i++) {
    //         state.address[i].is_selected = false;
    //     }
    //     state.address.find(t => t.id === id).is_selected = true;
    // },
    delAddress(state, id) {
        state.address.splice(state.address.findIndex(t => t.id === id), 1);
        if (state.address.length !== 0) {
            state.address[0].setdefault = true;
        }
    },
    editAddress(state, editAddress) {
        if (editAddress.setdefault) {
            for (let i = 0; i < state.address.length; i++) {
                state.address[i].setdefault = false;
            }
            state.address.find(t => t.id === editAddress.id).name =
                editAddress.name;
            state.address.find(t => t.id === editAddress.id).tellphone =
                editAddress.tellphone;
            state.address.find(t => t.id === editAddress.id).area =
                editAddress.area;
            state.address.find(t => t.id === editAddress.id).detailed_address =
                editAddress.detailed_address;
            state.address.find(t => t.id === editAddress.id).setdefault =
                editAddress.setdefault;
        } else {
            state.address.find(t => t.id === editAddress.id).name =
                editAddress.name;
            state.address.find(t => t.id === editAddress.id).tellphone =
                editAddress.tellphone;
            state.address.find(t => t.id === editAddress.id).area =
                editAddress.area;
            state.address.find(t => t.id === editAddress.id).detailed_address =
                editAddress.detailed_address;
            state.address.find(t => t.id === editAddress.id).setdefault =
                editAddress.setdefault;
        }
    }
};
const getters = {
    editAddress(state) {
        return function(id) {
            return state.address.find(t => t.id === id);
        };
    },
    showAddress(state) {
        const arrs = state.address.filter(t => t.setdefault === true);
        return function(id) {
            if (state.address.findIndex(t => t.id === id)===-1){
                    return arrs[0]
            }
            else {
                return state.address.find(t=>t.id===id)
            }
           
        };
    }
};

const address = {
    state,
    mutations,
    getters
};
export default address;
