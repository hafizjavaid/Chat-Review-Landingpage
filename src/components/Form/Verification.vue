<template>
  <v-main>
    <v-container fluid>
      <v-row>
        <!-- Left Side -->
        <v-col class="form_text" cols="12" md="6">
          <div class="form_text_inner">
            <h3>Please verify your phone</h3>
          </div>
        </v-col>
        <!-- Left Side -->
        <!-- Right Side -->
        <v-col class="main_form" id="verification" cols="12" md="6">
          <div class="main_form_inner">
            <h4>A signup code has been sent to your email.</h4>
            <h4>Please enter the verification code</h4>
            <v-form ref="form">
              <div class="fields">
                <v-text-field ref="search"></v-text-field>
                <v-text-field></v-text-field>
                <v-text-field></v-text-field>
                <v-text-field></v-text-field>
                <v-text-field></v-text-field>
              </div>
              <v-btn class="verfication_btn"> Verify </v-btn>
            </v-form>
          </div>
        </v-col>
        <!-- Right Side -->
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {},
  watch: {},
  components: {
    // VueTelInputVuetify
  },
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
      max-width: 300px;
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
    }
  }
}
.main_form {
  width: 100%;
  height: calc(100vh - 90px);
  display: flex;
  justify-content: center;
  align-items: center;

  .main_form_inner {
    width: 100%;
    max-width: 470px;
    width: 100%;
    background-color: #eee;
    padding: 20px;

    span {
      width: 100%;
      display: flex;
      justify-content: center;
    }
    h1 {
      text-align: center;
    }
    h4 {
      text-align: center;

      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 23px;
      margin-bottom: 5px;

      color: #000000;
      @media (max-width: 330px) {
        font-size: 14px;
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;

    .verfication_btn {
      height: 56px;
      background: #000051;
      border: 1px solid #000051;
      box-sizing: border-box;
      color: #fff;
      text-transform: capitalize;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 20px;
      text-align: center;
      letter-spacing: 0.5px;
      color: #ffffff;
      border-radius: none;
      max-width: 282px;
      width: 100%;
      text-align: center;
      margin: auto;
    }
    .fields {
      display: grid;
      grid-template-columns: repeat(5, 44px);
      column-gap: 16px;
      max-width: 284px;
      width: 100%;
      margin: auto;
      @media (max-width: 330px) {
        grid-template-columns: repeat(4, 44px);
        column-gap: 5px;
      }
      .v-input input {
        // padding: 0 !important;
        text-align: center;
      }
      @media (max-width: 330px) {
        column-gap: 5px;
        max-width: 284px;
        width: 87%;
        .v-input__control {
          height: 44px !important;
        }
      }
    }
  }
}
</style>
