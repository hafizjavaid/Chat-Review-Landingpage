<template>
 <div>
  <Navbar></Navbar>
  <br>
   <router-view></router-view>
 </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import Navbar from "./components/Navbar/Navbar"

export default {
  name: 'App',

  components: {
    // HelloWorld,
    Navbar
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
 
}
.v-navigation-drawer--fixed{
  z-index: 9999 !important;
}

</style>