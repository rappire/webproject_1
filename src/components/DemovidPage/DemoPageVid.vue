<template>
    <div class = 'video-box'>
        <video class = 'video' autoplay muted loop preload>
        <source src = "@/assets/DemovidPage/video.mp4" type="video/mp4">
        <p>에러 문자열</p>
        </video>
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
margin: 0px auto; 
overflow: hidden;
position: relative;
}
.video{
width: 100%;
}
</style>
  