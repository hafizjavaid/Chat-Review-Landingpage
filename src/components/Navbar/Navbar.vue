<template>
  <nav>
    <v-app-bar app elevation="0">
      <!-- <v-app-bar-nav-icon class="d-md-none" @click.stop="drawer = !drawer"></v-app-bar-nav-icon> -->
      <v-toolbar-title class="text-uppercase ">
        <img src="@/assets/logo 1.png" alt="" />
      </v-toolbar-title>

      <form action="">
        <input type="text" placeholder="Search" />
      </form>
      <v-spacer></v-spacer>

      <v-btn :to="link.route" class="nav_text"  v-for="link in links"
          :key="link.text" >
        {{ link.text }}
      </v-btn>
      <v-btn class="login_text" elevation="0">
        Login
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app>
      <v-list flat>
        <v-list-item
          v-for="link in links"
          :key="link.text"
           router
          :to="link.route"
        
        >
          <v-list-item-content>
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>
<script>
// import Popup from './Popup.vue'
export default {
  data: () => ({
    drawer: false,
    links: [
      { text: " Home", route: "/" },
      {  text: "Features", route: "/feature" },
      {  text: "FAQs", route: "/faqs" },
      {  text: "Contact", route: "/contact" },

    ],
  }),
};
</script>
<style lang="scss" scoped>
.border {
  border-left: 4px solid #0ba518;
}
nav {
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) !important;
  background: #fff;
  /* margin-bottom: 20px; */
}
.nav_text {
  background: none !important;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.5px;
  color: #000051 !important;
  box-shadow: none;
  outline: none;
//   margin-right: px;
  padding: 0;
  text-transform: capitalize;
  &:active {
    background: none;
  }

}
  .v-btn {
    // padding: 0 !important;
  }
  .login_text {
    max-width: 99px;
    width: 100%;
    height: 44px;
    border: 2px solid #000051;
    box-sizing: border-box;
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.5px;
    color: #000051;
    background: transparent !important;
    margin-left: 8px;
    box-shadow: none !important;
     text-transform: capitalize;
     &:hover{
         border: none;
     }
  }
  form{
      input{
          border: 2px solid rgba(28, 24, 24, 0.4);
box-sizing: border-box;
border-radius: 0px;
max-width: 308px;
height: 50px;
width: 100%;
margin-left: 65px;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
padding: 16px;
&:focus{
    outline: none;
}
      }
  }
</style>
