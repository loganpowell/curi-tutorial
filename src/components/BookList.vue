<template>
  <div class='book-list'>
    <h1>Available Books</h1>
    <div class='books'>
      <div
        v-for="book in $curi.response.data.books"
        :key="book.id"
        class='book-item'
      >
        <curi-link to='Book' :params="{ id: book.id }">
          {{book.title}}
        </curi-link>
      </div>
    </div>
  </div>
</template>
