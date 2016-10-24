import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import SignUp from './components/SignUp';
import EventList from './components/EventList';

Vue.use(VueRouter);

const routes = [
  {
    path: '/sign-up', alias: '/', component: SignUp,
  },
  {
    path: '/list', component: EventList,
  },
];

const router = new VueRouter({
  routes,
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
