<template>
  <div class="home">
    <img src="../assets/images/logo-me.jpg">
    <h1>{{ greeting }}</h1>
    <ul class="components-list">
      <li><a href="/refreshing">Refreshing</a></li>
      <li><a href="/loading">Loading</a></li>
    </ul>
  </div>
</template>

<script>
import Refreshing from './Refreshing.vue'
import Loading from './Loading.vue'
export default {
  name: 'Home',
  components: {Refreshing,Loading},
  data () {
    return {
      greeting: "Welcome to Yuanerbiao's Vue Component Library"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
img {
  width: 70px;
  height: 70px;
  margin-top: 50px;
}
.components-list {
  li {
    list-style-type: none;
  }
}
</style>
