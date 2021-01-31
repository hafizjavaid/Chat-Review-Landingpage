<template>
  <v-main>
    <v-container fluid>
      <v-row>
        <!-- Left Side -->
       <Formtext></Formtext>
        <!-- Left Side -->
        <!-- Right Side -->
        <v-col class="main_form" cols="12" md="6" order-md="2">
          <div class="main_form_inner">
            <v-form ref="form" v-model="valid" id="auth_form" lazy-validation>
              <!-- <input type="text" placeholder="Name" /> -->
               <h1>Contact Us</h1>
              <v-text-field
                :rules="nameRules"
                required
                v-model="name"
                class="input_field"
                placeholder="Name"
                autocomplete="off"
              ></v-text-field>
               <v-text-field
                :rules="subjectRules"
                required
                v-model="subject"
                class="input_field"
                placeholder="Subject"
                autocomplete="off"
              ></v-text-field>
              <v-text-field
                :rules="emailRules"
                required
                v-model="email"
               
                class="input_field"
                placeholder="Email"
                autocomplete="off"
              ></v-text-field>
              <v-textarea
                
                required
                v-model="message"
                placeholder="Message"
                autocomplete="off"
              ></v-textarea>
             
              <v-btn class="submit_btn">
                Submit
              </v-btn>
              
            </v-form>
          </div>
        </v-col>
        <!-- Right Side -->
      </v-row>
    </v-container>
  </v-main>
</template>

<script>

import Formtext from "../Contact/Contacttext"
export default {
 
  data() {
    return {
    
      valid: false,
      
      subject: '',
      message: '',
      phone: null,
      country: null,
      code: null,
      name: "",
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => v.length <= 10 || "Name must be less than 10 characters",
      ],
     
       subjectRules: [
        (v) => !!v || "Subject is required",
        (v) => v.length >= 5 || "Subject must be grater than 10 characters",
      ],
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],
     
    };
  },

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    
    
  },
  watch: {
   
    computed: {
     
    },
  },
  components: {
  
    Formtext
  },
};
</script>

<style lang="scss" scoped>

.main_form {
  width: 100%;
  height: calc(100vh - 90px);
  display: flex;
  justify-content: center;
  align-items: center;
  align-items: flex-start;

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
      margin-bottom: 10px;
    }
  }

  form {
   
    .submit_btn {
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
       @media (max-width: 400px) {
        height: 40px;
        font-size: 16px;
      }
    }
  }
}
</style>
