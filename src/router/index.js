import Vue from 'vue'
// 引入路由第三方包
import VueRouter from 'vue-router'
import {getToken} from "@/utils/token";
// 在项目中使用vue-router进行管理
Vue.use(VueRouter)


const routes = [
  {
    path: '/signin&up',
    component: () => import('../views/signinup')
  },
  {
    path: '/404',
    component: () => import('../views/404')
  },
  {
    path: '/',
    component: () => import('../views/front'),
    meta: { requireAuth:true },
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('../views/front/home')
      }
    ]
  }
]
const router =  new VueRouter({
  mode: 'history',
  routes
})




router.beforeEach(async(to,from,next)=>{
  if(to.matched.length === 0){
    next({path: '/404'})
  }
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    if(getToken()){ //判断本地是否存在token
      if(to.path==='/signin&up'){
        next({
              path:'/home'   //或者回到当前的路径，不进行跳转   from.path
            })}
      else{next();}
      
    }else {
      next({
        path:'/signin&up'
      })
    }
  }
  else {
    next();
  }

})

export default router