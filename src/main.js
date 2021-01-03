import { createApp } from 'vue'
import App from './App'
import router from './router'
import { store } from './store'

import "./style/css/bootstrap.css"

/* 2.0 설정 방법
new Vue({
    el: '#app',
    // 라우터 연결
    router,

    // vuex 연결
    store,
    render: h => h(App)
})*/

createApp(App)
.use(router)
.use(store)
.mount('#app')
