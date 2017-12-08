import React from 'react';
import ReactDOM from 'react-dom';
import curi from '@curi/core';
import Browser from '@hickory/browser';
import { CuriBase } from '@curi/react';

import routes from './routes';
import render from './render';

const history = Browser();
const router = curi(history, routes);

let root = document.getElementById('root');
router.respond(response => {
  ReactDOM.render((
    <CuriBase
      response={response}
      router={router}
      render={render}
    />
  ), root);
});
