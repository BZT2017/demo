<template>
  <div id="app">
    <div class="home">
      <div v-show="showView"
           @click="goShuttleBox">穿梭框demo</div>
    </div>
    <router-view v-show="!showView"></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    components: {},
    data() {
      return {
        showView: true
      }
    },
    methods: {
      goShuttleBox() {
        this.showView = false
        let b = 'aaa'
        let a = 'aa'
        console.log(a + b)

        this.$router.push({
          name: 'shuttleBox'
        })
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>