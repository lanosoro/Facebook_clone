<template>
  <v-container fluid >
    <nav>
      nav
    </nav>
    <main>
      main
    </main>
    <div class="sidebar">
      sidebar

      

    </div>
    <div class="content">
      content
    </div>
    <div class="content2">
      content
    </div>
    <div class="content3">
      content
    </div>
    <div id="footer">
      footer
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'dashboard',
  

  
}
</script>

<style scoped>
:root{
  --main-radius:5px;
  --main-padding:5px;
}
.container{
  display: grid;
  height: 100vh;
  grid-template-columns: 0.7fr 1fr 1fr 1fr;
  grid-template-rows: 0.2fr 1.5fr 1.2fr 0.8fr;
  grid-template-areas: 
  "nav nav nav nav"
  "sidebar main main main"
  "sidebar content content2 content3"
  "sidebar footer footer footer";
  background: #f0f2f5;
  grid-gap:.2rem;
  width: 100%;
  
  
}
.sidebar{
  left: 0;
  top: 0;
  background: #f0f2f5;
  grid-area: sidebar;
  border-radius:var(--main-radius) ;
  padding: var(--main-padding);

}
nav{
  background: blue;
  grid-area: nav;
  border-radius:var(--main-radius) ;
  padding: var(--main-padding);
}
.content{
  background: rgb(16, 126, 120);
  grid-area: content;
  border-radius:var(--main-radius) ;
  padding: var(--main-padding);
}
.content2{
  background: rgb(6, 113, 121);
  grid-area: content2;
  border-radius:var(--main-radius) ;
  padding: var(--main-padding);

}
.content3{
  background: rgb(15, 157, 157);
  grid-area: content3;
  border-radius:var(--main-radius) ;
  padding: var(--main-padding);
}
main{
  background: teal;
  grid-area: main;
  
  grid-gap:0;
  border-radius:var(--main-radius) ;
  padding: var(--main-padding);
}
#footer{
  background: rgb(18, 119, 119);
  grid-area:footer;
  border-radius:var(--main-radius) ;
  padding: var(--main-padding);
}
@media only screen  and (max-width: 550px) {
  .container{
    grid-template-columns: 1fr;
    grid-template-rows: 0.4fr 0.4fr 2.2fr 1.2fr 1.2fr 1.2fr 1fr;
    grid-template-areas: 
    "nav"
    "sidebar"
    "main"
    "content"
    "content2"
    "content3"
    "footer";
  }
  
}
</style>