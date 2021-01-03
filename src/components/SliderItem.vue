<template>
    <div class="col-md-12">
        <div class="card flex-md-row mb-4 box-shadow h-md-250">
            <div class="card-body d-flex flex-column align-items-start">
                <strong class="d-inline-block mb-2 text-primary">{{ this.hSliderItem.title }}</strong>
                <h3 class="mb-0">
                <a class="text-dark" href="#">{{ this.hSliderItem.type }}</a>
                </h3>
                <div class="mb-1 text-muted">{{ date }}</div>
                <p class="card-text mb-auto">{{ this.hSliderItem.content }}</p>
                <a href="#">Continue reading</a>
            </div>
            <img class="card-img-right flex-auto d-none d-md-block" :src="this.hSliderItem.imgUrl" alt="Card image cap">
        </div>
    </div>
</template>

<script>
import dayjs from 'dayjs'

export default {
    props: {
        hSliderItem: Object
    },
    computed : {
        date() {
            return dayjs(this.hSliderItem.createDate).format('YYYY년 MM월 DD일')
        }
    }
}
</script>