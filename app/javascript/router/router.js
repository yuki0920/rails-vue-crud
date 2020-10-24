import Vue from 'vue'
import VueRouter from 'vue-router'
import BookHome from '../packs/BookHome.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/', name: 'BookHome', component: BookHome},
]

export default new VueRouter({routes});
