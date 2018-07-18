import { Vue, Component, Prop } from 'vue-property-decorator'

const debug = require('debug')('log:Comp/CompB')

// 必须使用装饰器的方式来指定component
@Component({
  // props: {
  //   text: String,
  //   var: Number,
  // }
})
class CompB extends Vue {
  @Prop({ default: 'default text' })
  text: string
  @Prop({ default: 0 })
  ver: number

  onShow() {
    debug('onShow')
  }

  onHide() {
    debug('onHide')
  }

  mounted() { // vue hook
    debug('mounted')
  }
}

export default CompB
