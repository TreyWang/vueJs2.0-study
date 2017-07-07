import Vue from 'vue'
import VueRouter from 'vue-router'

//routes
import study1 from './components/study1.vue'
import user from './components/routers/user.vue'
import shop from './components/routers/shop.vue'

Vue.use(VueRouter)

const home={template: `<div>This is Home</div>`}

// const user={template: `<div>This is an user, name: {{$router.param.name}, age: {{$router.param.age}}</div>`}

const userDetail={template: `<div>This is User Detail</div>`}

const routes = [
  {path: "/", component: home},
  {path: '/study1', component: study1},
  {path: '/user/:name/:age', component: user,
    children:[
      {path: 'detail', component: userDetail}
    ]
  },
  {path: '/redirect', redirect: '/'},
  {path: '/shop', component: shop}
]


const router = new VueRouter({
  model: 'history',
  base: __dirname,
  routes
})

//编程式导航，利用钩子判断权限
router.beforeEach((to, form, next) => {
  next();
})

export default router
