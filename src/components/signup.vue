<template>
   <form  @submit.prevent="pressed">
     <div class="modal">
      <div class="modal-signup">
      
        <div class="modal-close"> 
        X
        </div>
      <div class="modal-signup-heading">
      
        <p class="modal-signup-name">
          Signup
        </p>
        <p class="modal-signup-child-name">
          It's quick and easy
        </p>
      </div>
      <v-divider></v-divider>
      <div class="modal-name">
        <input type="text" name="" placeholder="First Name">
        <input type="text" name="" placeholder="Surname"> 
      </div>
      <div class="email">
        <input type="email" placeholder="Email adress or name" v-model="email">
      </div>
      <div class="pass">
        <input type="password" placeholder="password"  v-model="password">
      </div>
     
 <div class="modal-gender">
                 
                 <label for="">Gender</label>
                 
                 <div class="modal-gender-alert">
                     
                     <a >&#63;</a>
                     
                 </div>
                  
              </div>
              
              <div class="modal-gender-choice">
                 
                 <div class="modal-gender-name">
                     
                     <label for="">Female</label>
                     
                     <input type="radio">
                     
                 </div>
                 
                 <div class="modal-gender-name">
                     
                     <label for="">Male</label>
                     
                     <input type="radio">
                     
                 </div>
                 
                 <div class="modal-gender-name">
                     
                     <label for="">Custom</label>
                     
                     <input type="radio">
                     
                 </div>
                  
              </div>
               <div class="modal-signup-terms">
                  
                  <p> By clicking Sign Up, you agree to our Terms, Data Policy and Cookie Policy. You may receive SMS notifications from us and can opt out at any time.  
                    </p>
                    
              </div>
              
              <div class="modal-signup-button" id="appp">
                  
                  <button type="submit" >Sign Up</button>
                  
              </div>
              
      </div> 
      
    </div>
  
   </form>

  
</template>


<script>
import "firebase/firestore";
import "firebase/auth";
import {firebase} from '@firebase/app'
export default {
  data() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },
  methods: {
    pressed() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          console.log("firebase");
          this.$router.push("/Dashboard")
        })
        .catch(error => (this.error = error));
    }
  }
};
/* firebase.auth().signInWithEmailAndPassword(email, password).then(function () {
    var user = firebase.auth().currentUser;
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {

       this.$router.replace({path:"Dashboard"})
      }
 */
</script>

<style scoped>
.modal{
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(250, 250, 250, 0.8);

}
.modal-signup{
  width: 30%;
  margin: auto;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2) 0 8px 16px rgba(0, 0, 0, 0.2);
  margin-top:150px;

}
.modal-close{
  position: absolute;
  top: 20%;
  right: 36%;
  cursor: pointer;
  font-size: 20px;
}

.modal-signup-heading{
    
    width: 100%;
    margin-top: 5px;
    padding-bottom: 10px;
    border-bottom: 1px solid #ccc;
}
.modal-signup-heading .modal-signup-name{
    
    font-size: 30px;
    font-weight: bold;
}
.modal-signup-heading .modal-signup-child-name{
    
    font-size: 17px;
    margin-top: 5px;
}
.pass input[type=password]{
  width: 100%;
  padding: 8px;
  font-size: 17px;
  border: none;
  border:1px #ccc solid;
  border-radius: 5px;
  background:  #eee;
  margin-top: 20px;
}
 input[type=email]{
  width: 100%;
  padding: 8px;
  font-size: 17px;
  border: none;
  border:1px #ccc solid;
  border-radius: 5px;
  background:  #eee;
}
input[type=text]{
  width: 48%;
  padding: 8px;
  font-size: 17px;
  border: none;
  border:1px #ccc solid;
  border-radius: 5px;
  background: #eee;
}
.email{
  margin-top: 20px;
  width: 100%;

}
.pass{
  margin-top: 4px;
  width: 100%;

}
.modal-name{
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.modal-date-birth{
    
   width: 100%;
   margin-top: 10px;
   display: flex;
   align-items: center;
   float: left;
}
.modal-date-alert{
    
    width: 15px;
    height: 15px;
    display: inline-block;
    background-color: #aaa;
    font-size: 12px;
    border-radius: 50%;
    text-align: center;
    color: white;
    margin-left: 3px;
}
.modal-date-selection{
    
    width: 100%;
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
}
.select-choice{
    
    width: 33%;
    
}
.select-choice select{
 
    width: 96%;
    padding: 5px;
    border-radius: 5px;
    font-size: 17px;
    border: none;
    border: 1px solid #ccc;
    color: #080808;
}
.modal-gender{
    
   width: 100%;
   margin-top: 10px;
   display: inline-block;
   align-items: center; 
}
.modal-gender-alert{
    
    width: 15px;
    height: 15px;
    display: inline-block;
    background-color: #aaa;
    font-size: 12px;
    border-radius: 50%;
    text-align: center;
    color: white;
    margin-left: 3px;
}
.modal-gender-choice{
   
    width: 100%;
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
}
.modal-gender-name{
    
     width: 32%;
     border: 1px solid #ccc;
     padding: 5px;
     border-radius: 5px;
     font-size: 17px;
     display: flex;
     justify-content: space-between;
     align-items: center;
}
.modal-signup-terms{
    width: 100%;
    margin-top: 15px; 
    font-size: 12px;
}

.modal-signup-button{
    
    width: 100%;
    max-width: 200px;
    margin: auto;
    margin-top: 20px;
}
.modal-signup-button button{ 
    
    width: 100%;
    padding: 10px;
    background-color:#32cd32;
    color: white;
    font-size: 18px;
    border: none;
    border-radius: 5px;
    cursor: pointer;  
}
</style>
