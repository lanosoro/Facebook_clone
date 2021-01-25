<template>
  <v-app style="background-color:#f0f2f5;">
    <v-container fill-height style="background-color:#f0f2f5; width:100vw; height:1100px; z-index:10100;" class="pa-0 ma-0">
    <v-app-bar
      app
      color="white"
      flat
      elevation="1"
    > 

      <v-avatar style="position:absolute; margin-right:150px;"
        :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
        size="32"
      >
      <v-img
      
      :width="width"
      src="https://mpng.subpng.com/20180622/uz/kisspng-facebook-inc-social-media-computer-icons-social-share-facebook-5b2d58d7da0246.193322341529698519893.jpg"
    ></v-img>
      </v-avatar> 
      <v-responsive max-width="260" max-height="60" class="ml-12 " > 
          <v-text-field
            
            dense
            style="color:black;"
            flat
            hide-details
            rounded
            append-icon="mdi-magnify left"
            background-color="#f0f2f5"
            solo
           
            color="#000"
            placeholder="Search Facebook"
          > </v-text-field>
          
        </v-responsive>

      
       
       <div class="menu-item"><a href=""></a></div>
       <div class="menu-item"><a href=""></a></div>
      
           <v-spacer></v-spacer>
       <v-spacer></v-spacer>
       <v-spacer></v-spacer>
       <v-spacer></v-spacer>
       <v-spacer></v-spacer>
      <v-icon color="grey " size="30" class="ml-2">
        mdi-home-outline
      </v-icon>
      <v-icon color="grey lighten-1" size="30" class="ml-4">
       mdi-account-multiple-outline
      </v-icon>
      <v-icon color="grey lighten-1" size="30" class="ml-6">
        mdi-television
      </v-icon>
      
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
     <v-spacer></v-spacer>
        
       
          

        
        
     <div class="menu-button"><a rounded pill color="grey lighten-1 shrink" 
     style="color:black; 
            background:#f0f2f5; 
            padding:8px; 
            border-radius:20px; 
            text-decoration:none;">Find Friends</a></div>
     
       <v-avatar
        class="hidden-sm-and-down float-right ml-4"
        color="#f0f2f5"
        size="32"
      >
      <v-icon color="black">
        mdi-plus
      </v-icon>
      </v-avatar>
       <v-avatar
        class="hidden-sm-and-down float-right ml-4"
        color="#f0f2f5"
        size="32"
      >
      <v-icon color="black">
        mdi-facebook-messenger
      </v-icon>
      </v-avatar>
       <v-avatar
        class="hidden-sm-and-down float-right ml-4"
        color="#f0f2f5"
        size="32"
      >
      <v-icon color="black">
        mdi-bell
      </v-icon>
      
      </v-avatar>
      <div class="dropdown" ><a href="#" class="">
         <v-avatar
        class="hidden-sm-and-down float-right ml-4"
        color="grey lighten-1 shrink"
        size="32"
      >
      <img src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" :width="size" alt="">
      
      </v-avatar>

         </a> 
          <div class="dropdown-list">
        <div class="dropdown-list__item"><a  @click.prevent="logOut">logOut</a></div>
      
      </div>
       
         </div>
    
    </v-app-bar>
    <div class="topcontainer pa-0 ma-0 elevation-2"  style="top:0px">
      
        <v-row>
          <v-col cols="12" sm="8">
              <v-sheet class="mt-0"
              min-height="350"
              color="grey"
              style=" left:25%; 
                      position:relative; 
                      background:linear-gradient(white, grey); 
                      border-radius:0 0 10px 10px;"
              top="0">
              <div class="dpupload"><a href="#" style="right:42%; z-index:1;  bottom:0px; margin-bottom:20px; position:absolute;">
                   <v-avatar
        class="hidden-sm-and-down float-right ml-4"
        color="#f0f2f5"
        size="38  "
      >
      <v-icon color="black">
        mdi-camera
     
       <a><input type="file" @change="previewImage" accept="image/*" ></a> </v-icon>
      </v-avatar>
                </a></div>
              <div class="concomponent" bottom="0"><a rounded-pill  
                    style="background:#f0f2f5; 
                           right:0px; 
                           border-radius:8px; 
                           margin-bottom:20px; 
                           margin-right:20px; 
                           padding:5px; bottom:0; 
                           position:absolute; 
                           text-decoration:none; 
                           color:black; 
                           font-weight:bold; 
                           padding-left:5px;
              ; absolute">
                <v-icon color="black"> 
                  mdi-camera 
                </v-icon>
                Add cover Photo
                </a></div>
              
                        
              

        </v-sheet>
     
        <v-avatar
              class="mt-n15 ml-6"
              size="158"
              color="white"
              style="border:5px solid #000; bottom:175px; z-index:-0; position:absolute; left:42%; "
            >
                    <v-img
      
      :width="width"
      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
    ></v-img>
    
    
              
            </v-avatar>
            
              <v-text v-model="user.name_surname"  style=" bottom:130px; position:absolute; left:44.5%; color:black; " >
                <h1>{{user.name_surname}}</h1>
                
              </v-text>
            
              <v-card-text v-model="user.name_surname"  style=" bottom:85px; position:absolute; left:47.3%; background:transparent; " >
                <a href=""><h4>Add Bio</h4></a>
                
              </v-card-text>
              <div class="midnav2">lie</div>
              <div class="midnav" style="">
                <div class="navcon"><a href="#">Posts</a></div>
                <div class="navcon"><a href="#">About</a></div>
                <div class="navcon"><a href="#">Friends</a></div>
                <div class="navcon"><a href="#">Photos</a></div>
                <div class="navcon" style="opacity: 1; visibility: visible;"><a href="#">more</a>
                    <div class="dropdown-list">
        <div class="dropdown-list__item"><a style="text-decoration" @click.prevent="logOut">logOut</a></div>
      
      </div>
                </div>
                <div class="navbtn" style="padding :3.5px; border-radius:5px; background:#f0f2f5; bottom:5px; right:120px; position:absolute; display:flex; text-decoration:none;">
                  
                  <a href="#" style="color:black; text-decoration:none;">
                    <v-icon color="black">
                    mdi-pencil
                  </v-icon>
                  Edit Profile</a>
                  
                  </div>
                  <div class="navbtn" style="padding :3.5px; border-radius:5px; background:#f0f2f5; bottom:5px; right:80px; position:absolute; display:flex; text-decoration:none;">
                  
                  <a href="#" style="color:black; text-decoration:none;">
                    <v-icon color="black">
                    mdi-eye
                  </v-icon>
                  </a></div>
                  <div class="navbtn" style="padding :3.5px; border-radius:5px; background:#f0f2f5; bottom:5px; right:40px; position:absolute; display:flex; text-decoration:none;">
                  
                  <a href="#" style="color:black; text-decoration:none;">
                    <v-icon color="black">
                    mdi-magnify
                  </v-icon>
                  </a></div>
                  <div class="navbtn" style="padding :3.5px; border-radius:5px; background:#f0f2f5; bottom:5px; right:0px; position:absolute; display:flex; text-decoration:none;">
                  
                  <a href="#" style="color:black; text-decoration:none;">
                    <v-icon color="black">
                    mdi-dots-horizontal
                  </v-icon>
                  </a></div>
        </div>
              

              
              
          </v-col>
        </v-row>
    </div>
     <v-main style="top:160px; position:relative;" >
      <v-container  fluid>
        <!-- main body post area-->
       <v-row>
          <v-col
            cols="12"
            sm="2"
          >
           <v-card
              style="left:165.5%; top:10px; height:100px; color:black;"
              min-height="180"
              min-width="350"
              rounded="lg"
              class="mr-16"
              color="white"
              fluid
            >
                <div class="intro" style="display:grid;" row >
                  <span style="
                  position:absolute;
                  color:black;
                  font-size:20px;
                  top:0;
                  margin-top:10px;
                  left:0px;
                  margin-left:13px;
                  font-weight:600;">Intro</span>
                  <div class="navbtn" style="padding :3.5px; 
                                             border-radius:5px; 
                                             width:20.5vw; 
                                             background:#f0f2f5; 
                                             top:0; 
                                             margin-top:50px;
                                             margin-left:20px;
                                             justify-content:center;
                                             align-items:center;
                                             font-weight:800
                                             position:absolute; 
                                             display:flex; text-decoration:none;">
                  
                  <a href="#" style="color:black; text-decoration:none; ">
                    
                  Edit Profile</a>
                  
                  </div>
                  <div class="navbtn" style="padding :3.5px; 
                                             border-radius:5px; 
                                             width:20.5vw; 
                                             
                                             background:#f0f2f5; 
                                             top:0; 
                                             margin-top:40px;
                                             margin-left:20px;
                                             justify-content:center;
                                             align-items:center;
                                             font-weight:800
                                             position:absolute; 
                                             display:flex; text-decoration:none;">
                  
                  <a href="#" style="color:black; text-decoration:none; ">
                    
                  Edit Featured</a>
                  
                  </div>
            
            
           
           
            <a
            
           
            style="color:black; margin-top:10px; margin-left:8px; width:22.5vw;  "
           
            
          >  </a>
                </div>
                
            </v-card>
                 <v-card
              style="left:165.5%; top:20px; height:100px; color:black;"
              min-height="180"
              min-width="350"
              rounded="lg"
              class="mr-16"
              color="white"
              fluid
            >
              <span style="
                  position:absolute;
                  color:black;
                  font-size:20px;
                  top:0;
                  margin-top:10px;
                  left:0px;
                  margin-left:13px;
                  font-weight:600;">Photos</span>
                
            </v-card>
          </v-col>

          <v-col
            cols="12"
            sm="8"
            style="top:0;"
          >
          <v-layout class="post-content">
           
             <v-card
              style="left:65%; top:10px; display:flex;"
              min-height="80"
              min-width="420"
              rounded="lg"
              color="white"
              fluid
            >
             <v-layout row>
                <v-avatar
              class=""
              size="32"
              color="white"
              style="border-radius:50%; margin-left:15px; margin-top:10px;"
            >
                    <v-img
      
      :width="width"
      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
    ></v-img>
    
              
            </v-avatar>
            <span>
              <v-text-field
            
           
            style="color:black; margin-top:10px; margin-left:8px; width:22.5vw;  "
            flat
            
            rounded
            
            background-color="#f0f2f5"
           
            
           
            placeholder="What's on your mind?"
            
          > <v-button type=submit @click="submitComment"> post</v-button> </v-text-field>
            </span>
             </v-layout>
             <div class="postnav" style=" padding:10px; position:absolute; bottom:0px; width:20vw: background:black; left:50%; ">
               <div class="postnavicon"><a style="position:absolute; left:0px; text-decoration:none;" href="">
                 <v-icon color="pink">
                 mdi-video
               </v-icon>
               </a></div>
               <div class="postnavicon" style="position:absolute; right:0;"><a style="position:absolute; left:50%;" href="">
                    <v-icon color="blue">
                 mdi-flag
               </v-icon>
                 </a></div>
               <div class="postnavicon"><a href="">
                 <v-icon color="green">
                 mdi-image-field
               </v-icon></a></div>
            
             </div>
            </v-card>
          </v-layout>
            
          </v-col>

          <v-col
            cols="12"
            sm="2"
          >
           
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    
  
  </v-container>
  </v-app>

  
