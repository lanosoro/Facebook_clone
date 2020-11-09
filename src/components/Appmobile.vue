<template style>
    <v-container fluid ma-0 pa-0 fill-height class="hidden-md-and-up"  >
      
       <a
          class="hidden-md-and-up justify-center"
          style="background-color:#fffbe2; width:100%; top:0;  height:40px; position:absolute;  "
          flat 
          xs="auto"
         
        >
        
          <v-toolbar-title style="color:blue; font-size:12px;" align="center"> <v-icon>mdi-window-phone</v-icon>Phone</v-toolbar-title>
          </a>
          
          <v-row style="top:40%;
                overflow: auto;
                height: 80%;
                padding: 0;
                margin-left: 37px;
                ">
            <v-col cols="6" offset="0" xs="auto">
              <v-card fill-height flat tile style="width:90%; height:100%; left:5%; top:50px; position:absolute" >
             
                  <v-form>
                    <h3 align="center" style="color:#1877f2;"><strong>facebook</strong></h3>
             <v-text-field  single-lines solo-inverted
             label="Email adress or Phone number" style=" top:40px" />
          <v-text-field single-line solo-inverted
           label="Password" type="password" style=" top:60px" />
          <v-btn primary large block  style="background-color:#1877f2; color:#fff;" >
            log in
          </v-btn>
          
            <v-divider style="text-align: center;
              display: block;
              margin: 0 auto;
              padding:4%;
              left:30%;
              top:50%;
              position:absolute;">or</v-divider>
                  
          <v-btn color="#39cf1b" primary large  style="background-color:#39cf1b; color:#fff; margin: 0; position: absolute; top:45%; left: 50%; transform: translate(-50%, -50%); background-color:#36a420; 
              color:#fff;">
            Create New Acccount
          </v-btn>
          <span class="offset-" style="text-align: center;
              display: block;
              margin: 0 auto;
              padding:4%;
              left:30%;
              top:50%;
              position:absolute;"><a href="#">forgot password?</a></span>

        </v-form>
           

              </v-card>

            </v-col>
          </v-row >
    
      
         
         <v-spacer></v-spacer>
      
        <v-row>
          <v-col class="xs-6">
          <v-card  class="pa-2"
          elevation="0"
          style="background-color:white; top:70%; position:absolute;">
            <v-card-text class="grey--text pt-0">
                <ul style="list-style-type:none; text-align:center;">
                  <li><a style="color:blue;">kiswahili</a></li>
                  <li><a style="color:blue;">english</a></li>
                  <li><a style="color:blue; font-weight:1px;">spain</a></li>

                </ul>
            </v-card-text>
          


          </v-card>
          </v-col>
           <v-col class="xs-6">
          <v-card  class="pa-2"
          elevation="0"
          style="background-color:white; top:70%; position:absolute;">
            <v-card-text class="blue--text pt-0">
                <ul style="list-style-type:none; text-align:center;">
                  <li><a style="color:blue;">kiswahili</a></li>
                  <li><a style="color:blue;">english</a></li>
                  <li><a style="color:blue; font-weight:1px;">spain</a></li>
               
                </ul>
                
            </v-card-text>
         
            <v-card-text class="blue--text pt-0 d-inline" align="center" style="right:50%; position:absolute">
                <div class="d-inline-sm">
                  <ul style="list-style-type:none; text-align:center;">
                  
                  
                  <li> <a>About</a> · </li>
               
                </ul>
                
                </div>
                <div class="d-inline">
                  <ul style="list-style-type:none; text-align:center;">
                  
                  
                  <li> <a>help</a> · </li>
               
                </ul>
                
                </div>
            </v-card-text>
         
            


          </v-card>
        
          </v-col>
        </v-row>

      

    
  
    </v-container>
     
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      
     
    
    }),
  }
</script>
<style scoped>
#container{
  background-color: white;
}

@media (max-width: 600px) { 
  a {
    width:100%;
  }
}

</style>