<template>
  <div v-if="$curi.response.error" class='book'>
    {{error}}
  </div>
  <div v-else class='book'>
    <h2>{{book.title}}</h2>
    <p>By {{book.author}}</p>
    <p>Published in {{book.published}}</p>
    <p>This book is {{book.pages}} pages</p>
  </div>
</template>

<script>
  export default {
    computed: {
      book: function() {
        const { response } = this.$curi;
        return !response.error && response.data.book;
      }
    }
  };
</script>
