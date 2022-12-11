<template>
  <div class = "gallery-box">
    <ul>
      <li v-for = "item in itemlist" v-bind:key="item">
        <img v-bind:src=item alt="err" class = "gallery-img">
      </li>
    </ul>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      itemlist :[require("@/assets/GalleryPage/image1.jpg"),require("@/assets/GalleryPage/image2.jpg"), require("@/assets/GalleryPage/image3.jpg")]
    }
  }
}
</script>

<style>
.gallery-box{
  padding-top: 10vh;
  height: 100vh;
  font-size: 100px;
}
.gallery-img{
  max-width: 100%;
}
</style>