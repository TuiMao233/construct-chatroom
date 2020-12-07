/*
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2020-12-06 14:32:38
 * @LastEditTime: 2020-12-08 00:14:09
 * @Description:
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    // 登录
    path: '/login',
    component: () => import('../view/login.vue')
  },
  {
    // 主页
    path: '/home',
    component: () => import('../view/home.vue')
  },
  {
    // 机器人
    path: '/robot',
    component: () => import('../view/robot.vue')
  },
  {
    // 联系人
    path: '/contacts',
    component: () => import('../view/contacts.vue'),
    children: [
      // 添加联系人
      { path: 'inc', component: () => import('../view/contactsInc.vue') }
    ]
  },
  {
    // 个人
    path: '/personal',
    component: () => import('../view/personal.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
