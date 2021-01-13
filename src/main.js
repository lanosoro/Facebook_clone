
import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import vueRouter from 'vue-router';
import loginweb from './components/Appweb.vue';
import dashboard from './components/pages/Dashboard.vue';
import signup from './components/signup'
import axios from 'axios';
import firebase from 'firebase/app';

Vue.prototype.$axios = axios;


Vue.config.productionTip = false
Vue.use(vueRouter);

const routes = [
  { path: '/', component: loginweb },
  { path: '/dashboard', component: dashboard },
  { path: '/signup', component: signup }
];
const router = new vueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})




new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')


const firebaseConfig = {
  apiKey: "AIzaSyDScbkc8AvZPH4Rwl6I05tvqKHIcHZpsuY",
  authDomain: "facebook-15fe4.firebaseapp.com",
  projectId: "facebook-15fe4",
  storageBucket: "facebook-15fe4.appspot.com",
  messagingSenderId: "1095577396754",
  appId: "1:1095577396754:web:0bb0343b941a88cebbdacb",
  measurementId: "G-E1M13Y3JTE"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


