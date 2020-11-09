<template>

  <v-app >
    

    <v-main>
      <Appweb/>
      <HelloWorld/>
      
      
        
    </v-main>
    

   
  </v-app>
</template>

<script>
import HelloWorld from './components/Appmobile';
import Appweb from './components/Appweb'

export default {
  name: 'App',

  components: {
    HelloWorld,
    Appweb
  
  
  },


  data: () => ({
    //
  }),
};
</script>
<style  scoped>
#app{
  background-color: white;
}
</style>