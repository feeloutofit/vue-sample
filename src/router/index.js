import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
      redirect: '1st',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
    children: [
      {
          path: '1st',
          name: '1st',
          component: () => import(/* webpackChunkName: "about" */ '../views/1st.vue'),
      },
        {
            path: '2st',
            name: '2st',
            component: () => import(/* webpackChunkName: "about" */ '../views/2st.vue'),
        },
        {
            path: '3rd',
            name: '3rd',
            component: () => import(/* webpackChunkName: "about" */ '../views/3rd.vue'),
        }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
