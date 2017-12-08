import Home from './components/Home';
import Contact from './components/Contact';
import BookList from './components/BookList';
import Book from './components/Book';
import Checkout from './components/Checkout';
import CheckoutComplete from './components/CheckoutComplete';
import NotFound from './components/NotFound';

import { fetchAllBooks, fetchBook } from './api/books';
import { getCart } from './api/shoppingCart';

const routes = [
  {
    name: 'Home',
    path: '',
    match: {
      response: ({ set }) => {
        set.body(Home);
      }
    }
  },
  {
    name: 'Contact',
    path: 'contact',
    match: {
      response: ({ set }) => {
        set.body(Contact);
      }
    }
  },
  {
    name: 'Checkout',
    path: 'checkout',
    match: {
      every: () => {
        return Promise.all([
          fetchAllBooks(),
          getCart()
        ])
      },
      response: ({ resolved, set }) => {
        set.body(Checkout);
        /*
        * We will iterate over all of the items in
        * our shopping cart and find the matching
        * book. Then, we combine the book and the
        * number being purchased into one object.
        *
        * We then assign that array of objects as
        * the "items" property of our response's
        * data object.
        */ 
        const [ books, cart ] = resolved.every;
        const items = Object.keys(cart).map(key => {
          const id = parseInt(key, 10);
          const count = cart[key];
          const book = books.find(b => b.id === id);
          return Object.assign({}, book, { count });
        });
        set.data({ items });
      }
    },
    children: [
      {
        name: 'Checkout Complete',
        path: 'complete',
        match: {
          response: ({ set }) => {
            set.body(CheckoutComplete);
          }
        }
      }
    ]
  },
  {
    name: 'Book List',
    path: 'books',
    match: {
      every: () => fetchAllBooks(),
      response: ({ resolved, set }) => {
        set.body(BookList);
        set.data({ books: resolved.every });
      }
    },
    children: [
      {
        name: 'Book',
        path: ':id',
        params: { id: n => parseInt(n, 10) },
        match: {
          every: ({ params }) => fetchBook(params.id),
          response: ({ error, resolved, set }) => {
            set.body(Book);
            if (error) {
              set.error(error);
            } else {
              set.data({ book: resolved.every });
            }
          }
        }
      }
    ]
  },
  {
    name: 'Not Found',
    path: '(.*)',
    match: {
      response: ({ set }) => {
        set.body(NotFound);
      }
    }
  }
];

export default routes;
