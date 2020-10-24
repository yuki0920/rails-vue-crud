import Vue from 'vue'
import VueRouter from 'vue-router'
import BookHome from '../packs/BookHome.vue'
import BookCreate from '../packs/BookCreate.vue'
import BookEdit from '../packs/BookEdit.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/', name: 'BookHome', component: BookHome},
  {path: '/create',component: BookCreate},
  {path: '/edit/:id',component: BookEdit},
]

export default new VueRouter({routes});
