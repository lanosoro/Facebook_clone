import axios from "axios";
import * as firebase from "firebase/app"
import "firebase/firebase-auth"
new Vue({
    el: '#appp',
    data: {
        email: '',
        firstname:''
    },
    methods: {
        pressed() {
            axios.post('https://facebook-clone-965f5.firebaseio.com', { email: this.email })
                .then(res => {
                    // do something with res
                })
                .catch(err => {// catch error});
                }
   }
    })