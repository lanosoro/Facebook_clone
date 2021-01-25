<template>
<v-app>

 <v-container v-if="!['/dashboard'].includes($route.path)" class="hidden-sm-and-down fill-height " fluid ma-0 pa-0 style="background-color:#f0f2f5;" >     
    
    <div id="app">
  
  <transition name="fade" appear>
    <div class="modal-overlay"   v-if="showModal">
       <form @submit.prevent="pressed"  >
     <div class="modal">
      <div class="modal-signup">
      
        <div class="modal-close" @click="showModal=false"> 
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
        
        <input type="text" name="name" placeholder="First Name" v-model="name">
        <input type="text" name="name" placeholder="Surname"> 
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
                     
                     <input type="radio" id="Female" value="female" name="gender">
                     
                 </div>
                 
                 <div class="modal-gender-name">
                     
                     <label for="">Male</label>
                     
                     <input type="radio" id="male" value="male" name="gender"> 
                     
                 </div>
                 
                 <div class="modal-gender-name">
                     
                     <label for="">Custom</label>
                     
                     <input type="radio" id="custom" value="custom" name="gender">
                     
                 </div>
                  
              </div>
               <div class="modal-signup-terms">
                  
                  <p> By clicking Sign Up, you agree to our Terms, Data Policy and Cookie Policy. You may receive SMS notifications from us and can opt out at any time.  
                    </p>
                    
              </div>
              
              <div class="modal-signup-button" id="appp">
                  
                  <button type="submit" @submit.prevent="pressed">Sign Up</button>
                  
              </div>
              
      </div> 
      
    </div>
  
   </form>
    </div>
  </transition>
  <transition name="fade" appear>
   
  </transition>
  
</div>
    <v-row style="padding-bottom:11px 
                  position:absolute; 
                  background-color:#f0f2f5;
                  
                  margin-bottom: 30px;
                  clear: both;">
      <v-col cols="12" md="4">
        <div class="facb" style="
                          position: absolute;
                          top: 20%; 
                          left: 20%;
                          margin-top: -50px;
                          margin-left: -50px;">
            <h1 style="color:#1877f2; font-size:54px;">facebook</h1>
             <p style="display:inline; font-size:27px;"> Facebook helps you connect and share <br> with the people in your life.</p>
        </div>

         <v-card elevation="8"
                 width="396px" 
                 height="390.35px"  
                 class="mx-auto mt-10% mb" 
                 style="position: absolute;
                        top: 20%;
                        right: 20%;
                        margin-top: -50px;
                        margin-left: -50px;
                        border-radius:10px;" >
      <v-card-text>
        <v-form @submit.prevent="pressed">
          <v-text-field  single-line
            outlined label="Email adress or Phone number" v-model="email" />
          <v-text-field single-line
            outlined label="Password" type="password" v-model="password" />
          <v-btn 

              primary   
              large 
              block 
              type="submit" 
              style="background-color:#1877f2; 
                     color:#fff; 
                     text-transform: 
                     capitalize; 
                     font-size: 20px;
                     line-height: 48px;" >
           log in 
          </v-btn>
          <v-spacer ></v-spacer>
          <v-spacer></v-spacer>
          <span class="psw" 
                style="text-align: center;
                       display: block;
                       margin: 0 auto;
                        padding:4%; 
                        text-decoration:none;">
    <a href="#">forgotten password?</a></span>
    <v-divider></v-divider>
        
          <v-btn  primary large @click="showModal = true"  style="background-color:#31b816; 
              color:#fff;
              margin: 0;
              position: absolute;
              top: 85%;
              left: 50%;
              transform: translate(-50%, -50%); 
              text-transform: capitalize;
              ">
            Create New Acccount
          </v-btn>

        </v-form>
        <span  style=" 
              min-width:360px;
              display:inline;
              color:#000;
              margin: 0;
              position: absolute;
              top: 110%;
              left: 59%;
              transform: translate(-50%, -50%); 
              
              ">
              <a style="color:black; 
                        font-family:SFProText-Semibold, 
                        Helvetica, Arial, 
                        sans-serif;" color="black"><strong>Create a page</strong></a> for a celebrity, band or business.

        </span>
      </v-card-text>
      
    </v-card>
    

      </v-col>
      </v-row>    
     <v-row style="text-align:left;">  
    <v-col>
        <v-footer style="bottom:0; 
                         position:absolute;
                         background-color:white; 
                         width:100%; 
                         height:300px;" 
                  class="justify-center">
      
        <v-card flat tile class="white lighten-1 #ccd0d5--text text-center pt-0" >
          <!-- <v-card-text>
            <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>
        -->
      <v-card-text class="#ccd0d5--text pt-0 " style="width:100%; ; " >
        <ul id="horizontalist" 
            class="justify-start ma-0" 
            style="list-style-type:none;
                   text-align:center;
                   font-size:12px; ">
        <li><a href="">English</a>  </li> <li><a href="">kiswahili</a> </li> <li><a href=""></a> </li> <li><a href="#">Español
                      </a> </li> <li><a href="">Português (Brasil)
                </a> </li><li><a href="">Italiano
        </a>  </li> <li><a href="">Deutsch
        </a> </li> <li><a href=""></a>中文(简体)
              </li> <li><a href=""> Türkçe
        </a> </li> <li><a href=""></a>हिन्दी

              </li> <li><a href="">العربية
        </a> </li> <li><a href=""></a>中文(简体)
              </li>
         <a href="">
           <v-icon depressed
                   elevation="2"
                   
                   outlined
                   small
                    tile 
                    style="background-color:#f0f2f5; 
                           border-style: solid;  
                           border-width: 1px; 
                           border-radius:3px; 
                           padding:0px 10px;  ">
                   mdi-plus 
                               </v-icon></a>
         
         
          
         
        </ul>
      </v-card-text>
      <v-divider></v-divider>

       <p style="text-align:center;">  <ul class="b">
           <li><a href="">Signup</a></li>
           <li><a href="">Login</a></li>
           <li><a href="">Messenger</a></li>
           <li><a href="">Facebooklight</a></li>
           <li><a href="">watch</a></li>
           <li><a href="">people</a></li>
           <li><a href="">pages</a></li>
           <li><a href="">page category</a></li>
           <li><a href="">places</a></li>
           <li><a href="">games</a></li>
           <li><a href="">locations</a></li>
           <li><a href="">facebookPay</a></li>
           <li><a href="">marketplace</a></li>
           <li><a href="">groups</a></li>
           <li><a href="">Signup</a></li>
           <li><a href="">Login</a></li><br>
           <li><a href="">Messenger</a></li>
           <li><a href="">Facebooklight</a></li>
           <li><a href="">watch</a></li>
           <li><a href="">people</a></li>
           <li><a href="">pages</a></li>
           <li><a href="">page category</a></li>
           <li><a href="">places</a></li>
           <li><a href="">games</a></li>
           <li><a href="">locations</a></li>
           <li><a href="">facebookPay</a></li>
           <li><a href="">marketplace</a></li>
           <li><a href="">groups</a></li>

           </ul>   </p>
  
      
      <div class="text-xs-left" >
         <v-card-text class="#737373--text pl-0" style="padding: 30px 0px; font-size:12px; left:0; color:#737373;" >
       Facebook © {{ new Date().getFullYear() }}
      </v-card-text>
      </div>
     
    </v-card>
  
  
  
  </v-footer>
       </v-col>
     </v-row>
    <logintab class="hidden-md-only"/>

   

  </v-container>
  </v-app>

