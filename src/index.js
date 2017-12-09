import Vue from 'vue';
import curi from '@curi/core';
import Browser from '@hickory/browser';
import { CuriPlugin } from '@curi/vue';

import routes from './routes';
import app from './components/App';

const history = Browser();
const router = curi(history, routes);

Vue.use(CuriPlugin, { router });

router.respond(response => {
  const vm = new Vue({
    el: '#root',
    template: '<app />',
    components: { app }
  });
}, { once: true });
