<template>
  <div class="counter-warp">
    <p>Mpvue</p>
    <p>ts value {{ ver }}</p>
    <card text="card 1"></card>
    <comp-b text="comp b" ver="22"></comp-b>
    <card text="card 2"></card>
    <comp-alias text="hello3"></comp-alias>
    <a :href="AppUrls.COUNTER" class="home">去往vuex</a>
    <a :href="AppUrls.my_page" class="home">去往My Page</a>
  </div>
</template>

<script lang="ts" src="./_.ts"></script>
<style scoped lang="scss" src="./_.scss"></style>