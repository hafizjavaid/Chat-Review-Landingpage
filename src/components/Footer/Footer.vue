<template>
  <section class="footer_section">
    <div class="footer_inner">
     <h1>Chat Review</h1>
     <div class="btns-container">
         <p  class="footer_nav"  v-for="link in links"
          :key="link.text" >
        {{ link.text }}
      </p>
      <p class="footer_text">© 2021 RigRex, Inc. All rights reserved.</p>
     </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
     links: [
      { text: "About us", route: "/about" },
      {  text: "Jobs", route: "/jobs" },
      {  text: "Contact", route: "/contact" },
      {  text: "Blog", route: "/blog" },
      {
          text:'Press', route:"/press"
      }

    ],
    };
  },
};
</script>

<style lang="scss" scoped>
.footer_section{
    margin-top: 129px;
    padding: 60px 0px 30px 50px;
    background: #000051;
    h1{
        font-style: normal;
font-weight: normal;
font-size: 36px;
line-height: 42px;
letter-spacing: 0.5px;
color: #FFFFFF;
margin: 0;
padding: 0;
    }
    .btns-container{
        margin-top: 64px;
    }
    .footer_nav{
        background: none;
        font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 16px;
letter-spacing: 0.5px;

color: rgba(255, 255, 255, 0.6);
margin: 0;
padding: 0;
margin-bottom: 27px;
// display: inline-block;
    }
    .footer_text{
        font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 16px;
letter-spacing: 0.5px;

color: rgba(255, 255, 255, 0.64);
text-align: center;
    }
}
</style>
