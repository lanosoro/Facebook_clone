<template>
  <v-app >
    <v-app-bar
      app
      color="white"
      flat
      elevation=""
    >

      <v-avatar style="position:absolute; margin-right:150px;"
        :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
        size="32"
      ></v-avatar>

      
       
      
      <v-avatar
        class="hidden-sm-and-down"
        size="32"
      >
      <v-img
      
      :width="width"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/F_icon.svg/267px-F_icon.svg.png"
    ></v-img>
      </v-avatar>
      <v-spacer></v-spacer>
       <v-spacer></v-spacer>
       <v-spacer></v-spacer>
       <v-spacer></v-spacer>
       <v-spacer></v-spacer>
      <v-icon color="grey lighten-1" size="30" class="ml-16">
        mdi-home-outline
      </v-icon>
      <v-icon  color="grey lighten-1" size="30" class="ml-16">
        mdi-flag-outline
      </v-icon>
      <v-icon color="grey lighten-1" size="30" class="ml-16">
        mdi-cards-variant
      </v-icon>
      <v-icon color="grey lighten-1" size="30" class="ml-16">
        mdi-television
      </v-icon>
       
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
     <v-spacer></v-spacer>
        <v-avatar
        class="hidden-sm-and-down  ml-42"
        color="grey lighten-1 shrink"
        size="32"
      >      
          <v-img
          :height="height"
      :width="width"
      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">

      </v-img>
         </v-avatar>
       
          <p class="mt-4 pa-3" style="color:black;" >{{user.name_surname}}</p>

        
        
     
       <v-avatar
        class="hidden-sm-and-down float-right ml-4"
        color="grey lighten-1 shrink"
        size="32"
      >
      <v-icon color="black">
        mdi-plus
      </v-icon>
      </v-avatar>
       <v-avatar
        class="hidden-sm-and-down float-right ml-4"
        color="grey lighten-1 shrink"
        size="32"
      >
      <v-icon color="black">
        mdi-facebook-messenger
      </v-icon>
      </v-avatar>
       <v-avatar
        class="hidden-sm-and-down float-right ml-4"
        color="grey lighten-1 shrink"
        size="32"
      >
      <v-icon color="black">
        mdi-bell
      </v-icon>
      
      </v-avatar>
       <v-avatar

        class="hidden-sm-and-down pa-4 ml-4"
        color="grey lighten-1 shrink"
        size="32"
      >
      <v-icon color="black">
        mdi-menu-down
      </v-icon>
      
      </v-avatar>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            sm="2"
          >
            
          </v-col>

          <v-col
            cols="12"
            sm="8"
          >
            <v-sheet
              min-height="45vh"
              rounded="sm"
              color="white"
            >
             <v-layout column color="black"> 
                <v-sheet
              
              min-height="37vh"
              color="#fff"
              flat
            >
              <v-img
      :aspect-ratio="16/7"
      :width="width"
      :src="avatar"
    ></v-img>
     <v-layout row>
        <v-avatar
              class="mt-n15 ml-6"
              size="148"
              color="white"
              style="border:5px solid #fff;"
            >
                    <v-img
      
      :width="width"
      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
    ></v-img>
              
            </v-avatar>
           <v-flex> <h4  style="color:black font-size:16;" class="pl-6 pt-0 mt-8 " >{{user.name_surname}}</h4>
           <v-icon class="pl-8  ml-14 mt-n12" color="blue lighten-2">
              mdi-check-circle
            </v-icon></v-flex>
            
     </v-layout>
            </v-sheet>
            <v-tabs 
       
        background-color="white accent-4"
        class="ml-n0 mt-4"
        color="#3b5998 lighten-2"
        style="color:blue;"
       
      >
      <v-layout row>
          <v-tab
          style="color:blue;"
           color="#3b5998 lighten-2"
          class="ml-"
          v-for="link in links"
          :key="link"
        >
          {{ link }}
          
        </v-tab>
        <button 
        type="submit" 
        class="btn btn-dark btn-lg btn-block"
        @click="logOut()">
            Log out
        </button>
        
      </v-layout>

      </v-tabs>
             </v-layout>
            </v-sheet>
          
          <v-row>
            <v-col cols="6"
          sm="5">
            <v-sheet
              class="mt-n0"
              min-height="400"
              color="white"
            >
          <v-layout row>
                <v-avatar
        class="hidden-sm-and-down"
        color="green lighten-1 shrink mt-3 ml-4"
        size="32"
      > <v-icon>
        mdi-account
        </v-icon></v-avatar>
      <h4 style="color:black;" class="mt-4 ml-6">info</h4>
          </v-layout>
          <v-layout column>
              <v-flex>
              <v-icon color="grey lighten-1" class="mt-8 ml-2">
                mdi-information
              </v-icon>
              <p style="color:black;" :width="width" class="ml-10 mt-n8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eum eaque tempora sint</p>
            </v-flex>
             <v-flex>
              <v-icon color="grey lighten-1" class="mt-0 ml-2">
                mdi-thumb-up
              </v-icon>
              <p style="color:black;" :width="width" class="ml-10 mt-n6">120,000 people liked</p>
            </v-flex>
             <v-flex>
              <v-icon color="grey lighten-1" class="mt-0 ml-2">
                mdi-checkbox-multiple-marked
              </v-icon>
              <p style="color:black;" :width="width" class="ml-10 mt-n6">1,320,000 people follow</p>
            </v-flex>
             <v-flex>
              <v-icon color="grey lighten-1" class="mt-0 ml-2">
                mdi-map-marker
              </v-icon>
              <p style="color:black;" :width="width" class="ml-10 mt-n6">330,000 people checkdin here</p>
            </v-flex>
            <v-flex>
              <v-icon color="grey lighten-1" class="mt-1 ml-2">
                mdi-link
              </v-icon>
              <a href="" class="mt-n4" style="text-decoration:none;">https://jondow.com</a>
            </v-flex>
             <v-flex>
              <v-icon color="grey lighten-1" class="mt-2 ml-2">
                mdi-facebook-messenger
              </v-icon>
              <p style="color:black;" :width="width" class="ml-10 mt-n6"><a>send message</a></p>
            </v-flex>

          </v-layout>
            </v-sheet>
             <v-sheet
              class="mt-3"
              min-height="250"
              color="white"
            >
          <v-layout row>
                <v-avatar
        class="hidden-sm-and-down"
        color="pink darken-1 shrink mt-3 ml-4"
        size="32"
      >
      <v-icon>
        mdi-image
      </v-icon>
      </v-avatar>
      <h4 class="mt-4 ml-6" style="color:black;">Photos</h4>
      
       <a href="" class="ml-16 pl-14 mt-4" style="font-weight:bold; text-decoration:none;">see all</a>
          </v-layout>
          <v-row class="ml-n1 mr-n12">
            <v-col cols="2" sm="4" class="mr-n7">
              <v-sheet
              class="ml-2 rounded-tl-lg"
              min-height="80"
              color="#3b5998">
