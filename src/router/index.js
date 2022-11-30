import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/pages/Login"
import Home from "@/pages/Home"


Vue.use(VueRouter)
const routes = [
  {path:"/login",name:"login",component:Login},
  {path:"/",redirect:"/login"},
  {path:"/home",name:"home",component:Home}
  
 
]


const router = new VueRouter({
  routes
 
})
// 挂载路由导航守卫  访问权限
router.beforeEach((to,from,next)=>{
  if(to.path==='/login') return next();
  const tokenStr=window.sessionStorage.getItem("token")
  if(!tokenStr) return next("/login")
  next()


})
export default router