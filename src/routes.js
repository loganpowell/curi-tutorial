const routes = [
  {
    name: 'Home',
    path: '',
    match: {
      response: ({ set }) => {
        set.body('Home');
      }
    }
  },
  {
    name: 'Contact',
    path: 'contact',
    match: {
      response: ({ set }) => {
        set.body('Contact');
      }
    }
  },
  {
    name: 'Checkout',
    path: 'checkout',
    match: {
      response: ({ set }) => {
        set.body('Checkout');
      }
    }
  },
  {
    name: 'Book List',
    path: 'books',
    match: {
      response: ({ set }) => {
        set.body('Book List');
      }
    },
    children: [
      {
        name: 'Book',
        path: ':id',
        match: {
          response: ({ set }) => {
            set.body('Book');
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
        set.body('Not Found');
      }
    }
  }
];

export default routes;