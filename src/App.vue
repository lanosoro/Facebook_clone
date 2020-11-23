<template>

  <v-app >
    

    <v-main>
      
     <!--  <Dashboard/> -->
      <loginweb/>
      <logintab/>

      <signup/>
      
     
        
    </v-main>
    

   
  </v-app>
</template>

<script>
/* 
import Dashboard from './components/pages/Dashboard.vue'; */
/* import loginweb from './components/Appweb';
 */import Signup from './components/pages/signup';
/* import logintab from './components/Apptab'
 */export default {
  name: 'App',

  components: {

   
   /*  Dashboard, */
    /* loginweb */
    /* logintab */
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