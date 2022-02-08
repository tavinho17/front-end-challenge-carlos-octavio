<template>
  <div id="app">
     <router-link to="/" class="d-flex justify-content-center"><img alt="Vue logo" src="./assets/logo.svg" class="logo pt-3" /></router-link>
    <router-view/>
  </div>
</template>

<style>
.logo {
  height: 60px;
}
.overlayinn{
  cursor: pointer;
}
.overlayinn:hover::after{
  opacity: 1;
}
.image-text{
  z-index: 2;
  font-size: 14px;
  font-weight: 900!important;
  color: #ffffff;
  position: absolute;
  bottom: 0;
  left: 5px;
  opacity: 0;
  transition: opacity .8s;
}
.overlayinn:hover .image-text{
  opacity: 1;
}
.overlayinn::after {
  content: '';
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
  border-radius: 0.25rem!important;
  opacity: 0;
  top: 0;
  left: 0;
  position: absolute;
  transition: opacity .5s;
}
  .slick-prev{
    z-index:2!important;
    left:5px!important;
  }
  .slick-next{
    z-index:2!important;
    right:5px!important;
  }
  .btn-lg {
    padding: 0.5rem;
    font-size: .9rem;
    line-height: 1.1;
    border-radius: 0.3rem;
  } 
  #app{
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
</style>
