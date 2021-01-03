
// 3.0 처리 vue-router 4.xx 버전 필요
import  { createWebHistory, createRouter }  from 'vue-router'

import Home from '../views/Home'
import Front from '../views/FrontEnd'
import Back from '../views/BackEnd'
import Editor from '../views/Editor'


// config 배열 설정
const routes = [
  {
    // root 페이지 https:// 도메인 ~ /~ uri의 최상위 페이지
    name: 'index', // $route 객체 이름 설정
    path: '/',
    component: Home
  },
  {
    name: 'frontEnd', // $route 객체 이름 설정
    path: '/frontEnd',
    component: Front
  },
  {
    name: 'backEnd', // $route 객체 이름 설정
    path: '/backEnd',
    component: Back
  },
  {
    name: 'editor', // $route 객체 이름 설정
    path: '/editor',
    component: Editor
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});


// 모듈로 쓰기 위함
export default router;
