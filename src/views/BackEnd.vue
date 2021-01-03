<template>
    <div class="jumbotron p-3 p-md-5 text-white rounded bg-dark">
        <div class="col-md-9 px-0">
            <h1 class="display-4 font-italic">Back-End</h1>
            <p v-html="back" class="lead my-3"></p>
            <p class="lead mb-0">
                <a href="javascript:window.open('https://namu.wiki/w/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C');" class="text-white font-weight-bold">Continue reading ...</a>
            </p>
        </div>
    </div>
</template>

<script>

import { mapActions } from 'vuex'

export default {
    data() {
        return {
            back: `<li>Back-End 영역 : UI나 GUI로 구성된 화면의 통신/요청에 대해 DB 또는 Interface 등을 통해 시스템 구성 실체에 접근하는 영역</li> <br/>
                   <li>사용자와 접촉하지 않고 Front-End와 연동하여 기술적인 부분을 처리</li>`
        }
    },
    created () {
        this.$store.dispatch('setEditor',true)
    },
    methods: {
        ...mapActions([
            'setEditor'
        ]),
    }
}
</script>