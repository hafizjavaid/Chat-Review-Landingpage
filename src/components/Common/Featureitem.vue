<template>
  <v-row>
    <v-col cols="12" sm="6" v-for="feature in features" :key="feature.id" class="feature_item">
      <v-row>
        <v-col cols="12" md="3" class="d-flex justify-center">
          <span v-html="feature.svg">
            {{ feature.svg }}
          </span>
        </v-col>
        <v-col cols="12" md="9">
          <h3>{{ feature.name }}</h3>
          <p>
            {{ feature.des }}
          </p>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ["features"],
};
</script>

<style lang="scss" scoped>
.feature_item{
  transition: .5s ease;
  cursor: pointer;
  &:hover{
    transform: translateY(-10px);
    
  }
}
h3 {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #253368;
  margin: 0;
  margin-bottom: 17px;
  font-weight: 700;
}
p {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #3e3e3e;
  margin: 0;
}
</style>
