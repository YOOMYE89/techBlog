<template>
    <div class="jumbotron p-3 p-md-5 text-white rounded bg-dark">
        <div class="col-md-9 px-0">
            <h1 class="display-4 font-italic">Front-End</h1>
            <p v-html="front" class="lead my-3"></p>
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
            front: `<li>Front-End 영역 : 사용자(User)의 화면에 나타나는 웹 화면</li> <br/>
                    <li>사용자와 직접 접촉하며 상호작용이 이루어지는 파트</li>`
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