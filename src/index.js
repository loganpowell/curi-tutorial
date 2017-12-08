import curi from '@curi/core';
import Browser from '@hickory/browser';

import routes from './routes';

const history = Browser();
const router = curi(history, routes);
