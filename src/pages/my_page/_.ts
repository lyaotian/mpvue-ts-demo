import { Vue, Component } from 'vue-property-decorator'
import { AppUrls } from '@/utils/consts.ts'
import Card from '@/components/card.vue' // mpvue目前只支持的单文件组件
import CompB from '@/components/compb.vue' // mpvue目前只支持的单文件组件

const debug = require("debug")("log:pages/my_page")

// 必须使用装饰器的方式来指定component
@Component({
  components: {
    Card,
    CompB, //注意，vue的组件在template中的用法，`CompB` 会被转成 `comp-b`
  }
})
class MyPage extends Vue {
  AppUrls = AppUrls
  title = "My Page Title"

  onShow() { // 小程序 hook
    debug('onShow')
  }

  mounted() { // vue hook
    debug('mounted')
  }
}

export default MyPage
