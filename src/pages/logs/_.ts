import { Component, Vue } from "vue-property-decorator"
import { AppUrls } from "@/utils/consts.ts"
import Card from '@/components/card.vue' // mpvue目前只支持的单文件组件
const debug = require("debug")("log:pages/logs")

import { formatTime } from '@/utils/index'

@Component({
    components: {
        Card
    }
})
export default class Logs extends Vue {
    AppUrls = AppUrls

    count = 0
    logs: string[] = []

    beforeCreate() {
        debug("beforeCreate")
    }

    created() {
        debug("created")

        const logs = (wx.getStorageSync('logs') || [1])
        this.logs = logs.map(log => formatTime(new Date(log)))

        console.log(logs)
    }

    mounted() {
        debug("mounted")

    }

    updated() {
        debug("updated")

    }

    activated() {
        debug("activated")

    }

    destroyed() {
        debug("destroyed")
    }
}
