<template>
  <v-row>
    <v-col
      cols="12"
      md="4"
      sm="6"
      v-for="teammember in team"
      :key="teammember.id"
      class="team_item"
    >
      <div class="team_img">
        <img :src="teammember.img" alt="" />
      </div>
      <div class="team_details">
        <h3>{{ teammember.name }}</h3>
        <p>{{ teammember.categoryL }}</p>
        <span>{{ teammember.country }}</span>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ["team"],
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.team_item{
  transition: .5s ease;
  cursor: pointer;
  &:hover{
    transform: translateY(-10px);
  }
}
.team_details {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 10px;
  h3 {
    font-style: normal;
    font-weight: normal;
    font-size: 20px;

    text-align: center;

    color: #0d1016;
    margin: 0;
  }
  p {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    text-align: center;
    margin: 0;
    color: #222731;
    margin: 4px 0;
  }
  span {
    font-style: normal;
    font-weight: normal;
    font-size: 17px;

    text-align: center;

    color: rgba(13, 16, 22, 0.6);
    display: inline-block;
  }
}
.team_img {
  width: 100%;
  img {
    width: 100%;
    object-fit: cover;
  }
}
</style>