i
              </v-sheet>
              <v-sheet
              class="ml-2 mt-1 rounded-bl-lg"
              min-height="80"
              color="#3b5998">
              <img :src="avatar" :width="width" :height="80" alt="">

              </v-sheet>
              
            </v-col>
            <v-col cols="2" sm="4">
              <v-sheet
              class="ml-2"
              min-height="80"
              color="#3b5998">

              </v-sheet>
              <v-sheet
              class="ml-2 mt-1"
              min-height="80"
              color="#3b5998">

              </v-sheet>
              
            </v-col>
            <v-col cols="2" sm="4" class="ml-n7" >
              <v-sheet
              class="ml-2 rounded-tr-lg"
              min-height="80"
              color="#3b5998">

              </v-sheet>
              <v-sheet
              class="ml-2 mt-1 rounded-br-lg"
              min-height="80"
              color="#3b5998">

              </v-sheet>
              
            </v-col>
          </v-row>
            </v-sheet>
               <v-sheet
              class="mt-3 "
              min-height="250"
              color="white"
            >
              <v-avatar
        class="hidden-sm-and-down"
        color="deep-purple darken-1 shrink mt-3 ml-3"
        size="32"
      >
      <v-icon>
        mdi-earth
        </v-icon>
      </v-avatar>
            </v-sheet>

             </v-col>
              <v-col cols="6"
          sm="7">
            <v-sheet
            
              min-height="100"
              color="white"
            >
           <v-layout>
                <v-avatar
          class="hidden-sm-and-down ml-4 mt-4"
          size="32"
          
        >
        <v-img
        src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
        :width="width"
        
      ></v-img>
      </v-avatar>
      
           </v-layout>
           <input @change="GetImage" type="file" name="image" id="">
              
            </v-sheet>
              <v-sheet
              class="mt-3"
              min-height="600"
              color="white"
            >
              <v-layout row>
                  <v-avatar
        class="hidden-sm-and-down ml-4 mt-4  "
        size="32"
        
      >
      <v-img
      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
      :width="width"
      
    ></v-img>
      </v-avatar>
      <h5  style="color:black" class="pl-4 pt-0 mt-6">Jon Dow</h5>
              </v-layout>
              <p style="color:black;" class="pa-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit.voluptatem odit illum ipsa quia repellendus eum cum, vero vel iste eligendi!</p>
            <v-sheet class="" min-height="300" color="#3b5998"> 
                
                <v-img
                :aspect-ratio="16/12"
                :width="width"
                :height="height"
                :src="avatar">

            </v-img>
            </v-sheet>
              <v-layout row class="ml-1 mt-2">
                <v-avatar size="26" class="hidden-sm-and-down ml-3" style="background:transparent;">
               
              </v-avatar>
              <v-avatar class="hidden-sm-and-down ml-n2" size="26">
               
              </v-avatar>
              <v-avatar class="hidden-sm-and-down ml-n2" size="28">
                <v-img
                :width="width"
                src="data:image/png;base64,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">

                

                </v-img>
              </v-avatar>
              <p class="ml-1 mt-1 " style="color:grey; font-size:14px;">34k</p>
             
              
              <p class="ml-16 pl-16 mt-1 " style="color:grey; font-size:14px;">1,234 comments 552 shares</p>
              <v-divider inset></v-divider>
             
              </v-layout>
               <v-layout row class="mt-2">
                <v-icon color="grey" class="ml-n4 pl-16">
                  mdi-thumb-up-outline
                </v-icon>
                <p style="color:grey;" class="mt-4 ml-2">Like</p>
                <v-icon color="grey" class="ml-0 pl-16">
                  mdi-comment-outline
                </v-icon>
                <p style="color:grey;" class="mt-4 ml-2">comment</p>
                 <v-icon color="grey" class="ml-0 pl-16">
                  mdi-share-outline
                </v-icon>
                <p style="color:grey;" class="mt-4 ml-2">share</p>
              </v-layout>
              <p style="color:grey;" class="ml-4">view comments</p>
              
              <v-layout row>
                 <v-avatar
        class="hidden-sm-and-down  ml-4 "
        color="grey lighten-1 shrink"
        size="32"
      >      
          <v-img
          :height="height"
      :width="width"
      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">

      </v-img>
         </v-avatar>
              </v-layout>
            </v-sheet>
          
            <v-sheet
              class="mt-3"
              min-height="250"
              color="white"
            >
            
            </v-sheet>
          
          
             </v-col>
          </v-row>
         <v-row>
         
          </v-row>
           <v-row>
             <v-col cols="6"
          sm="5">
         
          </v-col>
          
             
           </v-row>
          </v-col>
         
          <v-col
            cols="12"
            sm="2"
          >
            
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import firebase from 'firebase/app'
  export default {
    name:'dashoard',
    data: () => ({
      avatar:null,
      links: [
        'Home',
        'Photos',
        'About',
        'Instagram',
        'More'
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
      GetImage(e){
      let image = e.target.files[0]
      let reader = new FileReader();
      reader.readAsDataURL(image)
      reader.onload = e =>{
        this.avatar = e.target.result
      }
    },
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
<style  scoped>
.profpic{
 height: 80px;
 width: 80px;
 background: white;
}
img{
  width: 100%;
  height: auto;
}
</style>