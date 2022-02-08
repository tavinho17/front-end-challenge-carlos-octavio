<template>
    <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
            <li :class="activePage === page ? 'disabled' : ''" class="page-item" :disabled="activePage === page" v-for="(page,index) in pagination" :key="index">
                <a class="page-link" @click="setPage(page)">{{page}}</a>
            </li>
        </ul>
    </nav>
</template>

<script>

export default {
  name: 'pagination',
  components:{
    
  },
  props: {
   
  },
  data(){
    return{}
  },
  methods:{
    setPage(page){
        console.log(page)
        this.$store.commit('setPagination',{key:'activePage',val:page})
    }
  },
  computed:{
    pagination(){
      return this.$store.getters.getPagination
    },
    activePage(){
       return this.$store.getters.getActivePage;
    }
  }
}
</script>
<style scoped>
.page-link{
    color:#C70167;
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->

