<template>
  <!-- Left Side -->
  <v-col class="form_text" cols="12" md="6" order-md="1">
    <div class="form_text_inner">
      <h1 color="primary">Hello, Friend</h1>
      <p>Enter your details to {{ login ? "Login" : "Signup" }}</p>
      <h3 class="d-block">OR</h3>
      <v-btn
        class="sigin_btn flex justify-center align-center"
        to="/signup"
        v-if="login"
        >Sign up</v-btn
      >
      <v-btn
        class="sigin_btn flex justify-center align-center"
        to="/login"
        v-else
        >Login</v-btn
      >
    </div>
  </v-col>
</template>

<script>
export default {
  props: ["login"],
};
</script>

<style lang="scss" scoped>
.form_text {
  width: 100%;
  height: calc(100vh - 74px);
  background-color: #000051;
  display: flex;

  align-items: center;
  margin-top: -9px;
  @media (max-width: 960px) {
    justify-content: center;
    order: 2;
    margin-top: 20px;
  }
  @media(max-width:400px)
  {
    height: 50vh;
  }
  .form_text_inner {
    margin-left: 65px;
    @media (max-width: 960px) {
      justify-content: center;
      margin-left: 0px;
    }
    h1 {
      font-style: normal;
      font-weight: bold;
      font-size: 40px;
      line-height: 52px;
      letter-spacing: 1.5px;
      color: #ffffff;
      margin: 0;
      padding: 0;
      @media (max-width: 400px) {
        font-size: 30px;
      }
    }
    p {
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 28px;
      letter-spacing: 0.5px;
      color: #ffffff;
      margin: 0;
      margin-top: 5px;
      padding: 0;
      @media (max-width: 400px) {
        font-size: 16px;
      }
    }
    h3 {
      margin: 0;
      margin-top: 12px;
      padding: 0;
      font-style: normal;
      font-weight: bold;
      font-size: 40px;
      line-height: 52px;
      letter-spacing: 1.5px;
      color: #ffffff;
      @media (max-width: 400px) {
        font-size: 30px;
        line-height: 40px;
      }
    }
    .sigin_btn {
      max-width: 218px;
      height: 56px;
      background: transparent;
      border: 1px solid #ffffff;
      box-sizing: border-box;
      border-radius: 2px;
      width: 100%;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      text-align: center;
      letter-spacing: 0.5px;
      color: #ffffff;
      text-transform: capitalize;
      margin-top: 15px;
      @media (max-width: 400px) {
        height: 40px;
        font-size: 16px;
      }
    }
  }
}
</style>
