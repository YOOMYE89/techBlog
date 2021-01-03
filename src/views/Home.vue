<template>
    <div class="jumbotron p-3 p-md-5 text-white rounded bg-dark">
        <div class="col-md-6 px-0">
            <h1 class="display-4 font-italic">Technology Study</h1>
            <p class="lead my-3">Scheduled to continuously learn about <br /> the field of interest and post related contents.</p>
        </div>
    </div>

    <!-- Slider -->
    <div 
      class="row mb-2 home-slider"
      @mouseover="onIndicator"
      @mouseout="offIndicator">
      
      <div 
        class="slider-btn-left"
        @click="prevSlide">
        <i class="material-icons btn">keyboard_arrow_left</i>
      </div>

      <swiper 
        v-if="hSliderItems.length > 0"
        ref="swiper"
        :showIndicator="isIndicatorMode"
        interval="7000" 
        duration="500">
          <slide 
            v-for="hSliderItem in hSliderItems" 
            :key="hSliderItem.id">
              <slider-item :hSliderItem="hSliderItem"/>
          </slide>
      </swiper>

      <div 
        class="slider-btn-right"
        @click="nextSlide">
        <i class="material-icons btn">keyboard_arrow_right</i>
      </div>

    </div>

    <main role="main" class="container">
      <div class="row">
        <div class="col-md-8 blog-main">
          <h3 class="pb-3 mb-4 font-italic border-bottom"/>


          <div class="blog-post">
            <notice
              v-for=" notice in noticeLists"
              :key="notice.id"
              :notice="notice"/>
          </div><!-- /.blog-post -->

        </div><!-- /.blog-main -->

        <aside class="col-md-4 blog-sidebar">
          
          <div class="p-3">
            <h4 class="font-italic">Archives</h4>
            <ol class="list-unstyled mb-0">
              <li><a href="#">March 2014</a></li>
              <li><a href="#">February 2014</a></li>
              <li><a href="#">January 2014</a></li>
              <li><a href="#">December 2013</a></li>
              <li><a href="#">November 2013</a></li>
              <li><a href="#">October 2013</a></li>
              <li><a href="#">September 2013</a></li>
              <li><a href="#">August 2013</a></li>
              <li><a href="#">July 2013</a></li>
              <li><a href="#">June 2013</a></li>
              <li><a href="#">May 2013</a></li>
              <li><a href="#">April 2013</a></li>
            </ol>
          </div>

          <div class="p-3">
            <h4 class="font-italic">Example</h4>
            <ol class="list-unstyled">
              <li><a href="#">GitHub</a></li>
            </ol>
          </div>
        </aside><!-- /.blog-sidebar -->

      </div><!-- /.row -->

    </main><!-- /.container -->

    <footer class="blog-footer">
      <p>If you need anything, Send E-mail to <b>mythdcom@naver.com</b></p>
      <p>
        <a href="#">Back to top</a>
      </p>
    </footer>
</template>

<script>
import { mapState } from 'vuex'

// Slider
import SliderItem from '../components/SliderItem'
import { Swiper, Slide } from 'vue-swiper-component'

// Notice
import Notice from '../components/Notice'

export default {
  components: {
    Swiper,
    Slide,
    SliderItem,
    Notice
  },
  data () {
    return {
      isIndicatorMode:false
    }
  },
  computed: {
    ...mapState('homeStore', [
      'hSliderItems',
      'noticeLists'
    ]),
  },
  methods: {
    onIndicator() {
      return this.isIndicatorMode = true
    },
    offIndicator() {
      return this.isIndicatorMode = false
    },
    prevSlide() {
      return this.$refs.swiper.prevSlide()
    },
    nextSlide() {
      return this.$refs.swiper.nextSlide()
    }
  }
}
</script>