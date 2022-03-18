import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../components/login.vue'
import forget from '../components/forget.vue'
import home from '../components/home.vue'
import welcome from '../components/welcome.vue'
import stuAchievement from '../components/student/stuAchievement.vue'
import stuCenter from '../components/student/stuCenter.vue'
import majorClass from '../components/teacher/majorClass.vue'
import teaCenter from '../components/teacher/teaCenter.vue'
import hTeacher from '../components/headmaster/hTeacher.vue'
import hTeacherDetail from '../components/headmaster/hTeacherDetail.vue'
import marjorClass2Detail from '../components/headmaster/marjorClass2Detail.vue'
import marjorClass2 from '../components/headmaster/marjorClass2.vue'
import university from '../components/headmaster/university.vue'
import universityDetail from '../components/headmaster/universityDetail.vue'
import marjorC from '../components/headmaster/marjorC.vue'
import dirCenter from '../components/diretor/dirCenter.vue'
import dTeacher from '../components/diretor/dTeacher.vue'
import xueyuan from '../components/diretor/xueyuan.vue'



Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: login },
  { path: '/forget', component: forget },
  {
    path: '/home',
    component: home,
    redirect: '/welcome',
    children: [
      { path: '/welcome', component: welcome },
      { path: '/stuAchievement', component: stuAchievement },
      { path: '/stuCenter', component: stuCenter },
      { path: '/majorClass', component: majorClass },
      { path: '/hTeacherDetail', component: hTeacherDetail },
      { path: '/marjorClass2Detail', component: marjorClass2Detail },
      { path: '/marjorC', component: marjorC },
      { path: '/universityDetail', component: universityDetail },
      { path: '/teaCenter', component: teaCenter },
      { path: '/hTeacher', component: hTeacher },
      { path: '/marjorClass2', component: marjorClass2 },
      { path: '/university', component: university },
      { path: '/dirCenter', component: dirCenter },
      { path: '/dTeacher', component: dTeacher },
      { path: '/xueyuan', component: xueyuan },
      
      
      
    ]
  }
]

const router = new VueRouter({
  routes
})

//路由守卫
// router.beforeEach((to, from, next) => {
  //const token = localStorage.getItem('token')
//   if (to.name !== 'Login' && !token) next({ name: 'Login' })
//   else next()
// })

export default router
