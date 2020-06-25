<template>
  <div class="contentWraper">
    <div class="imgs">
      <h3>{{title}}</h3>
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Imgs extends Vue {
  @Prop() private title?: string
}
</script>

<style lang="scss" scoped>
.contentWraper{
  padding: 20px;
  box-sizing: border-box;
}

</style>
