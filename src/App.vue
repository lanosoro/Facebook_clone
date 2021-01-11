<template>

  <v-app >
    

   
      
      <router-view><Dashboard/></router-view>
      <router-view><loginweb/></router-view> 
      <router-view><logintab/></router-view> 
      <router-view><signup/></router-view>
      
      
     
        
    
    

   
  </v-app>
</template>

<script>

import Dashboard from './components/pages/Dashboard.vue'; 
import loginweb from './components/Appweb'; 
import Signup from './components/signup';
import logintab from './components/Apptab';
export default {
  name: 'App',

  components: {

   
    Dashboard,
    loginweb,
    logintab,
    Signup  
  },


  
    Dashboardata: () => ({
    //
  }),
};
</script>
<style  scoped>
#app{
  background-color: white;
}
</style>