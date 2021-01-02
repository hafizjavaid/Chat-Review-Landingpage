<template>
  <section class="work_section">
    <div class="work_inner">
      <div class="title">
        <Title :title="title"></Title>
      </div>
      <div class="works">
        <div class="work" v-for="(work,i) in works" :key="i">
          <h1>{{work.title}}</h1>
          <p>
           {{work.text}}
          </p>
        </div>
        
      </div>
    </div>
  </section>
</template>

<script>
import Title from "../Common/Title";
export default {
  components: {
    Title,
  },
  data() {
    return {
      title: "How it works",
      works:[
          {
              title:'OBSERVE',
              text:`Silver, long hair almost fully covers a chiseled, time-worn face.
            Squinting green eyes, set seductively within their sockets, watch
            merrily over the ancestors they've sworn to protect for so long. set
            seductively within their sockets, watch merrily over the ancestors
            they've sworn to protect for so long.`
          },
          {
              title:'OBSERVE',
              text:`Silver, long hair almost fully covers a chiseled, time-worn face.
            Squinting green eyes, set seductively within their sockets, watch
            merrily over the ancestors they've sworn to protect for so long. set
            seductively within their sockets, watch merrily over the ancestors
            they've sworn to protect for so long.`
          },
          {
              title:'OBSERVE',
              text:`Silver, long hair almost fully covers a chiseled, time-worn face.
            Squinting green eyes, set seductively within their sockets, watch
            merrily over the ancestors they've sworn to protect for so long. set
            seductively within their sockets, watch merrily over the ancestors
            they've sworn to protect for so long.`
          },
      ]
    };
  },
};
</script>

<style lang="scss" scoped>
.work_section {
  padding: 82px 44px 95px 44px;
      @media(max-width: 450px)
      {
         
         padding: 80px 20px;
      }

  .works {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
     @media(max-width:650px)
      {
          justify-content: center;
      }
    .work {
      flex: 0 0 calc(33.33% - 28px);
      max-width: calc(33.33% - 28px);
      @media(max-width:960px)
      {
          flex: 0 0 calc(50% - 28px);
      max-width: calc(50% - 28px);
      }
     
      margin-bottom: 28px;
      width: 100%;
      background: #f7f7f7;
      box-shadow: 0px 3px 13px -4px rgba(0, 0, 0, 0.25);
      border-radius: 2px;
      margin-right: 28px;
      color: #000051;
      padding: 32px 32px 16px 32px;
      @media(max-width: 450px)
      {
          padding: 16px;
      }
      &:last-child {
        margin-right: 0;
      }
        @media(max-width:650px)
      {
          flex: 0 0 calc(100% - 28px);
      max-width: calc(100% - 28px);
      margin-right: 0;
      }
      p {
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 28px;
        letter-spacing: 0.5px;
        color: #000051;
        margin: 0;
        padding: 0;
         @media(max-width: 450px)
      {
         
          font-size: 16px;
          line-height: 20px;
      }
      }
      h1 {
        font-style: normal;
        font-weight: 500;
        font-size: 26px;
        line-height: 28px;
        text-align: center;
        letter-spacing: 1.5px;
        color: #000051;
        margin: 0;
        padding: 0;
        margin-bottom: 19px;
            @media(max-width: 450px)
      {
         
          font-size: 20px;
          line-height: 20px;
          margin-bottom: 10px;
      }
      }
    }
  }
}
</style>
