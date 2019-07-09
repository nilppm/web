import Vue from 'vue';
import axios from 'axios';
import pkg from './package.json';
const store = module.exports = Vue.observable({
  client: {
    version: pkg.version,
  },
  searcher: {
    q: null,
    t: '1'
  }
});

axios.get('/metadata').then(data => Vue.set(store, 'server', data.data));