<template>
  <div class="container">
    <h1 class="#f3e5f5 purple lighten-5 center">[Rails+Vue.js]~Bookshelf~</h1>
    <div class="row #e3f2fd blue lighten-5">
      <div class="col s4 m6" v-for="book in books" :key="book.id">
        <div class="card btn">
          <span class="card-title" v-on:click="setBookInfo(book.id)">
            {{ book.title }}
          </span>
        </div>
      </div>
    </div>
    <div class="row" v-show="bookInfoBool">
      <div class="col s12 m12">
        <div class="card blue-grey darken-1">
           <!-- 下記と同一 -->
          <!-- <book-card :book-info="bookInfo"></book-card> -->
          <BookCard :book-info="bookInfo" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import { mapState } from 'vuex'
  import BookCard from './BookCard'

  export default {
    name: 'BookHome',
    components: {
      BookCard,
    },
    computed: mapState([
      'books',
      'bookInfo',
      'bookInfoBool',
    ]),
    mounted: function() {
      this.$store.commit('fetchBooks');
    },
    methods: {
      setBookInfo(id) {
        this.$store.commit('setBookInfo', id)
      },
      deleteBook(id) {
        this.$store.commit('deleteBook', id);
        this.$store.commit('fetchBooks');
      }
    }
  }
</script>

<style scoped></style>
