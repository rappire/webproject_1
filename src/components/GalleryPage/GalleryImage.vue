<template>
  <div>
    <ul>
      <li v-for = "item in itemlist" v-bind:key="item">
        <!-- <img src={{item}} alt="err"> -->
        {{item}}
      </li>
    </ul>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      itemlist :["@/assets/GalleryPage/image1", "image2"]
    }
  }
}
</script>

<style>

</style>