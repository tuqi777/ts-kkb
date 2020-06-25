<template>
  <div id="layout">
    <Header class="head" :title="title"/>
    <Menu class="menu" :title="title"/>
    <Content class="content" title="馋她的身子">
      <router-view></router-view>
    </Content>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import Header from './header.vue'
import Menu from './menu.vue'
import Content from './content.vue'

@Component({
  components: {
    Header,
    Menu,
    Content
  }
})
export default class Layout extends Vue {
   title = '你不是真正的快乐！'
}
</script>

<style lang="scss" scoped>
#layout{
  width: 100%;
  height: 100%;
  position: relative;
  box-sizing: border-box;
}
.head{
  width: 100%;
  height: 50px;
  border: 1px dashed goldenrod;
  overflow: hidden;
}
.menu{
  width: 200px;
  height: calc(100vh - 50px);
  border: 1px dashed bisque;
  overflow: hidden;
}
.content{
  width: calc(100vw - 200px);
  height: calc(100vh - 50px);
  border: 1px dashed royalblue;
  position: absolute;
  left: 200px;
  top: 50px;
}
</style>
