import Vue from 'vue'
import VueRouter from 'vue-router';

import App from './App'
import Machine from 'vues/machine';
import Setting from 'vues/setting';

Vue.use(VueRouter);

let router = new VueRouter();
router.map({
  '/': {
    name: 'app',
    component: Machine
  },
  '/setting': {
    name: 'setting',
    component: Setting
  }
});

router.start(App, 'body');
