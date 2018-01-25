import React from 'react';

import AddToCart from './AddToCart';

const Book = ({ response }) => {
  const { error, data } = response;
  if (error) {
    return (
      <div className='book'>
        {error}
      </div>
    );
  }

  const { book } = data;
  return (
    <div className='book'>
      <h2>{book.title}</h2>
      <p>By {book.author}</p>
      <p>Published in {book.published}</p>
      <p>This book is {book.pages} pages</p>
      <AddToCart bookID={book.id} />
    </div>
  );
};

export default Book;