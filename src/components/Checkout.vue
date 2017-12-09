<template>
  <div class='checkout'>
    <h1>Checkout</h1>
    <div v-if="$curi.response.data.items.length">
      <table>
        <thead>
          <tr>
            <td>Book</td>
            <td>Quantity</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="book in $curi.response.data.items" :key="book.id">
            <td>{{book.title}}</td>
            <td>{{book.count}}</td>
          </tr>
        </tbody>
      </table>
      <button type='button' v-on:click="purchase">
        Purchase Books
      </button>
    </div>
    <div v-else>
      You have not added any items to your shopping cart!
    </div>
  </div>
</template>
<script>
  import { resetCart } from '../api/shoppingCart';

  export default {
    methods: {
      purchase: function(event) {
        // when the user "purchases" their books, we just
        // reset the cart and redirect to the "Checkout Complete" page
        resetCart();
        const pathname = this.$router.addons.pathname('Checkout Complete');
        this.$router.history.push({ pathname });
      }
    }
  };
</script>