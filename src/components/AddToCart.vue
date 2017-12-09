<template>
  <form>
    <select v-model="count">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select>
    <button type="button" v-on:click="addToCart">Add To Cart</button>
    <button type="button" v-on:click="addAndCheckout">Add To Cart and Checkout</button>
  </form>
</template>

<script>
  import { updateCart } from '../api/shoppingCart';

  export default {
    props: ['bookID'],
    data: function() {
      return {
        count: '1'
      };
    },
    methods: {
      addToCart(event) {
        updateCart(this.bookID, parseInt(this.count));
      },
      addAndCheckout(event) {
        updateCart(this.bookID, parseInt(this.count))
          .then(() => {
            const pathname = this.$router.addons.pathname('Checkout');
            this.$router.history.push({ pathname });
          });
      }
    }
  };
</script>