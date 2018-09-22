const state = {
    address: [
        {
            id: "123123",
            name: "清风",
            tellphone: "18701239847",
            area: "北京市大兴区亦庄经济开发区",
            detailed_address:"中和街14号B座301",
            setdefault:true
        }
    ]
};

const mutations={
    addAddress(state,newAddress){
        state.address.push(newAddress)
    }



}

const address={
    state,
    mutations
}
export default address