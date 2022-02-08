<template>
    <div class="row">
        <div class="px-1 py-1 col-md-4" v-for="(image,index) in item.images" :key="index" @click="$emit('showImg',index)">
           <div class="overlayinn  position-relative">
              <img :src="image" class="img-fluid rounded"/>
              <h5 class="image-text">Ampliar</h5>
          </div> 
        </div>
    </div>
</template>

<script>
export default {
  name: 'tabZero',

  props: {
    item: Object,
    showImg: Function
  },
  data(){
    return{

    }
  },
  methods:{
    emitFilter(val){
        this.$emit('update:inputFilter', val)
       
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
    font-size: 14px;
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
