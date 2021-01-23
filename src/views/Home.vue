<template>
  <div>
    <v-main>
      <!-- Banner -->
      <Banner :banner="banner"></Banner>
      <!-- About -->
      <About></About>
      <!-- Counter -->
      <Counter></Counter>
      <!-- Work -->
      <Work></Work>
      <!-- Review -->
      <Review></Review>
    </v-main>
    <Footer></Footer>
  </div>
</template>

<script>
import Banner from "@/components/Banner/Banner";
import About from "@/components/About/About";
import Counter from "@/components/Counter/Counter";
import Work from "@/components/Work/Work";
import Review from "@/components/Review/Review";
import Footer from "@/components/Footer/Footer";

export default {
  name: "Home",
  components: {
    Banner,
    About,
    Counter,
    Work,
    Review,
    Footer,
  },
  data() {
    return {
      banner: {
        title1: "Behind every review is an",
        title2: "experience that matters",
        description:'Read reviews. Write reviews. Find companies.',
        img:require('@/assets/Banner.jpg')
      },
    };
  },
};
</script>

<style lang="scss">
.v-main{
  padding: 55px 0 0 !important;
}
@media (max-width: 800px) {
  .v-main {
    padding-top: 0px !important;
  }
}
</style>
