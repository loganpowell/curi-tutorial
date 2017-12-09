function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// read from localStorage and parse the value
export function getCart() {
  let cart = JSON.parse(localStorage.getItem('cart'));
  // initialize cart if it doesn't already exist
  if (cart == null) {
    cart = {};
    saveCart(cart);
  }
  return Promise.resolve(cart);
}

// add the book and count to the cart
export function updateCart(bookID, count) {
  return getCart()
    .then(cart => {
      cart[bookID] = count;
      saveCart(cart);
      return cart;
    });
}

// reset the cart to an empty object
export function resetCart() {
  const cart = {};
  saveCart(cart);
}
