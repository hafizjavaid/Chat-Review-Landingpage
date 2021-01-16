<template>
  <div>
    <Navbar></Navbar>

    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar/Navbar";

export default {
  name: "App",

  components: {
    // HelloWorld,
    Navbar,
  },

  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}
.theme--light.v-app-bar.v-toolbar.v-sheet {
  background: #fff;
}
header {
  height: 72px !important;
  z-index: 999 !important;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25) !important;
  @media (max-width: 800px) {
    box-shadow: none !important;
  }
  @media (max-width: 600px) {
    height: 60px !important;
  }
  .v-toolbar__content {
    height: 100% !important;
    align-items: center;
    .v-toolbar__title {
      height: 100%;
      display: flex;
      align-items: center;
    }
  }
}
.v-navigation-drawer--fixed {
  z-index: 9999 !important;
}
.v-overlay.v-overlay--active {
  display: none !important;
}
.f_password {
  color: #085bd7 !important;
  text-decoration: none;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 20px;
  margin-top: 11px !important;
  display: inline-block;
}
#auth_form {
  .input_field, .v-input {
    display: block;
    width: 100%;
    height: 56px;
    margin-bottom: 28px;
    background: #ffffff;
    border: 2px solid #000051 !important;
    box-sizing: border-box;
    padding: 5px 14px;
    // border: none !important;

    &::placeholder {
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 20px;
      letter-spacing: 0.5px;
      color: #bbbbbb;
    }
    &:focus {
      outline: none;
      border-width: 2px !important;
    }
  }
  .country-code{
    min-width: 100px !important;
    .v-input{
      border-right: none !important;
    }
  }
  .v-input .v-input__slot:before {
    display: none !important;
  }
  .v-input .v-input__slot:after {
    display: none !important;
  }
  .v-messages__message {
    margin-top: 9px;
    color: red;
  }

  .input_field.phone {
    background-color: none !important;
  }
  .v-input__control {
    margin-top: 7px !important;
  }
}

#verification {
  .v-input .v-input__slot:after {
    border: 2px solid #000051 !important;
  }
 
  .v-input input {
    text-align: center;
  }
}
</style>