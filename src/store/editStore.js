
export default {
    namespaced: true,
    state: () => ({
        editObj:''
    }),
    getters: {

    },
    mutations: {
        setEditObj(state, payload) {
            state.editObj = payload
        }
    },
    actions: {
        setEditObj({ commit }, payload){
            let v = String(payload).toUpperCase().replace(/\//g,"")
            commit('setEditObj', v)
        }
    }
}