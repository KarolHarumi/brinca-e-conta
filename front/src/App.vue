<template>
  <div id="app">
    <router-view/>
    <!--<Footer />-->
  </div>
</template>

<script>
  //import Footer from '@/components/Footer.vue'

  export default {
  components: {
    //Footer
  }
}
</script>

<style>
  #app {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>
