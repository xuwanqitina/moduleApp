import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import index from "@/components/index/index"
import member from "@/components/member/member"
import module from "@/components/module/module"
import product from "@/components/product/product"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: "/member",
      name : "member",
      component : member
    },
    {
      path: "/module",
      name : "module",
      component : module
    },
    {
      path: "/product",
      name : "product",
      component : product
    }
  ]
})
