<template>
  <div class="input-group mb-3 p-4 shadow">
    <h4 class="mb-3">Filtrando por: <span>{{getValFilter()}}</span></h4>
    <select class="form-control mb-3"  @change="$emit('update:filterType',$event.target.value);$emit('getPropiedades')">
      <option :value="el.type" :selected="filterType == el.type" v-for="(el,index) in dataFilter" :key="index">{{el.name}}</option>
    </select>
    <div class="input-group-prepend">
      <span class="input-group-text" id="basic-addon1"><i class="fas fa-search"></i></span>
    </div>
    <input type="text" class="form-control" placeholder="Filtar por Endereço" @input="emitFilterSearch($event.target.value)" aria-label="Filtar por Endereço" aria-describedby="basic-addon1">
  </div>
</template>

<script>
export default {
  name: 'filterImovel',

  props: {
    inputFilter: String,
    filterType:String,
    getPropiedades:Function
  },
  data(){
    return{
      dataFilter:[
        {type:'desc',name:'Ordem decrescente'},
        {type:'cresc',name:'Ordem crescente'},
        {type:'numberbathrooms',name:'Numero de banheiros'},
        {type:'area',name:'Tamanho'}
      ]
    }
  },
  methods:{
    getValFilter(){
      return this.dataFilter.filter(el => el.type == this.filterType)[0].name
    },
    emitFilterSearch(val){
      this.$emit('update:inputFilter', val) 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
select{
  width: 100%!important ;
}
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
