<template>
  <div class="container">
    <h1 class="#f3e5f5 purple lighten-5 center">本の編集</h1>
    <form class="col s12">
      <div class="row">
        <div class="input-field">
          <input placeholder="Title" type="text" class="validate" v-model="book.title" required="required"></br>
        </div>
      </div>
      <div class="row">
        <div class="input-field">
          <input placeholder="Author" type="text" class="validate" v-model="book.author" required="required">
        </div>
      </div>
      <div class="row">
        <div class="input-field">
          <input placeholder="Publisher" type="text" class="validate" v-model="book.publisher" required="required">
        </div>
      </div>
      <div class="row">
        <div class="input-field">
          <input placeholder="Genre" type="text" class="validate" v-model="book.genre" required="required">
        </div>
      </div>
      <div class="btn" v-on:click="updateBook(book.id)">本の情報を変更</div>
    </form>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        book: {title: '', author: '', publisher: '', genre: ''}
      }
    },
    mounted() {
      this.setBookEdit(this.$route.params.id);
    },
    methods: {
      setBookEdit(id) {
        axios.get(`api/books/${id}.json`)
        .then(response => {
          this.book.id = response.data.id;
          this.book.title = response.data.title;
          this.book.author = response.data.author;
          this.book.publisher = response.data.publisher;
          this.book.genre = response.data.genre;
        });
      },
      updateBook(id) {
        axios.put(`api/books/${id}`, {book: this.book})
          .then(response => {this.$router.push({path: '/'});},
          error => {console.log(error);}
        )
      }
    }
  }
</script>

<style scoped></style>
