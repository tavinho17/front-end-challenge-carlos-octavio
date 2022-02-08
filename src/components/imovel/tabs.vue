<template>
    <ul class="nav nav-tabs my-3" id="myTab" role="tablist">
        <li class="nav-item">
            <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true" @click="$emit('changeCp',0)">Imagens</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false" @click="$emit('changeCp',1)">Descrição</a>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'tabs',
    props: {
        changeCp: Function
    },
    data(){
        return{

        }
    },
    mounted(){
        console.log("oii")
    },
    methods:{
        emitFilter(val){
            this.$emit('changeCp',val)
        
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a{
     color: #C70167;
  }
</style>
