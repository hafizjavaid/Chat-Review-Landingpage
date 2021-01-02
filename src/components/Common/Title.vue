<template>
  <div class="title">
      <h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
props:['title']
}
</script>

<style lang="scss" scoped>
 h1{
font-style: normal;
font-weight: normal;
font-size: 46px;
line-height: 52px;
text-align: center;
letter-spacing: 0.5px;
color: #000051;
margin: 0;
margin-bottom: 40px;
   }
</style>