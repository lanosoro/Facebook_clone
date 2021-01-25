
import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import vueRouter from 'vue-router';
import loginweb from './components/Appweb.vue';
import dashboard from './components/pages/Dashboard.vue';
import userAccount from './components/pages/userAccount.vue';
import signup from './components/signup';
import axios from 'axios';
import './firebase'
import  dropdown  from './components/pages/dropdown';
import firebase from 'firebase/app';

// import { ref, onUnmounted } from 'vue'



Vue.prototype.$axios = axios;


Vue.config.productionTip = false
Vue.use(vueRouter);

const routes = [
  { path: '/', component: loginweb },
  { path: '/dashboard/:id', component: dashboard },
  { path: '/signup', component: signup },
  { path: '/Account', component: userAccount },
  {path:'/dropdown', component:dropdown}
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
  apiKey: "AIzaSyCODZ01JfJD5qAvU5lSB-Zjil37VlkKgyU",
  authDomain: "projectfb-650dc.firebaseapp.com",
  databaseURL: "https://projectfb-650dc.firebaseio.com",
  projectId: "projectfb-650dc",
  storageBucket: "projectfb-650dc.appspot.com",
  messagingSenderId: "283857767521",
  appId: "1:283857767521:web:5feeb3e798cc595f572e20",
  measurementId: "G-RP8T5XECZ2"

};
// Initializ
firebase.initializeApp(firebaseConfig)
// const db = firebase.firestore()

// const usersCollection = db.collection('users');



// export const createUser = user => {
//   return usersCollection.add(user)
// }

// export const getUser = async id => {
//   const user = await usersCollection.doc(id).get()
//   return user.exists ? user.data() : null
// }

// export const updateUser = (id, user) => {
//   return usersCollection.doc(id).update(user)
// }

// export const deleteUser = id => {
//   return usersCollection.doc(id).delete()
// }

// export const useLoadUsers = () => {
//   const users = ref([])
//   const close = usersCollection.onSnapshot(snapshot => {
//     users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
//   })
//   onUnmounted(close)
//   return users
// }

// export default function () {

// }
