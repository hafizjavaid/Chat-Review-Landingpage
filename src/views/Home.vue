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

  <v-footer app>
  </v-footer>
</div>
</template>

<script>

import Banner from "@/components/Banner/Banner"
import About from "@/components/About/About"
import Counter from "@/components/Counter/Counter"
import Work from "@/components/Work/Work"
import Review from "@/components/Review/Review"
export default {
  name: 'Home',
  components: {
   Banner,
   About,
   Counter,
   Work,
   Review
  }
}
</script>
