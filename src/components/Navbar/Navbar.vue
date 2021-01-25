<template>
  <div class="nvbar">
    <v-app-bar app elevation="0">
      <v-toolbar-title class="text-uppercase">
        <img src="@/assets/logo 1.png" alt="" />
      </v-toolbar-title>

      <form action="" class="d-smd-none_">
        <input type="text" placeholder="Search" />
      </form>
      <v-spacer></v-spacer>

      <div class="d-md-none_">
        <v-btn
          :to="link.route"
          class="nav_text"
          v-for="link in links"
          :key="link.text"
        >
          {{ link.text }}
        </v-btn>
      </div>
      <v-btn class="login_text d-none d-sm-flex" elevation="0" to="/login"> Login </v-btn>
       <v-app-bar-nav-icon
        class="d-md-block_ d-none_"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app right :disable-resize-watcher="true">
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
        <v-btn class="login_text_mobile d-sm-flex d-none justify-md-center align-md-center" elevation="0" to="/login"> Login </v-btn>
    </v-navigation-drawer>
      <form action="" class="d-smd_">
        <input type="text" placeholder="Search" />
      </form>
  </div>
</template>
<script>
// import Popup from './Popup.vue'
export default {
  data: () => ({
    drawer: false,
    links: [
      { text: " Home", route: "/" },
      { text: "About", route: "/about" },

      { text: "Features", route: "/feature" },
      { text: "FAQs", route: "/faqs" },
      { text: "Contact", route: "/contact" },
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

}
.nav_text {
  background: none !important;
  font-style: normal;
  font-weight: normal;
  font-size: 18px !important;
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

.login_text,
.login_text_mobile
 {
  max-width: 99px;
  width: 100%;
  height: 44px;
  border: 2px solid #000051;
  box-sizing: border-box;
  border-radius: 2px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px !important;
  line-height: 16px;
  letter-spacing: 0.5px;
  color: #000051;
  background: transparent !important;
  margin-left: 8px;
  margin-right: 8px;
  box-shadow: none !important;
  text-transform: capitalize;
  @media(max-width: 600px)
  {
    display: none;
  }
  &:hover {
    border: none;
  }
}
.login_text_mobile{
  @media(max-width: 600px)
  {
    display: flex;
     max-width: 90%;
  width: 100%;
      margin-left: 16px;
      font-size: 16px !important;
  }
}
.d-smd-none_  {
  input {
    border: 2px solid rgba(28, 24, 24, 0.4);
    box-sizing: border-box;
    border-radius: 0px;
    max-width: 308px;
    height: 50px;
    width: 100%;
    margin-left: 65px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    padding: 16px;
    &:focus {
      outline: none;
    }
    
  }
}
.d-none_{
  display: none;
}
@media (max-width: 1124px) {
  .d-md-none_ {
    display: none;
  }
}
@media (max-width: 1124px) {
  .d-md-block_ {
    display: block;
  }
}
@media (max-width: 800px) {
  .d-smd-none_ {
    display: none;
  }
}
@media (max-width: 800px)
{
  .d-smd_{
    display: block;
    margin-top: 73px;
    background-color:#fff;

    height: 72px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media(max-width: 600px)
   {
    margin-top: 61px;
   }


    input{
      border: 2px solid rgba(28, 24, 24, 0.4);
    box-sizing: border-box;
    border-radius: 0px;
    max-width: 308px;
    height: 50px;
      @media(max-width: 600px)
   {
    height: 40px;
    max-width: 90%;
   }
   @media(max-width: 568px)
    {
      
    }
    width: 100%;
    // margin-left: 65px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    padding: 16px;
    &:focus {
      outline: none;
    }
    }
  }
}
.v-app-bar__nav-icon{
  // margin-left: 20px !important;
}


</style>
