<template>
 <v-container class="hidden-sm-and-down fill-height " fluid ma-0 pa-0 style="background-color:#f0f2f5;" >     
    <v-row style="padding-bottom:112px position:absolute; background-color:#f0f2f5; min-height: 800px;
   margin-bottom: 100px;
   clear: both;">
      <v-col> 
        <div class="facb" style="position: absolute;
    top: 20%;
    left: 20%;
    margin-top: -50px;
    margin-left: -50px;">
            <h1 style="color:#1877f2; font-size:54px;">facebook</h1>
             <p style="display:inline; font-size:27px;"> Facebook helps you connect and share <br> with the people in your life.</p>
        </div>

         <v-card elevation="8" width="396px" height="390.35px"  class="mx-auto mt-10% mb" style="position: absolute;
    top: 20%;
    right: 20%;
    margin-top: -50px;
    margin-left: -50px;
    border-radius:10px;" >
      <v-card-text>
        <v-form>
          <v-text-field  single-line
            outlined label="Email adress or Phone number" />
          <v-text-field single-line
            outlined label="Password" type="password"  />
          <v-btn primary large block  style="background-color:#1877f2; color:#fff;" >
            log in
          </v-btn>
          <v-spacer ></v-spacer>
          <v-spacer></v-spacer>
          <span class="psw" style="text-align: center;
    display: block;
    margin: 0 auto;
    padding:4%;"><a href="#">forgot password?</a></span>
    <v-divider></v-divider>
        
          <v-btn  primary large  style="background-color:#31b816; 
              color:#fff;
              margin: 0;
              position: absolute;
              top: 85%;
              left: 50%;
              transform: translate(-50%, -50%); 
              ">
            Create New Acccount
          </v-btn>

        </v-form>
      </v-card-text>
      
    </v-card>
    

      </v-col>
      </v-row>    
     <v-row >  
    <v-col>
        <v-footer style="bottom:0; position:absolute; background-color:white; width:100%;">
      
        <v-card flat tile class="white lighten-1 grey--text text-center pt-0" >
          <v-card-text>
            <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>
       <v-divider></v-divider>
      <v-card-text class="grey--text pt-0" style="width:100%; " align="center">
        <ul id="horizontalist" style="list-style-type:none;">
          <li>kiswahili</li> <li>espanyol</li> <li>italiano</li> <li>hindu</li> <li>chinese</li> <li>japanese</li><li>kiswahili</li> <li>espanyol</li> <li>italiano</li> <li>hindu</li> <li>chinese</li> <li>japanese</li>
         
         
         
          
         
        </ul>
      </v-card-text>
  
      
  
      <v-card-text class="grey--text">
        {{ new Date().getFullYear() }} — facebook
      </v-card-text>
    </v-card>
  
  
  
  </v-footer>
       </v-col>
     </v-row>
  
 

  </v-container>

</template>

<script>
export default {
    name: 'Appweb',

    data: () => ({
      
     
    
    }),
  }

</script>

<style  scoped>
  li{
    display: inline;
  }

</style>