<template>
  <section class="about_section">
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="8">
          <h1>Why Chat Review</h1>
          <p>
            Trustpilot is free and open to every company and consumer
            everywhere. Sharing your experiences helps others make better
            choices and companies up their game.
          </p>

          <p>
            Trustpilot is free and open to every company and consumer
            everywhere. Sharing your experiences helps others make better
            choices and companies up their game.Trustpilot is free and open to
            every company and consumer everywhere.
          </p>
          <p>
            Trustpilot is free and open to every company and consumer
            everywhere. Sharing your experiences helps others make better
            choices and companies up their game.
          </p>
          <v-btn class="chat_btn">Why Chat Review</v-btn>
        </v-col>
        <v-col cols="12" md="4">
          <div class="why_img">
            <img src="@/assets/Why.jpg" alt="" />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.about_section {
  background: #f7f7f7;
  border-radius: 0px;
  padding: 100px 20px 100px 60px;

  h1 {
    font-style: normal;
    font-weight: normal;
    font-size: 46px;
    line-height: 52px;
    letter-spacing: 0.5px;
    color: #000051;
    margin: 0;
    margin-bottom: 36px;
  }
  p {
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.5px;
    color: #000051;
    margin: 0;
    margin-bottom: 26px;
  }
  .chat_btn {
    max-width: 218px;
    width: 100%;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #000051;
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
    color: #000051;
    box-shadow: none;
    @media (max-width: 550px) {
      font-size: 14px;
      max-width: 180px;
    }
  }

  .why_img {
    text-align: center;
    img {
      max-width: 100%;
      height: auto;
      object-fit: cover;
    }
  }
}
</style>
