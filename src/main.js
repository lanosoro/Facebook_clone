
import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import vueRouter from 'vue-router';
import loginweb from './components/Appweb.vue';
import dashboard from './components/pages/Dashboard.vue';
import axios from 'axios';
import firebase from 'firebase/app';

Vue.prototype.$axios = axios;


Vue.config.productionTip = false
Vue.use(vueRouter);

const routes = [
  { path: 'login', component: loginweb },
  { path: 'dashboard', component: dashboard },
];
const router = new vueRouter({
  routes
})




new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')


const firebaseConfig = {
  apiKey: "AIzaSyDVnxbcFaPlWVBZDXJso4Eztc6-H-qufaU",
  authDomain: "facebook-clone-965f5.firebaseapp.com",
  databaseURL: "https://facebook-clone-965f5.firebaseio.com",
  projectId: "facebook-clone-965f5",
  storageBucket: "facebook-clone-965f5.appspot.com",
  messagingSenderId: "717961643647",
  appId: "1:717961643647:web:2dc8cbfe97bf5dfaaea14a",
  measurementId: "G-ZMN4N32D8G"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

