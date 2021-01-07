<template>
  <section class="counter_section">
    <div class="counter_inner">
      <v-row>
        <v-col cols="12" md="4">
          <div class="counter_img">
            <img src="@/assets/counter.png" alt="" />
          </div>
        </v-col>
        <v-col cols="12" md="8" class="counter-wrapper">
          <div v-for="(count, i) in counter" :key="i" class="counter_text">
            <div class="svg" v-html="count.svg"></div>
            <p>{{ count.count }}</p>
            <h2>{{ count.text }}</h2>
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
          text: `Reviewers Online`,
          svg: `
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M29.9862 55.2871C16.0141 55.2871 4.6875 43.9605 4.6875 29.9884C4.6875 16.0163 16.0141 4.6897 29.9862 4.6897C43.9583 4.6897 55.2848 16.0163 55.2848 29.9884C55.2848 43.9605 43.9583 55.2871 29.9862 55.2871Z" fill="#ADC6FF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M28.9509 26.2897C28.9509 29.2311 26.5663 31.6157 23.6249 31.6157C20.6834 31.6157 18.2988 29.2311 18.2988 26.2897C18.2988 23.3482 20.6834 20.9636 23.6249 20.9636C26.5663 20.9636 28.9509 23.3482 28.9509 26.2897Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M41.6735 26.2897C41.6735 29.2311 39.289 31.6157 36.3475 31.6157C33.406 31.6157 31.0215 29.2311 31.0215 26.2897C31.0215 23.3482 33.406 20.9636 36.3475 20.9636C39.289 20.9636 41.6735 23.3482 41.6735 26.2897Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.9911 26.1418C25.9911 27.3674 24.9975 28.3609 23.7719 28.3609C22.5463 28.3609 21.5527 27.3674 21.5527 26.1418C21.5527 24.9161 22.5463 23.9226 23.7719 23.9226C24.9975 23.9226 25.9911 24.9161 25.9911 26.1418Z" fill="#253368"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M38.4188 26.1418C38.4188 27.3674 37.4253 28.3609 36.1996 28.3609C34.9741 28.3609 33.9805 27.3674 33.9805 26.1418C33.9805 24.9161 34.9741 23.9226 36.1996 23.9226C37.4253 23.9226 38.4188 24.9161 38.4188 26.1418Z" fill="#253368"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.9583 36.25C20.74 35.811 20.9188 35.2783 21.3578 35.0599C21.7968 34.8415 22.3295 35.0204 22.5479 35.4594C23.8003 37.9777 26.7198 39.6049 29.9856 39.6049C33.2514 39.6049 36.1709 37.9777 37.4234 35.4594C37.6417 35.0204 38.1743 34.8416 38.6135 35.0599C39.0525 35.2783 39.2313 35.8111 39.013 36.25C37.463 39.3665 33.9195 41.3802 29.9856 41.3802C26.0517 41.3802 22.5082 39.3665 20.9583 36.25Z" fill="#253368"/>
</svg>

`,
        },
        {
          count: "300",
          text: `Chat Reviews`,
          svg: `
         <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M33.8602 30.5509C28.6411 30.5509 24.4102 34.7818 24.4102 40.0009V40.025C24.4102 45.2441 28.6411 49.475 33.8602 49.475H47.7961C48.3167 49.475 48.8274 49.4329 49.3251 49.3519L52.0251 51.9598C52.0985 52.0307 52.1966 52.0703 52.2986 52.0703C52.5161 52.0703 52.6924 51.8941 52.6924 51.6766L52.6926 48.1091C55.4223 46.4522 57.2461 43.4516 57.2461 40.025V40.0009C57.2461 34.7818 53.0152 30.5509 47.7961 30.5509H33.8602Z" fill="#253368"/>
<path d="M36.1523 7.91016H16.2539C8.79806 7.91016 2.75391 13.9543 2.75391 21.4102C2.75391 28.866 8.79806 34.9102 16.2539 34.9102H36.1523C43.6082 34.9102 49.6523 28.866 49.6523 21.4102C49.6523 13.9543 43.6082 7.91016 36.1523 7.91016Z" fill="#597EF7"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.25781 30.9833V38.0506C9.25781 38.3613 9.50965 38.6131 9.82031 38.6131C9.96602 38.6131 10.106 38.5566 10.2109 38.4554L15.4043 33.4444L9.25781 30.9833Z" fill="#597EF7"/>
<path d="M17.168 23.0977C18.3718 23.0977 19.3477 22.1218 19.3477 20.918C19.3477 19.7142 18.3718 18.7383 17.168 18.7383C15.9642 18.7383 14.9883 19.7142 14.9883 20.918C14.9883 22.1218 15.9642 23.0977 17.168 23.0977Z" fill="white"/>
<path d="M26.0977 23.0977C27.3015 23.0977 28.2773 22.1218 28.2773 20.918C28.2773 19.7142 27.3015 18.7383 26.0977 18.7383C24.8938 18.7383 23.918 19.7142 23.918 20.918C23.918 22.1218 24.8938 23.0977 26.0977 23.0977Z" fill="white"/>
<path d="M35.2383 23.0977C36.4421 23.0977 37.4179 22.1218 37.4179 20.918C37.4179 19.7142 36.4421 18.7383 35.2383 18.7383C34.0345 18.7383 33.0586 19.7142 33.0586 20.918C33.0586 22.1218 34.0345 23.0977 35.2383 23.0977Z" fill="white"/>
</svg>
`,
        },
        {
          svg: `
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M47.1021 20.1982C47.1021 10.77 39.457 3.04688 30.026 3.04688C20.595 3.04688 12.9492 10.77 12.9492 20.1982C12.9492 23.9297 14.9306 28.7496 18.1123 32.3032C21.2672 35.8245 22.1658 41.7525 22.1658 46.4796V48.333H37.8863V46.4951C37.8863 41.768 38.7848 35.8512 41.9236 32.3187C45.1158 28.7285 47.1021 23.4804 47.1021 20.1982Z" fill="#FFE58F"/>
<path d="M44.2917 20.1518C44.2917 12.2768 37.9066 5.82422 30.026 5.82422C22.1454 5.82422 15.7617 12.2761 15.7617 20.1518C15.7617 23.2716 17.4162 27.2962 20.0747 30.2648C22.71 33.2067 24.6668 38.1588 24.6668 42.1076V43.6545H35.3859V42.1209C35.3859 38.1715 37.3427 33.2285 39.9654 30.2775C42.6323 27.2787 44.2917 22.8947 44.2917 20.1525V20.1518Z" fill="#FAAD14"/>
<path d="M34.3598 56.9815H25.6916C25.3886 56.9815 25.1122 56.7846 24.9477 56.4612L23.7686 53.4103H36.2842L35.1051 56.4612C34.9398 56.7846 34.6642 56.9815 34.3612 56.9815H34.3598Z" fill="#253368"/>
<path d="M36.4645 41.2821H23.586C22.6292 41.2821 21.8535 42.0578 21.8535 43.0146V52.9912C21.8535 53.9481 22.6292 54.7237 23.586 54.7237H36.4645C37.4213 54.7237 38.197 53.9481 38.197 52.9912V43.0146C38.197 42.0578 37.4213 41.2821 36.4645 41.2821Z" fill="#597EF7"/>
<path d="M31.083 44.8838C31.2424 44.8838 31.3716 45.013 31.3716 45.1724C31.3716 45.3276 31.2491 45.4542 31.0955 45.4608L31.083 45.4611H21.8755C21.7161 45.4611 21.5869 45.3318 21.5869 45.1724C21.5869 45.0172 21.7094 44.8906 21.863 44.8841L21.8755 44.8838H31.083Z" fill="white"/>
<path d="M31.083 50.8597C31.2424 50.8597 31.3716 50.989 31.3716 51.1484C31.3716 51.3036 31.2491 51.4302 31.0955 51.4367L31.083 51.437H21.8755C21.7161 51.437 21.5869 51.3078 21.5869 51.1484C21.5869 50.9932 21.7094 50.8666 21.863 50.86L21.8755 50.8597H31.083Z" fill="white"/>
<path d="M38.1445 47.8715C38.3039 47.8715 38.4331 48.0007 38.4331 48.1601C38.4331 48.3153 38.3106 48.4419 38.157 48.4485L38.1445 48.4487H28.9371C28.7777 48.4487 28.6484 48.3195 28.6484 48.1601C28.6484 48.0049 28.771 47.8783 28.9246 47.8717L28.9371 47.8715H38.1445Z" fill="white"/>
<path d="M31.1907 13.305L24.7537 23.1101C24.4074 23.6417 24.7799 24.2954 25.4039 24.2954H28.2874L24.742 30.9922C24.4778 31.5337 25.1594 32.0361 25.5773 31.6079L35.2192 21.9214C35.7111 21.4172 35.3618 20.5562 34.6657 20.5562H30.3054L32.1296 13.7326C32.2722 13.1502 31.515 12.8085 31.1907 13.305Z" fill="white"/>
</svg>
`,
          count: "80",
          text: `Products Enlisted`,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.counter-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 1100px) {
    flex-direction: column
  }

}
.counter_section {
  background: url(../../assets/Counter-Bg.jpg);
  background-size: cover;
  position: relative;

  @media (max-width: 960px) {
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
      img {
        //transform: translateX(-40px);
        max-width: 100%;
        @media (max-width: 550px) {
          //width: 100%;
          object-fit: cover;
        }
      }
    }

    .counter_text {
      display: flex;
      align-items: center;
      flex-direction: column;
      margin: 0 20px;
      @media (max-width: 1100px) {
        flex-direction: column;
        margin: 20px 0;
      }
      //@media (max-width: 960px) {
      //  flex-direction: column;
      //}
      //@media (max-width: 450px) {
      //  padding-left: 10px;
      //}
      //
      //@media (max-width: 960px) {
      //  //flex-direction: row;
      //  //justify-content: center;
      //}

      p {
        font-style: normal;
        font-weight: 600;
        font-size: 60px;
        line-height: 70px;
        letter-spacing: 0.5px;
        color: #ffffff;
        @media (max-width: 1100px) {
          font-size: 60px;
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
        text-align: center;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 26px;
        letter-spacing: 1.5px;
        color: #ffffff;
        //margin-left: 50px;
        @media (max-width: 1100px) {
          br {
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
