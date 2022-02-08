<template>
  <div class="container-fluid py-3">
    <div class="col-md-12 mx-auto ">
      <div class="row "  v-if="load">
        <div class="col-md-8" >
          <transition-group name="list" tag="div" class="card-deck mb-3 text-center row justify-content-center ">
            <div  v-for="(item,index) in listImovel" :key="index + 1" class="col-md-4">
              <listImovel :item="item" class=" shadow card  list-item" />
            </div>
            <div :key="listImovel.length+1" v-if="listImovel.length == 0 && load" class="list-item">
              <h1>Nenhum imóvel encontrado :(</h1>
            </div>
          </transition-group>  
          <paginationCp v-if="!inputFilter"/>
        </div>
        <div class="col-md-4 position-relative">
          <filterImovel :inputFilter.sync="inputFilter" :filterType.sync="filterType" @getPropiedades="getPropiedades"/>
          <GmapMap :center='geoList[0]' :zoom='14' style='width:100%;  height: 100vh;'>
            <GmapMarker v-for="(item,index) in geoList" :key="index" :position="item"  icon="http://maps.google.com/mapfiles/ms/icons/pink-dot.png" />
          </GmapMap>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import listImovel from '@/components/listImovel.vue'
import paginationCp from '@/components/pagination.vue'
import {HTTP} from '@/services/api.js'
import filterImovel from '@/components/filters.vue'
export default {
  name: 'Home',
  components: {
    listImovel,
    paginationCp,
    filterImovel
  },
  data(){
    return {
      load:false,
      inputFilter:null,
      filterType:'cresc'
    }
  },
  mounted(){
    this.getPropiedades();
    this.$nextTick(()=>{
      this.load = true;
    })
  },
  methods:{
    getPropiedades(){
      console.log(this.filterType)
      this.$store.dispatch("getProiedades",this.filterType).then(res =>{
        //this.listImovel = res.sort(this.sortFunction);
      })
    },
  },
  computed: {
    listImovel () {
      let imoveis;
      if(this.inputFilter){
        imoveis = this.$store.getters.getterAll.filter(e => e.address.formattedAddress.toLowerCase().startsWith(this.inputFilter.toLowerCase()))
      }else{
        imoveis = this.$store.getters.getterPropiedade;
      }
      return imoveis;
    },
    geoList(){
      return this.$store.getters.getGeolocalization
    }
  }
}
</script>
<style scoped>
h1{
  color: #C70167;
}
.logo{
  height:60px;
}
.fixedMap{
  top: 0;
  width: 33.3%;
  bottom: 0;
  right: 0;
  position: fixed;
}
.card{
  border:none;
}
.container-fluid{
  background:#fff;
}

.list-enter-active, .list-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.list-enter, .list-leave-to /* .list-leave-active em versões anteriores a 2.1.8 */ {
  opacity: 0;
  transform: translateX(30px);
}
</style>
