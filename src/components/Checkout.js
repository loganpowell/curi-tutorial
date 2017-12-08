import React from 'react';
import { curious } from '@curi/react';

import { resetCart } from '../api/shoppingCart';

class Checkout extends React.Component {

  purchase = () => {
    // when the user "purchases" their books, we just
    // reset the cart and redirect to the "Checkout Complete" page
    resetCart();
    const { router } = this.props;
    const pathname = router.addons.pathname('Checkout Complete');
    router.history.push({ pathname });
  }

  render() {
    const { response } = this.props;
    if (!response.data.items.length) {
      return (
        <div className='checkout'>
          <h1>Checkout</h1>
          <div>
            You have not added any items to your shopping cart!
          </div>
        </div>
      )
    }

    return (
      <div className='checkout'>
        <h1>Checkout</h1>
        <div>
          <table>
            <thead>
              <tr>
                <td>Book</td>
                <td>Quantity</td>
              </tr>
            </thead>
            <tbody>
              {
                response.data.items.map(book => (
                  <tr key={book.id}>
                    <td>{book.title}</td>
                    <td>{book.count}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
          <button type='button' onClick={this.purchase}>
            Purchase Books
          </button>
        </div>
      </div>
    );
  }
}

export default curious(Checkout);
