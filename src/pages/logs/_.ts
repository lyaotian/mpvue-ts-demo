import { Component, Vue } from "vue-property-decorator"
import { AppUrls } from "@/utils/consts.ts"
import Card from '@/components/card.vue' // mpvue目前只支持的单文件组件
const debug = require("debug")("log:Page/Counter")

import { formatTime } from '@/utils/index'

@Component({
    components: {
      Card
    }
  })
export default class Logs extends Vue {
    AppUrls = AppUrls

    count = 0
    logs: any[] = []

    constructor() {
        super()
        const logs = (wx.getStorageSync('logs') || [1])
        this.logs = logs.map(log => formatTime(new Date(log)))

        console.log(logs)
    }

    increment() {
        this.count += 1
        debug("increment")
    }

    decrement() {
        this.count -= 1
        debug("decrement")
    }
}
