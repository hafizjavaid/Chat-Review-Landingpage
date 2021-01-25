<template>
  <v-app class="team_section">
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="3">
          <h1>Our Team</h1>
        </v-col>
        <v-col cols="12" sm="9">
         <TeamItems :team='team'></TeamItems>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import TeamItems from "@/components/Common/Teamitem"
export default {

    data(){

        return{
            team:[
                {
                    id:1,
                    name:'Anthony Sochan',
                    categoryL:'Co-Founder',
                    countryL:'Melbourne',
                    img:require('@/assets/team.jpg')
                },
                {
                    id:2,
                    name:'Anthony Sochan',
                    categoryL:'Co-Founder',
                    countryL:'Melbourne',
                    img:require('@/assets/team1.jpg')
                },
                {
                    id:6,
                    name:'Anthony Sochan',
                    categoryL:'Co-Founder',
                    countryL:'Melbourne',
                    img:require('@/assets/team2.jpg')
                },
                {
                    id:3,
                    name:'Anthony Sochan',
                    categoryL:'Co-Founder',
                    countryL:'Melbourne',
                    img:require('@/assets/team3.jpg')
                },
                {
                    id:4,
                    name:'Anthony Sochan',
                    categoryL:'Co-Founder',
                    countryL:'Melbourne',
                    img:require('@/assets/team4.jpg')
                },
                {
                    id:5,
                    name:'Anthony Sochan',
                    categoryL:'Co-Founder',
                    countryL:'Melbourne',
                    img:require('@/assets/team.jpg')
                },
                
            ]
        }
    },
    components:{
        TeamItems
    }
};
</script>

<style lang="scss" scoped>
.team_section {
  border-radius: 0px;
  padding: 100px 80px 80px;
  font-family: "Roboto", sans-serif;
      @media(max-width:400px)
  {
    padding: 100px 30px 80px;
  

  }
  h1 {
    font-style: normal;
    font-weight: normal;
    font-size: 35px;
    color: #0d1016;
    margin: 0;
     position: sticky;
    // top: 90px;
    top: 80px;

  }
  
}
</style>
