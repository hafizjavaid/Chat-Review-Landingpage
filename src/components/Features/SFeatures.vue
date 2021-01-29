<template>
  <v-app class="Ufeatures_section">
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="6">
          <img src="@/assets/suggest.png" alt="" />
        </v-col>
        <v-col cols="12" sm="6" class="d-flex justify-center flex-column">
          <h3>Suggest Features</h3>
          <v-btn class="suggest_btn">Suggest</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.Ufeatures_section {
  padding: 0px 70px 30px;
  font-family: "Roboto", sans-serif;
  background: #f0f5ff;
  border-radius: 0px;
  @media(max-width:400px)
  {
    padding: 0px 30px 80px;
  }
}
img {
  width: 100%;
  object-fit: cover;
}
.suggest_btn {
  max-width: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  margin-top: 19px;
  background: #061134 !important;
  border-radius: 0px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  font-size: 16px;
  width: 100%;
  height: 50px !important;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  transition: .3s ease;
  &:hover{
    background-color: transparent !important;
    color: #061134;
    box-shadow: none;
  }
  @media(max-width:600px)
  {
    margin: 19px auto 0;
  }
}
h3 {
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  color: #061134;
  margin: 0;
   @media(max-width:600px)
  {
    text-align: center;
  }
    @media(max-width:400px)
  {
    text-align: center;
    // font-size: 40px;
  }
  
}

</style>