</template>

<script>
// import{commentRef} from 'firebase/app'
// import {commentRef} from 'firebase'
import 'firebase/storage'
import firebase from 'firebase'
import 'firebase/auth'


  export default {
    
  
    name:'dashoard',
    components:{
      
       
    },
    props:['title','item'],
    data: () => ({
      isOpen: true,
      comment:'',
      avatar:null,
     link: [
          {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap'
          }
        ],
     
      links: [
        'Home',
        'Photos',
        'About',
        'Instagram',
        'More'
      ],
      Account: [
        {
          title: 'Web',
          link: '#'
        },
        {
          title: 'Design',
          link:'#'
        },
        {
          title: 'Videos',
          link: '#'
        }
      ],
        user:{
          name_surname:"ian osoro"
        }
      
    }),
    created(){
      firebase.auth().onAuthStateChanged.then((user)=>
      {
         if(user){
           this.user=user;
         }
         else{
           this.user=null;
         }
      })
    },
    methods: {
      // submitComment:function(){
      //   commentRef.push(this.comment)
      //   this.comment=null

      // },
      GetImage(e){
      let image = e.target.files[0]
      let reader = new FileReader();
      reader.readAsDataURL(image)
      reader.onload = e =>{
        this.avatar = e.target.result
      }
    },
    // onUpload(){
    //   this.avatar=null;
    //   const storageRef=firebase.storage().ref(`${this.image.name}`).put(this.image);
    //   // storageRef.on(`state_changed`,snapshot=>{
    //   //   this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
    //   // }, error=>{console.log(error.message)},
    //   // ()=>{this.uploadValue=100;
    //     storageRef.snapshot.ref.getDownloadURL().then((url)=>{
    //       this.picture =url;
    //     });
    //   }
      
    // },
  
    logOut() {
      firebase.auth().signOut().then(() => {
        firebase.auth().onAuthStateChanged(() => {
          this.$router.push('/')
        })
     })
    }
  }
    
  }
