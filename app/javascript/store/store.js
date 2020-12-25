import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/router'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    books: [],
    bookInfo: {},
    bookInfoBool: false,
  },
  mutations: {
    fetchBooks(state) {
      state.books = [];
      axios.get('/api/books').then(
        response => { response.data.books.forEach(book => state.books.push(book)) },
        error => { console.log(error) }
      );
    },
    setBookInfo(state, id){
      axios.get(`api/books/${id}`).then(
        response => {
          state.bookInfo = response.data;
          state.bookInfoBool = true;
        },
        error => { console.log(error) }
      );
    },
    deleteBook(state, id) {
      axios.delete(`api/books/${id}`).then(
        response => {
          state.books = [];
          state.bookInfo = '';
          state.bookInfoBool = false;
        },
        error => console.log(error)
      )
    }
  }
})
