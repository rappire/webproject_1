<template>
  <div class = 'video-box'>
    <video class = 'video' autoplay muted loop preload>
      <source src = "../assets/video.mp4" type="video/mp4">
      <p>에러 문자열</p>
    </video>
    <div class = "video-text">
          <p>테스트 문자열 입니다.</p>
    </div>
  </div>
</template>

<script>
  export default {
    
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.video-box{
      width: 100%; 
      height: 100vh;
      overflow: hidden;
      margin: 0px auto; 
      position: relative;
    }
    .video{
      width: 100%;
    }
    .video-text{
      position: absolute; 
      top: 50%; 
      width: 100%;
    }
    .video-text p{
      margin-top: -10%;
      margin-left: 10%;
      text-align: left;
      font-size: 30px;
      color: aliceblue;
    }

</style>
