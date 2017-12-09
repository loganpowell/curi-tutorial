<template>
  <div v-if="$curi.response.error" class='book'>
    {{error}}
  </div>
  <div v-else class='book'>
    <h2>{{book.title}}</h2>
    <p>By {{book.author}}</p>
    <p>Published in {{book.published}}</p>
    <p>This book is {{book.pages}} pages</p>
    <AddToCart :bookID="book.id" />
  </div>
</template>

<script>
  import AddToCart from './AddToCart';

  export default {
    computed: {
      book: function() {
        const { response } = this.$curi;
        return !response.error && response.data.book;
      }
    },
    components: { AddToCart }
  };
</script>
