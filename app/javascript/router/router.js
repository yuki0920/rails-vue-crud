import Vue from 'vue'
import VueRouter from 'vue-router'
import BookHome from '../packs/BookHome.vue'
import BookCreate from '../packs/BookCreate.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/', name: 'BookHome', component: BookHome},
  {path: '/create',component: BookCreate}
]

export default new VueRouter({routes});
