<template>
  <section class="counter_section">
    <div class="counter_inner">
      <v-row>
        <v-col cols="12" md="6">
          <div class="counter_img">
            <img src="@/assets/counter.png" alt="" />
          </div>
        </v-col>
        <v-col cols="12" md="6">
            <div v-for="(count, i) in counter" :key="i" class="counter_text">
            <p>382</p>
            <h2>REVIEWERS <br> ONLINE</h2>
          </div>
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      counter: [
        {
          count: "300",
          text: `REVIEWERS <br>
                     ONLINE`,
        },
        {
          count: "300",
          text: `REVIEWERS <br>
                     ONLINE`,
        },
        {
          count: "300",
          text: `REVIEWERS <br>
                     ONLINE`,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.counter_section {
  background: url(../../assets/Counter-Bg.jpg);
  background-size: cover;
  position: relative;

  @media(max-width:960px)
  {
      background-position: center;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: rgba(46, 46, 46, 0.63);
    border-radius: 0px;
    z-index: 1;
  }
  .counter_inner {
    z-index: 2;
    width: 100%;
    height: 100%;
    .row {
      width: 100%;
      height: 100%;
    }
    .col-12 {
      z-index: 9 !important;
    }
    .counter_img {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      img{
            
    transform: translateX(-40px);
     @media (max-width: 550px) {
        width: 100%;
        object-fit: cover;
        }
      }
    }
    .counter_text {
      display: flex;
      align-items: center;
        @media (max-width: 450px) {
       padding-left: 10px;
        }
      @media (max-width: 1100px) {
        flex-direction: column;
      }
      @media (max-width: 960px) {
        flex-direction: row;
        justify-content: center;
      }
      @media (max-width: 450px) {
        // flex-direction: column;
      }

      p {
        font-style: normal;
        font-weight: 900;
        font-size: 140px;
        line-height: 160px;
        letter-spacing: 0.5px;
        color: #ffffff;
        @media (max-width: 1100px) {
          font-size: 100px;
        }
        @media (max-width: 550px) {
          font-size: 40px;
          line-height: 80px;
        }
        @media (max-width: 550px) {
          font-size: 30px;
          line-height: 40px;
        }
      }
      h2 {
        font-style: normal;
        font-weight: 500;
        font-size: 36px;
        line-height: 48px;
        letter-spacing: 1.5px;
        color: #ffffff;
        margin-left: 50px;
        @media(max-width:1100px)
        {
               br{
            display: none;
        }
        }
        @media (max-width: 550px) {
          font-size: 20px;
          line-height: 30px;
          letter-spacing: 0.5px;
        
        }
          @media (max-width: 450px) {
          margin-left: 20px;
        }
       
       
      }
    }
  }
}
</style>
