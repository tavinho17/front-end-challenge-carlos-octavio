<template>
    <div class="row">
        <div class="px-1 py-1 col-md-12">
          <ul class="list-unstyled mt-3 mb-4 text-left">
          <li><i class="fas fa-map-marked-alt mx-2"></i>{{item.address.formattedAddress}}</li>
          <li><i class="fas fa-bed my-2 mx-2"></i>Numero de quartos: <span>{{item.bedrooms}}</span></li>
          <li><i class="fas fa-toilet my-2 mx-2"></i>Numero de banheiros: <span>{{item.bathrooms}}</span></li>
          <li><i class="fas fa-warehouse my-2 mx-2"></i>Estacionamento: <span>{{item.parkingSpaces}}</span></li>
          <li><i class="fab fa-delicious my-2 mx-2"></i>Tamanho: <span>{{item.usableArea}}m2</span></li>
        </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: 'tabOne',

  props: {
     item: {}
   },
  data(){
    return{

    }
  },
  mounted(){
  
  },
  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-img-top{
  border-radius:0;
}

 li{
    font-size: 14px;
 }
 span{
  font-weight: 500;
  color:#4C4C4C;
 }

  i{
     color: #C70167;
  }

</style>
