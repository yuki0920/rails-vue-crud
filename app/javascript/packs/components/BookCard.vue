<template>
  <div class="card blue-grey darken-1">
    <div class="card-content white-text">
      <span class="card-title">
        【{{ bookInfo.title }}】
      </span>
      <div class="detail">
        ・著者：{{ bookInfo.author }}
      </div>
      <div class="detail">
        ・出版社：{{ bookInfo.publisher }}
      </div>
      <div class="detail">
        ・ジャンル：{{ bookInfo.genre }}
      </div>
      <router-link :to="{path: `/edit/${bookInfo.id}`}" class="btn">本の編集</router-link>
      <button class="btn #e53935 red darken-1" @click="deleteBook(bookInfo.id)">削除</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BookCard',
    props: {
      bookInfo: Object
    }
  }
</script>

<style scoped></style>
