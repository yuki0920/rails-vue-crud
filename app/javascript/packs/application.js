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
import Router from '../router/router.js'
import Store from '../store/store.js'

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '#app',
    router: Router,
    store: Store,
    render: h => h(App),
    });
  }
)
// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
