<template>
  <div class="hello">
    <p>
      <input type="text" @keydown.enter="addListNode">
    </p>
    <tsxComp :title="loveStory"/>
    <ul>
      <!-- eslint-disable -->
      <li 
          v-for="(v, index) in vList" 
          :key="index" 
          @click="selectLi(index)"
          :class="{ selectedLi: v.selected }">{{v.name}}</li>
      <!-- eslint-enable -->
    </ul>
    <h2>特性总数：{{listLength}}</h2>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import tsxComp from '@/components/add'
type selectedType = {
  selected: boolean;
}
interface ListType {
  name: string;
  age: number;
}
type combin = selectedType & ListType
@Component({
  components: {
    tsxComp: tsxComp
  }
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  loveStory ='taleSWfit'
  private vList: combin[] = [{
    name: 'lp',
    age: 26,
    selected: false
  }, {
    name: 'cjy',
    age: 36,
    selected: true
  }]

  created () {
    console.log(this, 'Vue')
  }

  get listLength () {
    return this.vList.length
  }

  selectLi (i: number, v?: object) {
    this.vList[i].selected = true
    this.vList = this.vList.map((item, index) => {
      if (i !== index) item.selected = false
      return item
    })
  }

  addListNode (e: KeyboardEvent) {
    // 获取input的value
    // 如果用户特别确定类型，可以用一下方式做类型断言
    const inp = e.target as HTMLInputElement
    const val = inp.value
    const addObj = {
      name: val,
      age: Math.random() * 10,
      selected: false
    }
    this.vList.push(addObj)
    this.selectLi(this.vList.length - 1)
    inp.value = ''
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
.selectedLi{
  background: #42b983;
}
</style>
