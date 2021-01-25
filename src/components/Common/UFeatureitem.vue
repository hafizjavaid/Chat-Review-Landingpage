<template>
  <v-row>
    <v-col
      cols="12"
      sm="6"
      md="4"
      class="d-flex flex-column align-center items"
      v-for="feature in features"
      :key="feature.id"
    >
      <div>
        <div class="d-flex justify-center">
          <span v-html="feature.svg">
            {{ feature.svg }}
          </span>
        </div>
        <div>
          <h3>{{ feature.name }}</h3>
          <p>
            {{ feature.des }}
          </p>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ["features"],
};
</script>

<style lang="scss" scoped>
.items {
  // box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  padding: 20px 5px;
  margin-bottom: 50px;
  transition: 0.5s ease;
  &:hover {
    transform: translateY(10px);
    background-color: #eee;
  }
  @media(max-width: 600px)
  {
    margin-bottom: 10px;
  }
}
.items > div{
  margin: 10px;
}
h3 {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #253368;
  margin: 0;
  margin-bottom: 17px;
  text-align: center;
  font-weight: 700;
}
p {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #3e3e3e;
  margin: 0;
  text-align: center;
}
</style>
