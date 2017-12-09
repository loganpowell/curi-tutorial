import Home from './components/Home';
import Contact from './components/Contact';
import BookList from './components/BookList';
import Book from './components/Book';
import Checkout from './components/Checkout';
import NotFound from './components/NotFound';

import { fetchAllBooks, fetchBook } from './api/books';

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
      response: ({ set }) => {
        set.body(Checkout);
      }
    }
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