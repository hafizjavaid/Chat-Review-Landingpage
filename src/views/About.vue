<template>
  <div>
  <v-main>
    <!-- Banner -->
  <Banner2></Banner2>
 <!-- Banner s-->
 <!-- Abbout -->
 <Abouttext></Abouttext>

 <!-- Team -->
 <Team></Team>
  </v-main>
  <Footer></Footer>
</div>
</template>

<script>

import Banner2 from "@/components/Banner/Banner2"
import Abouttext from "@/components/About/AboutText"
import Team from "@/components/Team/Team"

import Footer from "@/components/Footer/Footer"

export default {
  name: 'About',
  components: {
   Banner2,
   Footer,
   Abouttext,
   Team
  
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
