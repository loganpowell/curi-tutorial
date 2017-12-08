const books = [
  {
    id: 0,
    title: 'Harry Potter and the Deathly Hollows',
    author: 'J.K. Rowling',
    published: '2007',
    pages: 759
  },
  {
    id: 1,
    title: 'The Name of the Wind',
    author: 'Patrick Rothfuss',
    published: '2007',
    pages: 662
  },
  {
    id: 2,
    title: "The Wise Man's Fear",
    author: 'Patrick Rothfuss',
    published: '2011',
    pages: 994
  },
  {
    id: 3,
    title: 'The Way of Kings',
    author: 'Brandon Sanderson',
    published: '2010',
    pages: 1007
  },
  {
    id: 4,
    title: 'A Storm of Swords',
    author: 'George R.R. Martin',
    published: '2003',
    pages: 1177
  },
  {
    id: 5,
    title: 'Clockwork Princess',
    author: 'Cassandra Clare',
    published: '2013',
    pages: 567
  },
  {
    id: 6,
    title: 'Words of Radiance',
    author: 'Brandon Sanderson',
    published: '2014',
    pages: 1087
  },
  {
    id: 7,
    title: 'Collected Fictions',
    author: 'Jorge Luis Borges',
    published: '1999',
    pages: 565
  },
  {
    id: 8,
    title: 'Heir of Fire',
    author: 'Sarah J. Maas',
    published: '2014',
    pages: 565
  },
  {
    id: 9,
    title: 'The House of Hades',
    author: 'Rick Riordan',
    published: '2013',
    pages: 597
  }
];

export function fetchAllBooks() {
  return new Promise((resolve, reject) => {
    resolve(books);
  });
}

export function fetchBook(id) {
  return new Promise((resolve, reject) => {
    const book = books.find(book => book.id === id);
    if (book) {
      resolve(book);
    } else {
      reject(`Could not find the requested book: ${id}`);
    }
  });
}
