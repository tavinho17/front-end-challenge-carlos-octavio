<template>
  <div class="mb-4">
    <div class="card-header">
      <h4 class="my-0 font-weight-normal">{{$options.filters.currency(item.price)}}</h4>
    </div>
      <slideImage :images="item.images" />
    
      <div class="card-body p-3">
        <ul class="list-unstyled mt-2 mb-3 text-left">
          <li><i class="fas fa-map-marked-alt mx-2"></i>{{item.address.formattedAddress}}</li>
          <li><i class="fas fa-bed my-2 mx-2"></i>Numero de quartos: <span>{{item.bedrooms}}</span></li>
          <li><i class="fas fa-toilet my-2 mx-2"></i>Numero de banheiros: <span>{{item.bathrooms}}</span></li>
          <li><i class="fas fa-warehouse my-2 mx-2"></i>Estacionamento: <span>{{item.parkingSpaces}}</span></li>
          <li><i class="fab fa-delicious my-2 mx-2"></i>Tamanho: <span>{{item.usableArea}}m2</span></li>
        </ul>
        <router-link :to="`/about/${item.id}`" type="button" class="btn btn-lg btn-block btn-outline-primary">Ver Imovel</router-link>
      </div>
  </div>
</template>

<script>
import slideImage from './slide.vue'
export default {
  name: 'listImovel',
  components:{
    slideImage
  },
  props: {
    item: Object
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
.card-img-top{
  border-radius:0;
}
 h4{
   font-size: 18px;
   font-weight: 900!important;
   color:#C70167;
 }
 li{
    font-size: 10px;
 }
 span{
  font-weight: 500;
  color:#4C4C4C;
 }
 .btn-outline-primary {
    color: #ff0094;
    border-color: #C70167;
  }
  i{
     color: #C70167;
  }
  .btn-outline-primary:hover {
    color: #fff;
    background-color: #C70167;
    border-color: #C70167;
}
</style>
