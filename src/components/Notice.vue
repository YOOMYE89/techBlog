<template>
    <h2 class="blog-post-title">{{ this.notice.title }}</h2>
    <p class="blog-post-meta">{{ date }} <a href="#">{{ this.notice.author }}</a></p>

    <div v-html="this.notice.content">
    </div>
</template>

<script>
import dayjs from 'dayjs'

export default {
    props: {
        notice: Object
    },
    computed : {
        date() {
            return dayjs(this.notice.createDate).format('YYYY년 MM월 DD일')
        }
    }
}
</script>