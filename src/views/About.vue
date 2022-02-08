<template>
  <div class="py-3">
    <div class="container-fluid">
     
      <div class="col-md-12 mx-auto mb-4 pr-md-0">
        <div class="row" v-if="load">
          <div class="col-md-5 card shadow">
            <div class="card-body">
              <div class="row">
                <div class="col-md-12 px-1 py-1">
                  <div class="overlayinn  position-relative"  @click="showImg(0)">
                    <img :src="princiapalImage" class="img-fluid rounded"/>
                    <h5 class="image-text">Ampliar</h5>
                  </div> 
                </div>
                <div class="col-md-12">
                  <tabs  @changeCp="changeCp"/>
                </div>
              </div>
              <transition name="slide-fade">
                <component :is="cp" :item="imovel"  @showImg="showImg" v-show="loadCp"/>
              </transition>
            </div>
          </div>
          <div class="col-md-7 pr-md-0">
            <GmapMap
              :center="geolocation"
              :zoom="12"
              style="width: 100%; height: 100%"
            >
              <GmapMarker
                :position="geolocation"
                @click="center = m.position"
                icon="http://maps.google.com/mapfiles/ms/icons/pink-dot.png"
              />
            </GmapMap>
          </div>
          <vue-easy-lightbox
            escDisabled
            moveDisabled
            :visible="visible"
            :imgs="imovel.images"
            :index="index"
            @hide="handleHide"
          ></vue-easy-lightbox>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import tabs from "@/components/imovel/tabs.vue";
import tab0 from "@/components/imovel/tab0.vue";
import tab1 from "@/components/imovel/tab1.vue";
export default {
  components: {
    tab0,
    tab1,
    tabs
  },
  data() {
    return {
      load: false,
      id: null,
      cp: null,
      imovel: {},
      itemCp:null,
      visible: false,
      index: 0,
      loadCp:false,
      princiapalImage:'',
      geolocation: {
        lat: null,
        lng: null,
      },
    };
  },
  created(){
    
  },
  mounted() {
    const { params } = this.$route;
    this.id = params.id;
    this.$store.dispatch("getCurrentProiedade", this.id).then((res) => {
      this.imovel = res;
      const { geolocation } = res.address;
      this.princiapalImage = res.images[0];
      this.geolocation = {lat:geolocation.lat,lng:geolocation.lng};
      this.cp = tab0;
      this.$nextTick(()=>{
        this.load = true;
        this.loadCp= true;
      })
    });
  },
  methods: {
    changeCp(val) {
      this.load = false;
      const activeTab = `tab${val}`
      this.cp = activeTab
      this.load = true;
    },
    showImg (index) {
      console.log(index)
      this.index = index
      this.visible = true
    },
    handleHide () {
      this.visible = false
    }
  },
  
};
</script>
<style scoped>
.card{
  border: none;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active em versões anteriores a 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.about {
  background: #ffff;
  height: 100%;
}

</style>