</template>

<script>
/* import logintab from './components/Apptab'; */
// import {createUser} from 'firebase'
// import {reactive} from 'vue'
import firebase from 'firebase'
require('firebase/auth')
export default {

    name: 'loginweb',
    components:{
       
      /* logintab */
    },


    data (){
      return{
        email:'',
        password:'',
        showModal:true,
        signin:true,
        name:''
      }
    },
    methods:{
      pressed(){
        firebase.auth().createUserWithEmailAndPassword(this.email,this.password).then(()=>{
          
          this.$router.replace({path:"/dashboard/:id"})
        })
      }
    },
   
  }

</script>


<style  scoped>
 

li{
  float: left;
  line-height: 30px;
  padding: 0px 10px;
  word-wrap: normal;
  list-style-type:none;

}
li a{
 
  color: #737373;
  text-decoration: none; /* no underline */
  margin-right: 0%;
 
}
ul{
  list-style-type:none;
  font-size: 12px;
  
}
ul.b{
  line-height: 200%;
  text-align: justify;
}
a{
  text-decoration: none;
}
a:hover{
  text-decoration: underline;
}
#app{
  display:flex;
  position:relative;
  justify-content:center;
  align-items:center;
  min-width:100vw;
  min-height:100vw;
  overflow-x:hidden;
}
button{
  appearance:none;
  border:none;
  background:none;
  cursor:pointer;
  outline:none;
  
  display:inline-block;
    padding:15px 25px;
  border-radius:8px;
  color:white;
  font-size:18px;
  font-weight:700;
  
  
  transition:0.3s ease-out;}
      button:hover{
      box-shadow:6px 6px rgba(0,0,0,0.7)
      }
  


.modal-overlay{
  position:absolute;
  top:0;
  right:0;
  left:0;
  bottom:0;
  background-color:rgba(255, 255, 255, 0.823);
  z-index:98;
}
.modal{
  width: 100%;
 height: 900px;
  
  top: -120px;
  left: 0;
  bottom: 0;
  right: 0;
  background:transparent;
  z-index: 10000;
  
  
  position:fixed;
  margin-top:0px;
  padding:0;
  overflow:hidden;
 
  border-radius:2px;
  border:solid 2px #FFF;
  transition: all .3s ease-out;
  cursor:pointer;
}


.modal-signup{
  width: 30%;
  margin: auto;
  padding: 20px;
  background-color: rgb(255, 255, 255);
  border-radius: 8px;
  box-shadow: 3px 3px rgba(79, 75, 75, 0.282) ;
  margin-top:150px;
  

}
.modal-close{
  position: sticky;
  top: 15%;
  right:15%;
  margin-left: 400px;
  cursor: pointer;
  font-size: 24px;
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