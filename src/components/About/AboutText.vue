<template>
  <v-app class="about_section">
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="3">
          <h1>
            Hi there, we’re <br />
            Think & Grow
          </h1>
        </v-col>
        <v-col cols="12" sm="9">
          <p>
            Our customers use us to design their organisational structure, build
            their executive team, recruit rare skillsets, nurture specific
            talent pools and architect their talent strategy.
          </p>
          <p>
            We have a track record of building competitive advantage, scale and
            digital led thinking for our customers through the creation of high
            performing executive, leadership, technology, product and growth
            functions.
          </p>
          <p>
            Being a small, dedicated business with deep market knowledge, the
            way we work is grounded in meaningful, long-standing relationships
            and we fully invest in understanding our clients and their
            businesses. We love partnering with pioneering business leaders,
            helping them turn great ideas into reality through the creation of
            high performing executive, technology, product and growth functions.
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.about_section {
  //   background: #f7f7f7;
  border-radius: 0px;
  padding: 100px 80px 80px;
  @media(max-width:400px)
  {
    padding: 100px 30px 80px;
  }
  font-family: "Roboto", sans-serif;

  h1 {
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 36px;
    color: #0d1016;
    @media (max-width: 540px) {
      text-align: center !important;
    }
  }
  p {
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    color: #0d1016;
    margin: 0;
    margin-bottom: 40px;
    text-align: justify;
     @media(max-width:400px)
  {
    
    text-align: left;

  }
  }
}
</style>
