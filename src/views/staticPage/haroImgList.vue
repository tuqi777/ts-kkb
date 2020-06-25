<template>
  <div>
    <div class="imgwraper">
      <img
        :class="{bigImg:index === 2}"
        v-for="(item, index) in imgList"
        :key="index"
        :src="item.url" alt="" srcset="">
    </div>
  </div>
</template>

<script>
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Imgs extends Vue {
  imgList = [{
    url: require('./../../assets/img/t1.jpg'),
    type: 1
  }, {
    url: require('./../../assets/img/t1.jpg'),
    type: 1
  }, {
    url: require('./../../assets/img/t2.jpg'),
    type: 2
  }, {
    url: require('./../../assets/img/t1.jpg'),
    type: 1
  }, {
    url: require('./../../assets/img/t1.jpg'),
    type: 1
  }]
}
</script>

<style lang="scss" scoped>
.imgwraper{
  width: 920px;
  height: 400px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  img{
    display: inline-block;
    width: 300px;
    height: 200px;
  }
  .bigImg{
    height: 100%;
  }
}
</style>