</script>
<style scoped>
*{
  margin: 0;
  padding: 0%;
  box-sizing: border-box;
 
}
.topcontainer

{
  position: absolute;
  width: 100%;
  height: 560px;
  background:white;
  margin-left: 0;
  margin-right: 0;
  padding-top: 0;
  margin-top: 0;
  display: hidden;
}
.innercontainer{
  display: block;
  width:50%;
  height: 300;
  top:0;
  background: grey;
  z-index: 10000;
}
a{
  text-decoration: none;

}
a:hover{
  text-decoration: underline;
}
.midnav2{
  background:#dadada;
  width: 59.4vw;
  bottom: 0px;
  margin-bottom: 24px;
  padding: 3.5px;
  position: absolute;
  left: 20.5%;
  justify-content: left;
  align-items: left;
  display: flex;}
.midnav{
  background:rgb(255, 255, 255);
  width: 59.4vw;
  bottom: -0;
  padding: 3.5px;
  position: absolute;
  left: 20.5%;
  justify-content: left;
  align-items: left;
  display: flex;
}
.navcon{
  color: gray;
  padding: 10px 20px;
  position: relative;
  text-align: left;
  display: flex;
  border-bottom: 3px solid transparent;
  display: flex;
  transition:0.4;

}
.navcon >a{
  color: inherit;
  text-decoration: none;
}
 .navcon:hover{
  background-color:#f0f2f5 ;
  border-radius: 5px;
  color:blue;
}
.navcon{
  color: gray;
  padding: 10px 20px;
  position: relative;
  text-align: left;
  display: flex;
  border-bottom: 3px solid transparent;
  display: flex;
  transition:0.4;

}
.de >a{
  color: inherit;
  text-decoration: none;
}
 .navcon:hover{
  background-color:#f0f2f5 ;
  border-radius: 5px;
  color:blue;
}
nav .menu-item .sub-menu {
  position: absolute;
  background-color: #222;
  top: calc(100% + 18px);
  left: 50%;
  transform: translateX(-50%);
  width: max-content;
  border-radius: 0px 0px 16px 16px;
}
.fade-enter-active,
.fade-leave-active {
  transition: all .5s ease-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
nav .menu-item svg {
  width: 10px;
  margin-left: 10px;
}
nav .menu-item svg {
  width: 10px;
  margin-left: 10px;
}
nav .menu-item .sub-menu {
  position: absolute;
  background-color: #222;
  top: calc(100% + 18px);
  left: 50%;
  transform: translateX(-50%);
  width: max-content;
  border-radius: 0px 0px 16px 16px;
}
.fade-enter-active,
.fade-leave-active {
  transition: all .5s ease-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.dropdown-list {
  border-radius: 4px;
  background-color: white;
  position: absolute;
  top: 110%;
  left: 1350px;
  right: 0;
  z-index: 99;
  box-shadow: 3px 3px rgb(0,0,0,0.4);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s linear, visibility 0.2s linear; 
}
.dropdown-list__item {
  padding:15px;
  font-size: 18;
  justify-content: center;
  align-items: center;
   cursor: pointer;
}
  .dropdown:hover .dropdown-list {
  opacity: 1;
  visibility: visible;}
</style>