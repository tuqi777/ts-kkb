import { Component, Prop, Vue } from 'vue-property-decorator'
import { CreateElement } from 'vue/types/umd'

@Component
export default class HelloWorld extends Vue {
  @Prop() private title!: string;
  render (h: CreateElement) {
    return <h1 onClick={this.onClick}>{ this.title }</h1>
  }

  onClick () {
    console.log('被点击', this.title)
  }
}
