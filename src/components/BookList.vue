<template>
  <div class='book-list'>
    <h1>Available Books</h1>
    <div class='books'>
      <div v-for="book in books" :key="book.id" class='book-item'>
        <curi-link to='Book' :params="{ id: book.id }">
          Book {{book.id}}
        </curi-link>
      </div>
    </div>
  </div>
</template>

<script>
  import books from '../books';
  export default {
    data: function() {
      return { books };
    }
  };
</script>
