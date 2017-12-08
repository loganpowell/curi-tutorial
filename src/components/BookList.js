import React from 'react';

import { Link } from '@curi/react';

const BookList = ({ response }) => (
  <div className='book-list'>
    <h1>Available Books</h1>
    <div className='books'>
      { response.data.books.map(b => (
        <div key={b.id} className='book-item'>
          <Link to='Book' params={{ id: b.id }}>
            {b.title}
          </Link>
        </div>
      )) }
    </div>
  </div>
);

export default BookList;
