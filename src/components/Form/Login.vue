<template>
  <v-main>
    <v-container fluid>
      <v-row>
        <!-- Left Side -->
        <v-col class="form_text" cols="12" md="6">
          <div class="form_text_inner">
            <h1 color="primary">Hello, Friend</h1>
            <p>Enter your details to {{ login ? 'Login' : 'Signup' }}</p>
            <h3 class="d-block">OR</h3>
            <v-btn class="sigin_btn flex justify-center align-center" to="/signup" v-if="login"
              >Sign up</v-btn
            >
            <v-btn class="sigin_btn flex justify-center align-center" to="/login" v-else 
              >Login</v-btn
            >
          </div>
        </v-col>
        <!-- Left Side -->
        <!-- Right Side -->
        <v-col class="main_form" cols="12" md="6">
          <div class="main_form_inner">
            <h1>{{ login ? 'Login' : 'Signup' }} to</h1>
            <span>
              <svg
                width="240"
                height="56"
                viewBox="0 0 240 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <rect width="240" height="56" fill="url(#pattern0)" />
                <defs>
                  <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlink:href="#image0"
                      transform="translate(0 -0.0178571) scale(0.00277778 0.0119048)"
                    />
                  </pattern>
                  <image
                    id="image0"
                    width="360"
                    height="87"
                    xlink:href="data:image/png;base64,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"
                  />
                </defs>
              </svg>
            </span>
            <v-form ref="form" v-model="valid" id="auth_form" lazy-validation>
              <!-- <input type="text" placeholder="Name" /> -->
               <v-text-field :rules="nameRules" required v-model="name" class="input_field" placeholder="Name"></v-text-field>
               <v-text-field :rules="emailRules" required v-model="email" v-if="!login" class="input_field" placeholder="Email"></v-text-field>
               <v-text-field :rules="passwordRules" class="input_field" required v-model="password" placeholder="Password"></v-text-field>


              <!-- <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" /> -->
                <vue-tel-input-vuetify data-app v-model="country" v-on:country-changed="countryChanged" v-if="!login" class="phone" placeholder="" label="" autocomplete="off" ></vue-tel-input-vuetify>

              <v-btn class="sign_btn">
                {{ login ? 'Login' : 'Signup' }}
              </v-btn>
              <a href="#" class="f_password">Forgot Password?</a>
            </v-form>
          </div>
        </v-col>
        <!-- Right Side -->
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
// import VueTelInputVuetify from "vue-tel-input-vuetify";
export default {
  // props:['login'],
  data(){
   return{
    //  loginValue:this.login,
     valid:false,
     login:true,
     phone: null,
     country:null,
     name:'',
     nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
       email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      password:'',
      passwordRules:[
        v => !!v || 'Password is required',
        v => v.length > 6 || 'Password must be greater than 6 characters',
      ],
 
   }
  },

  methods: {
    validate() {
      this.$refs.form.validate();
    },
 countryChanged(country) {
      this.country = country.dialCode
      console.log(this.country);
    },

  },
watch:{
    $route (){

        if(this.$router.currentRoute.path == '/login')
        {
          this.login = true;
        }
        else{
          this.login = false;
        }
    }
},
components:{
  // VueTelInputVuetify
}

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

    span {
      width: 100%;
      display: flex;
      justify-content: center;
    }
    h1 {
      text-align: center;
    }
  }

  form {
    input {
      // display: block;
      // width: 100%;
      // height: 56px;

      // margin-bottom: 14px;
      // background: #ffffff;
      // border: 1px solid #000051;
      // box-sizing: border-box;
      // padding: 18px 14px;

      // &::placeholder {
      //   font-style: normal;
      //   font-weight: normal;
      //   font-size: 20px;
      //   line-height: 20px;
      //   letter-spacing: 0.5px;

      //   color: #bbbbbb;
      // }
      // &:focus {
      //   outline: none;
      //   border-width: 2px;
      // }
     
    }
    .sign_btn {
      width: 100%;
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
    }
  }
}

</style>
