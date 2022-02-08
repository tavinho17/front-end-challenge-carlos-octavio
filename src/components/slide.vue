<template>
  <VueSlickCarousel  v-bind="settings" class="slide">
    <img alt="Vue logo" :src="image"  class="img-fluid" v-for="(image,i) in images" :key="i">
  </VueSlickCarousel>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  name: 'slideImage',
  components:{
    VueSlickCarousel
  },
  props: {
    images: Array
  },
  data(){
    return{
      settings: {
        "dots": false,
        "dotsClass": "slick-dots custom-dot-class",
        "edgeFriction": 0.35,
        "infinite": false,
        "speed": 500,
        "slidesToShow": 1,
        "slidesToScroll": 1
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  img{
     height:100%;
     object-fit:cover;
     max-height:160px;
  }
</style>
