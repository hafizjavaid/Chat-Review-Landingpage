<template>
 <div>
  <Navbar></Navbar>
  
   <router-view></router-view>
   <Footer></Footer>
 </div>
</template>

<script>
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"


export default {
  name: 'App',

  components: {
    // HelloWorld,
    Navbar,
    Footer
  },

  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;

}
.theme--light.v-app-bar.v-toolbar.v-sheet{
  background: #fff;
}
header{
  height: 72px !important;
   z-index: 999 !important;
   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25) !important;
   @media(max-width: 800px)
   {
     box-shadow: none !important;
   }
   @media(max-width: 600px)
   {
    height: 60px !important;
   }
 .v-toolbar__content{
   height: 100% !important;
   align-items: center;
   .v-toolbar__title{
     height: 100%;
    display: flex;
    align-items: center;
   }
 }
}
.v-navigation-drawer--fixed{
  z-index: 9999 !important;
}
.v-overlay.v-overlay--active{
  display: none !important;
}

</style>