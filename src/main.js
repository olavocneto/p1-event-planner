import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import SignUp from './components/SignUp';
import EventList from './components/EventList';
import EventAdd from './components/EventAdd';

Vue.use(VueRouter);

const routes = [
  {
    path: '/sign-up', alias: '/', name: 'signup', component: SignUp,
  },
  {
    path: '/event-list', name: 'eventlist', component: EventList,
  },
  {
    path: '/event-add', name: 'eventadd', component: EventAdd,
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
