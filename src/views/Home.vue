<template>
  <div>
  <v-main>
    <!-- Banner -->
  <Banner></Banner>
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

import Banner from "@/components/Banner/Banner"
import About from "@/components/About/About"
import Counter from "@/components/Counter/Counter"
import Work from "@/components/Work/Work"
import Review from "@/components/Review/Review"
import Footer from "@/components/Footer/Footer"

export default {
  name: 'Home',
  components: {
   Banner,
   About,
   Counter,
   Work,
   Review,
   Footer
  }
}
</script>

<style lang="scss">
@media(max-width: 800px)
{
.v-main{
  padding-top: 0px !important;
}
}


</style>
