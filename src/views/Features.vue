<template>
  <div>
    <v-main>
      <!-- Banner -->
      <Banner :banner="banner"></Banner>
      <Featuress></Featuress>
      <UFeaturess></UFeaturess>
      <SFeatures></SFeatures>

    </v-main>
    <Footer></Footer>
  </div>
</template>

<script>
import Banner from "@/components/Banner/Banner";
import Featuress from "@/components/Features/Features";
import SFeatures from "@/components/Features/SFeatures";
import UFeaturess from "@/components/Features/UFeatures";


import Footer from "@/components/Footer/Footer";

export default {
  name: "Features",
  components: {
    Banner,
    Featuress,
    UFeaturess,
    SFeatures,
    Footer,
  },
  data() {
    return {
      banner: {
        title1: "Turn customers into",
        title2: " fanatics",
        description: "Read reviews. Write reviews. Find companies.",
        img: require("@/assets/banner2.jpg"),
      },
    };
  },
};
</script>

<style lang="scss">
.v-main {
  padding: 55px 0 0 !important;
}
@media (max-width: 800px) {
  .v-main {
    padding-top: 0px !important;
  }
}
</style>
