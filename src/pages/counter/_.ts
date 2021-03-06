import { Component, Vue } from "vue-property-decorator"
import { AppUrls } from "@/utils/consts.ts"
const debug = require("debug")("log:pages/counter")

@Component
export default class Counter extends Vue {
  AppUrls = AppUrls

  count = 0

  increment() {
    this.count += 1
    debug("increment")
  }

  decrement() {
    this.count -= 1
    debug("decrement")
  }
}