import React from 'react';

import { Link } from '@curi/react';

import books from '../books';

const BookList = () => (
  <div className='book-list'>
    <h1>Available Books</h1>
    <div className='books'>
      { books.map(b => (
        <div className='book-item' key={b.id}>
          <Link to='Book' params={{ id: b.id }}>
            Book {b.id}
          </Link>
        </div>
      )) }
    </div>
  </div>
);

export default BookList;
