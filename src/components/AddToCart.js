import React from 'react';
import { curious } from '@curi/react';

import { updateCart } from '../api/shoppingCart';

class AddToCart extends React.Component {

  state = { count: 1 }

  updateSelect = (event) => {
    this.setState({ count: parseInt(event.target.value, 10) })
  }

  addToCart = () => {
    updateCart(this.props.bookID, this.state.count);
  }

  addAndCheckout = () => {
    const { router, bookID } = this.props;
    updateCart(bookID, this.state.count)
      .then(() => {
        // generate the pathname for the Checkout route and then
        // navigate to there automatically
        const pathname = router.addons.pathname('Checkout');
        router.history.push({ pathname });
      });
  }

  render() {
    return (
      <form>
        <select value={this.state.count} onChange={this.updateSelect}>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
        </select>
        <button type="button" onClick={this.addToCart}>
          Add To Cart
        </button>
        <button type="button" onClick={this.addAndCheckout}>
          Add To Cart and Checkout
        </button>
      </form>    
    );
  }
}

export default curious(AddToCart);