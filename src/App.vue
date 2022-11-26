<template>
  <div id="app">
    <MainHeader></MainHeader>
    <MainVideo></MainVideo>
    <MainImage></MainImage>
    <MainFooter></MainFooter>
  </div>
</template>

<script>
import MainVideo from '@/components/MainVideo.vue';
import MainImage from '@/components/MainImage.vue';
import MainHeader from '@/components/MainHeader.vue';
import MainFooter from '@/components/MainFooter.vue';

export default {
  name: 'App',
  components: {
    MainVideo,
    MainImage,
    MainHeader,
    MainFooter,
  },
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: auto;
  scroll-snap-type: y mandatory;
}
</style>
