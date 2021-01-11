<template>
    <div class="" v-show="$vuetify.breakpoint.sm" style="">
        <div style="height:900px; background-color:#f0f2f5;" >
             <v-row style="padding-bottom:112px position:absolute; background-color:#f0f2f5; min-height: 800px;
   margin-bottom: 100px;
   clear: both;">
      <v-col cols="12" md="6" lg="6" xl="6" sm="6" >
          <div class="facb" style="position: absolute;
    top: 70px;
    left: 41%;
    margin-top: -50px;
    margin-left: -50px;">
            <h1 style="color:#1877f2; font-size:54px; left:30px;">facebook</h1>
             
        </div>
        <div class="facb" style="position: absolute;
    top: 15%;
    left: 33%;
    margin-top: -50px;
    margin-left: -50px;">
            
             <p style="display:inline; font-size:24px; text-align: center;"> Facebook helps you connect and<br> share  with the people in your life.</p>
        </div>

         <v-card elevation="8" width="396px" height="390.35px"  class="mx-auto mt-10% mb" style="position: absolute;
    top: 25%;
    left: 25%;
    margin-top: -50px;
    margin-left: -50px;
    border-radius:10px;
    box-sizing: border-box;" id="form
    " >
      <v-card-text>
        <v-form>
          <v-text-field  single-line
            outlined label="Email adress or Phone number" />
          <v-text-field single-line
            outlined label="Password" type="password"  />
          <v-btn primary large block  style="background-color:#1877f2; color:#fff; text-transform: capitalize; font-size: 20px;
line-height: 48px;" >
           <strong>log in</strong> 
          </v-btn>
          <v-spacer ></v-spacer>
          <v-spacer></v-spacer>
          <span class="psw" style="text-align: center;
    display: block;
    margin: 0 auto;
    padding:4%; text-decoration:none;"><a href="#">forgotten password?</a></span>
    <v-divider></v-divider>
        
          <v-btn  primary large  style="background-color:#31b816; 
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
        <p  style=" 
              min-width:360px;
              display:inline;
              color:#000;
              margin: 0;
              position: absolute;
              top: 110%;
              left: 59%;
              transform: translate(-50%, -50%); 
              
              ">
              <a style="color:black important; font-family:SFProText-Semibold, Helvetica, Arial, sans-serif;"><strong></strong></a> for a celebrity, band or business.

        </p>
      </v-card-text>
      
    </v-card>
    

      </v-col>
      </v-row>        
             </div>
            
         <div style="background-color:white; top:900px; height:264px;" >
                <v-footer style="background-color:white;" >
                   <v-card flat tile class="white lighten-1 #737373--text text-center pt-0" >
          
       
      <v-card-text class="#737373--text pt-0 " style="width:100%; ; " >
        <ul id="horizontalist" class="justify-start ma-0" style="list-style-type:none; text-align:center; font-size:12px; ">
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
         <a href=""><v-icon depressed
                    elevation="2"
                   
                    outlined
                   small
                    tile style="background-color:#f0f2f5; border-style: solid;  border-width: 1px; border-radius:3px; padding:0px 10px;  ">
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
  
      
  
      <v-card-text class="#737373--text " style="padding: 50px 20px; font-size:12px; left:0;">
       Facebook © {{ new Date().getFullYear() }}
      </v-card-text>
    </v-card>
  
  
                </v-footer>
          </div>

    </div>
  
</template>

<script>

export default {
  
  name: "logintab",

  data: () => ({})
};



</script>

<style scoped>
li{
  float: left;
  line-height: 30px;
  padding: 0px 10px;
  word-wrap: normal;
  color: #737373;

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
  color: #737373;
}
a{
  text-decoration: none;
  color: #737373 !important;
}
a:hover{
  text-decoration: underline;
}
@media (max-width: 600px) { 
  #form {
    left:60%;
  }
}

</style>