<template>
  <div id="app" class = "app-box">
    <div class = "scroll">
      <MainHeader></MainHeader>
      <MainVideo></MainVideo>
    </div>
    <div class = "scroll-padding">
      <MainImage></MainImage>
      <MainFooter></MainFooter>
    </div>
  </div>
</template>

<script>
import MainVideo from './components/MainVideo.vue';
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
  width:100%;

}
.app-box{
  height: 100vh;
  overflow: scroll;
  scroll-snap-type: y mandatory; 
}
.scroll-main{
  height: 100vh;
  overflow: scroll;
  scroll-snap-type: y mandatory; 
}
.scroll{
  height: 100vh;
  scroll-snap-align: start;  
}
.scroll-padding{
  scroll-padding-top: 10vh;
  height: 90vh;
  scroll-snap-align: start;  
}
</style>
