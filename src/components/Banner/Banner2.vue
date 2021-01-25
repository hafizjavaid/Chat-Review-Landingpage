<template>
  <v-app class="banner_section">
    <v-container fluid>
      <v-row>
        <v-layout class="d-flex flex-column justify-center align-center">
          <div class="banner_text_inner">
            <h1>
              Turn customers into <br />
              fanatics
            </h1>
            <p>Read reviews. Write reviews. Find companies.</p>
            <v-btn class="chat_btn">Why Chat Review</v-btn>
          </div>
          <div class="banner_img">
            <img src="@/assets/Frame.png" alt="" />
          </div>
        </v-layout>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.banner_section {
  height: auto;
  background: #f7fafd;

  .banner_text_inner {
    margin-top: 50px;
    h1 {
      font-style: normal;
      font-weight: bold;
      font-size: 50px;
      text-align: center;
      letter-spacing: 1.5px;
      line-height: 1;
      color: #253368;
      margin: 0;
      @media (max-width: 660px) {
        font-size: 30px;
      }
      @media (max-width: 600px) {
        font-size: 25px;
        br {
          display: none;
        }
      }
      @media (max-width: 500px) {
        font-size: 20px;
      }
    }
    p {
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      margin: 0;
      margin-top: 10px;
      margin-bottom: 32px;
      color: #253368;
      @media (max-width: 550px) {
        font-size: 18px;
      
    padding-left: 26px;
      }
    }
    .chat_btn {
      max-width: 218px;
      width: 100%;
      height: 56px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px solid #253368;
      box-sizing: border-box;
      border-radius: 2px;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 20px;
      text-align: center;
      letter-spacing: 0.5px;
      margin: 10px auto;
      color: #253368;
      box-shadow: none;
      background-color: transparent;
      transition: 0.3s linear;
      &:hover {
        background-color: #253368;
        color: #fff;
      }
      @media (max-width: 550px) {
        font-size: 14px;
        max-width: 180px;
      }
    }
  }
  .banner_img {
    @media (max-width: 960px) {
      height: auto;
    }
    @media (max-width: 500px) {
      width: 100%;
      object-fit: cover;
    }
  }
}
</style>
