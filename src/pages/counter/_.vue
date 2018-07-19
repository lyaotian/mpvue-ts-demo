<template>
  <div class="counter-warp">
    <p>Vuex counter：{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>

    <a :href="AppUrls.INDEX" class="home">去往首页</a>
    <a :href="AppUrls.LOGS" class="home">去往logs</a>
  </div>
</template>

<script lang="ts" src="./_.ts"></script>
<style scoped lang="scss" src="./_.scss"></style>