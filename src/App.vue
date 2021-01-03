<template>
  <div class="container">
      <header class="blog-header py-3">
        <div class="row flex-nowrap justify-content-between align-items-center">
          <!-- 홈 아이콘 -->
          <div class="col-4 pt-1">
            <router-link
              to="/"
              class="to-btn mx-3">
              <i class="material-icons">home</i>
            </router-link>
          </div>

          <!-- 중간 제목 -->
          <div class="col-4 text-center">
            <div class="blog-header-logo text-dark">Koios's Blog</div>
          </div>

          <div class="col-4 d-flex justify-content-end align-items-center">

            <!-- 글쓰기 -->
            <router-link
              v-show="showEditor"
              :to="{ name: 'editor', params: { editObj: this.$route.path } }"
              class="to-btn mx-3">
              <i class="material-icons">create</i>
            </router-link>

            <!-- 관리 -->
            <router-link
              to="/"
              class="to-btn mx-3">
              <i class="material-icons">settings</i>
            </router-link>

            <!-- 로그인 -->
            <router-link
              to="/"
              class="to-btn mx-3">
              <i class="material-icons">login</i>
            </router-link>

          </div>
        </div>
      </header>

      <!-- 네비게이션 -->
      <div class="nav-scroller py-1 mb-2">
        <nav class="nav d-flex justify-content-between">
          <a class="p-2 text-muted" @click="$router.push('/frontEnd')" href="#">Frontend</a>
          <a class="p-2 text-muted" @click="$router.push('/backEnd')" href="#">Backend</a>
          <a class="p-2 text-muted" href="#">Middleware</a>
          <a class="p-2 text-muted" href="#">Language</a>
          <a class="p-2 text-muted" href="#">Basic</a>
          <div class="p-2 text-muted" href="#"></div>
          <div class="p-2 text-muted" href="#"></div>
          <div class="p-2 text-muted" href="#"></div>
          <div class="p-2 text-muted" href="#"></div>
          <div class="p-2 text-muted" href="#"></div>
        </nav>
      </div>

      <!-- 라우터 뷰 내장 컴포넌트 내 view가 출력되어서 나오는 컴포넌트-->
      <router-view/>
    </div>  
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'App',
  watch:{
    $route(to){
      if(to.path === '/'){
        this.$store.dispatch('setEditor',false)
      }
    }
  },
  computed: {
    ...mapState([
      'showEditor'
    ])
  },
  methods: {
    ...mapActions([
      'setEditor'
    ])
  }
}
</script>

<style>
  @import './style/css/blog.css';
</style>
