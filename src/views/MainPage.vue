<template>
    <div class = "main-box">
      <MainHeader></MainHeader>
      <MainVideo></MainVideo>
      <MainImage></MainImage>
      <MainFooter></MainFooter>
    </div>
  </template>
  
  <script>
  import MainVideo from '@/components/MainPage/MainVideo.vue';
  import MainImage from '@/components/MainPage/MainImage.vue';
  import MainHeader from '@/components/MainPage/MainHeader.vue';
  import MainFooter from '@/components/MainPage/MainFooter.vue';
  
  export default {
    components: {
      MainVideo,
      MainImage,
      MainHeader,
      MainFooter,
    },
  }
  </script>
  
  <style scoped>
  .main-box {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    overflow: auto;
    scroll-snap-type: y mandatory;
    background-color: black;
  }
  </style>
  