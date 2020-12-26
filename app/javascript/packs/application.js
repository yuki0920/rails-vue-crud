// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
//= require materialize

import Vue from 'vue'
import App from './App.vue'
// import axios from "axios"
// import VueAxiosPlugin from './plugins/vue-axios'
import Router from '../router/router.js'
import Store from '../store/store.js'
import VueAxios from 'vue-axios'
import { securedAxiosInstance, plainAxiosInstance } from '../backend/axios/axios'

// Vue.use(VueAxiosPlugin, { axios: axios })
Vue.config.productionTip = false
Vue.use(VueAxios, {
  secured: securedAxiosInstance,
  plain: plainAxiosInstance
})

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '#app',
    router: Router,
    store: Store,
    securedAxiosInstance,
    plainAxiosInstance,
    render: h => h(App),
    });
  }
)
