<template>
  <div>
    <h2>{{title}}</h2>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Header extends Vue {
  @Prop() private title?: string
}
</script>

<style lang="scss" scoped>

</style>
