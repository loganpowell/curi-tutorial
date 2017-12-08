import React from 'react';

const Book = ({ response }) => (
  <div className='book'>
    Book {response.params.id}
  </div>
);

export default Book;
