<template>
  <v-app class="banner_section">
    <v-container fluid>
      <v-row>
        <v-col class="banner_text d-flex align-center" cols="12" md="6">
          <div class="banner_text_inner">
            <h1>Behind every review is an <br> experience that matters</h1>
            <p>Read reviews. Write reviews. Find companies.</p>
            <v-btn class="chat_btn">Why Chat Review</v-btn>
          </div>
        </v-col>
        <v-col class="banner_img" cols="12" md="6">
          <div class="banner_img_inner">
            <div>
               <img src="@/assets/Banner.jpg" alt="">
            </div>
          
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.banner_section {
  height: calc(100vh - 72px);
  @media(max-width:960px)
  {
    height: auto;
  }

  .banner_text {
    background: #000051;
    color: #fff;

    .banner_text_inner {
      padding-left: 60px;
      @media(max-width:960px)
      {
        padding: 60px;
      }
      h1 {
        font-style: normal;
        font-weight: bold;
        font-size: 40px;
      
        color: #ffffff;
        margin: 0;
        letter-spacing: 1.5px;
         @media(max-width:660px)
       {
        font-size: 30px;
       }
         @media(max-width:600px)
       {
        font-size: 25px;
        br{
          display: none;
        }
       }
         @media(max-width:500px)
       {
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
          @media(max-width:550px)
       {
        font-size: 18px;
       }
      }
      .chat_btn {
        max-width: 218px;
        width: 100%;
        height: 56px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #ffffff;
        box-sizing: border-box;
        border-radius: 2px;
        background-color: transparent;
        color: #fff;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 20px;
        text-align: center;
        letter-spacing: 0.5px;

        color: #ffffff;
            @media(max-width:550px)
       {
        font-size: 14px;
        max-width: 180px;
       }

      }
    }
  }
  .banner_img {
    height: calc(100vh - 72px);
     @media(max-width:960px)
  {
    height: auto;
  }
  }
  .banner_img_inner {
    width: 100%;
    height: 100%;
    overflow: hidden;
    div{
      width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    }
      img {
        max-width: 100%;
        height: 100%;
      
        object-fit: cover;
       @media(max-width:600px)
       {
         width: 100%;
       }
      }
    
  }
}
</style>
