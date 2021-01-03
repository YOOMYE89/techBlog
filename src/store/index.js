// vuex 설정
import { createStore } from 'vuex'
import homeStore from './homeStore'
import editStore from './editStore'

// 2.0 설정
/*
Vue.use(store)
*/ 
//3.0 설정
export const store = createStore({
    // 문법에 대한 업격함 성능이슈가 있으므로, 배포할 때는 false
    strict: process.env.NODE_ENV !== 'PRODUCTION',

    // 4가지 핵심 개념
    state: () => ({ // data
      showEditor:false
    }),
    getters: { // computed

    },
    mutations: { // method 실제 값(state)을 변경할 때 사용 (비동기X)
      setEditor(state, payload) {
        state.showEditor = payload
      }
    },
    actions: { // method 비동기를 포함하는 일반 로직
      setEditor({ commit }, payload){
        commit('setEditor', payload)
      }
    },

    // modules -> 각 저장소에 대한 분기
    modules: {
      homeStore,
      editStore
    }
})