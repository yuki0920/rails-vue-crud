import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/router'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    books: []
  },
  mutations: {
    fetchBooks(state) {
      state.books = [];
      axios.get('/api/books').then(
        response => {response.data.books.forEach(book => state.books.push(book))}, error => {console.log(error)
      });
    },
  }
})
